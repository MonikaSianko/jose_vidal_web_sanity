import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeSocial',
  title: 'Home Social',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'title', type: 'string' }),
    defineField({ name: 'description', title: 'description', type: 'string' }),
    defineField({
      name: 'items',
      title: 'items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'social' }] }],
    }),
  ],
})
