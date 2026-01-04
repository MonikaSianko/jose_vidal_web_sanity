import { defineType, defineField } from 'sanity'
import { languages } from '../../languages'

export default defineType({
  name: 'footer',
  title: 'Footer',
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
      name: 'copyright',
      title: 'Copyright',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Copyright text',
          type: 'string',
          description:
            'Example: José F. F. Vidal © 2025. All rights reserved.',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
})
