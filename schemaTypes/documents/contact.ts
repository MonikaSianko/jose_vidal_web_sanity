import { defineType, defineField } from 'sanity'
import { languages } from '../../languages'

export default defineType({
  name: 'contact',
  title: 'Contact',
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

    defineField({ name: 'email', title: 'email', type: 'string' }),
    defineField({ name: 'phone', title: 'phone', type: 'string' }),
    defineField({ name: 'address', title: 'address', type: 'address' }),
    defineField({
      name: 'mapEmbed',
      title: 'mapEmbed',
      type: 'text',
    }),
  ],
})
