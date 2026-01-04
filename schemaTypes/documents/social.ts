import { defineType, defineField } from 'sanity'
import { languages } from '../../languages'

export default defineType({
  name: 'social',
  title: 'Social',
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
    defineField({ name: 'link', title: 'link', type: 'link' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'language' },
  },
})
