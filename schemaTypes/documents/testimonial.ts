import { defineType, defineField } from 'sanity'
import { languages } from '../../languages'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
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

    defineField({ name: 'quote', title: 'quote', type: 'text' }),
    defineField({ name: 'person', title: 'person', type: 'string' }),
    defineField({ name: 'role', title: 'role', type: 'string' }),
    defineField({ name: 'photo', title: 'photo', type: 'image' }),
  ],
  preview: {
    select: {
      title: 'person',
      subtitle: 'language',
      media: 'photo',
    },
  },
})
