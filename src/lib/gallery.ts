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

// Build an image URL suitable for the current origin. Payload already stores
// URLs like `/media/xyz.jpg`, so we keep them relative instead of adding a
// hardcoded host. This works in both dev and production.
function mediaToImage(media: Media, caption?: string | null): GalleryImage {
  const url = media.url
  const src = url ?? ''
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

  const result = await payload.find({
    collection: 'gallery-functions',
    limit: 50,
    sort: '-createdAt',
    depth: 3, // populate items[].image (nested relation to media)
  })

  const itemsWithResolvedImages: { doc: (typeof result.docs)[0]; images: GalleryImage[] }[] = []

  for (const doc of result.docs) {
    if (!doc.items?.length || doc.show === false) continue
    const images: GalleryImage[] = []
    const mediaIdsToFetch: number[] = []
    const idOnlyIndices: number[] = [] // index in doc.items for each id in mediaIdsToFetch
    for (let i = 0; i < doc.items.length; i++) {
      const item = doc.items[i]
      if (item.show === false || item.image == null) continue
      if (typeof item.image === 'object' && 'url' in item.image) {
        images.push(mediaToImage(item.image as Media, item.caption))
      } else if (typeof item.image === 'number') {
        mediaIdsToFetch.push(item.image)
        idOnlyIndices.push(i)
      }
    }
    if (mediaIdsToFetch.length > 0) {
      const mediaDocs = await payload.find({
        collection: 'media',
        where: { id: { in: mediaIdsToFetch } },
        limit: mediaIdsToFetch.length,
        depth: 1,
      })
      const mediaById = new Map(mediaDocs.docs.map((m) => [m.id, m]))
      for (let j = 0; j < mediaIdsToFetch.length; j++) {
        const media = mediaById.get(mediaIdsToFetch[j])
        const item = doc.items![idOnlyIndices[j]]
        if (media?.url && item) images.push(mediaToImage(media, item.caption))
      }
    }
    if (images.length > 0) {
      itemsWithResolvedImages.push({
        doc,
        images,
      })
    }
  }

  return itemsWithResolvedImages.map(({ doc, images }) => ({
    id: String(doc.id),
    name: doc.name,
    description: doc.description ?? null,
    images,
  }))
}
