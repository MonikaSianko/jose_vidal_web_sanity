import { defineType, defineField } from 'sanity'
import { languages } from '../../languages'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',

  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: languages.map((l) => ({ title: l.title, value: l.id })),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'link' }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'link',
    }),
  ],

  preview: {
    select: { language: 'language' },
    prepare({ language }) {
      return { title: `Header (${language})` }
    },
  },
})
