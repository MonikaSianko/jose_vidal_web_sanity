import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'imageWithAlt',
  title: 'Image with alt',
  type: 'object',
  fields: [
    defineField({
      name: 'photo',
      title: 'photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'alt', title: 'alt', type: 'string' }),
  ],
  preview: { select: { media: 'photo', title: 'alt' } },
})
