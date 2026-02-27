import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: true,
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        const alt = typeof data.alt === 'string' ? data.alt.trim() : ''
        if (!alt) {
          // Prefer original upload filename if available, otherwise fall back to stored filename
          const originalName =
            (req as any)?.file?.originalname ??
            (typeof data.filename === 'string' ? data.filename : '')

          const base = originalName
            ? originalName.replace(/\.[^.]+$/, '') // remove extension
            : 'Media image'

          data.alt = base
            .replace(/[-_]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
        }

        return data
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
      admin: {
        description: 'Alternative text for accessibility. If left blank, it will be generated from the file name.',
      },
    },
  ],
}
