import type { CollectionConfig } from 'payload'

export const GalleryFunction: CollectionConfig = {
  slug: 'gallery-functions',
  labels: { singular: 'Gallery Function', plural: 'Gallery Functions' },
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['name', 'updatedAt'],
    description: 'One function/event with multiple photos. Add a function (e.g. Annual Day, Sports Day) and upload all its images here.',
  },
  fields: [
    {
      name: 'show',
      type: 'checkbox',
      label: 'Show this function in website gallery',
      defaultValue: true,
      admin: {
        description: 'Uncheck to hide this function from the gallery without deleting it.',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Function / Event Name',
      admin: { description: 'e.g. Annual Day 2024, Sports Day, Cultural Fest' },
    },
    {
      name: 'description',
      type: 'text',
      label: 'Short Description',
      admin: { description: 'Optional brief description of the function.' },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Photos',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Image',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
        },
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show this photo in gallery',
          defaultValue: true,
        },
      ],
      admin: { description: 'Add all photos for this function. Each item is one image with optional caption.' },
    },
  ],
}
