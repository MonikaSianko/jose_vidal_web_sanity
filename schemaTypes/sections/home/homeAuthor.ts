import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeAuthor',
  title: 'Home Author Section',
  type: 'object',
  fields: [
    defineField({
      name: 'meta',
      title: 'Section Meta',
      type: 'sectionMeta',
      initialValue: { sectionId: 'author' },
    }),
    defineField({
      name: 'author',
      title: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
  ],
  preview: {
    select: { title: 'meta.title', subtitle: 'meta.sectionId' },
    prepare({ title, subtitle }) {
      return { title: title ?? 'Author', subtitle }
    },
  },
})
