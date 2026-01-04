import { defineType, defineField } from 'sanity'
import { languages } from '../../languages'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'language',
      type: 'string',
      options: {
        list: languages.map((lang) => ({
          title: lang.title,
          value: lang.id,
        })),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({ name: 'title', title: 'title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({ name: 'subtitle', title: 'subtitle', type: 'string' }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'photo',
      title: 'cover',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'trailerUrl', title: 'trailerUrl', type: 'url' }),
    defineField({ name: 'buyLink', title: 'buyLink', type: 'link' }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'photo',
      subtitle: 'language',
    },
  },
})
