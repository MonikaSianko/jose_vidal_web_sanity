import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeCTA',
  title: 'Home CTA Section',
  type: 'object',
  fields: [
    defineField({
      name: 'meta',
      title: 'Section Meta',
      type: 'sectionMeta',
      initialValue: { sectionId: 'cta' },
    }),
    defineField({ name: 'primaryCta', title: 'primaryCta', type: 'link' }),
  ],
  preview: {
    select: { title: 'meta.title', subtitle: 'meta.sectionId' },
    prepare({ title, subtitle }) {
      return { title: title ?? 'CTA', subtitle }
    },
  },
})
