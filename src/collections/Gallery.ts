import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: { singular: 'Gallery Photo', plural: 'Photo Gallery' },
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['caption', 'image', 'updatedAt'],
    description: 'Photos for the website gallery. Upload function photos, events, and campus life.',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
      admin: { description: 'Upload or select an image from Media.' },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
      admin: { description: 'Short caption for the photo (e.g. event name, description).' },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: [
        { label: 'Function / Event', value: 'function' },
        { label: 'Campus', value: 'campus' },
        { label: 'Academic', value: 'academic' },
        { label: 'Sports & Cultural', value: 'sports-cultural' },
        { label: 'Other', value: 'other' },
      ],
      admin: { description: 'Optional: group photos by type.' },
    },
  ],
}
