import configPromise from '@payload-config'
import type { Media } from '@/payload-types'
import { getPayload } from 'payload'

export type GalleryImage = {
  id: string
  src: string
  alt: string
}

export type GalleryFunctionItem = {
  id: string
  name: string
  description?: string | null
  images: GalleryImage[]
}

function getBaseUrl(): string {
  if (typeof process.env.NEXT_PUBLIC_SITE_URL === 'string' && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  return 'http://localhost:3000'
}

function mediaToImage(media: Media, caption?: string | null, baseUrl?: string): GalleryImage {
  const url = media.url
  const src = url?.startsWith('http') ? url : `${baseUrl ?? getBaseUrl()}${url?.startsWith('/') ? '' : '/'}${url ?? ''}`
  return {
    id: String(media.id),
    src,
    alt: caption || media.alt || 'Gallery photo',
  }
}

/** Flat list of all gallery images (for backward compatibility / fallback). */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  const functions = await getGalleryFunctions()
  return functions.flatMap((f) => f.images)
}

/** Function-wise gallery: each function has a name and multiple images. */
export async function getGalleryFunctions(): Promise<GalleryFunctionItem[]> {
  const payload = await getPayload({ config: configPromise })
  const baseUrl = getBaseUrl()

  const result = await payload.find({
    collection: 'gallery-functions',
    limit: 50,
    sort: '-createdAt',
    depth: 2,
  })

  return result.docs
    .filter((doc) => doc.items && doc.items.length > 0)
    .map((doc) => ({
      id: String(doc.id),
      name: doc.name,
      description: doc.description ?? null,
      images: doc.items!
        .filter((item): item is typeof item & { image: Media } => item.image != null && typeof item.image === 'object' && 'url' in item.image)
        .map((item) => mediaToImage(item.image, item.caption, baseUrl)),
    }))
    .filter((f) => f.images.length > 0)
}
