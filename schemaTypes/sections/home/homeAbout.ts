import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeAbout',
  title: 'Home About Section',
  type: 'object',
  fields: [
    defineField({
      name: 'meta',
      title: 'Section Meta',
      type: 'sectionMeta',
      initialValue: { sectionId: 'about' },
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'bullets',
      title: 'bullets',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'video',
      description: 'Optional video displayed inside the About section.',
    }),
  ],
  preview: {
    select: { title: 'meta.title', subtitle: 'meta.sectionId' },
    prepare({ title, subtitle }) {
      return { title: title ?? 'About', subtitle }
    },
  },
})
