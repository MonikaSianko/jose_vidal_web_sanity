import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeTestimonials',
  title: 'Home Testimonials Section',
  type: 'object',
  fields: [
    defineField({
      name: 'meta',
      title: 'Section Meta',
      type: 'sectionMeta',
      initialValue: { sectionId: 'testimonials' },
    }),

    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      description: 'List of testimonials shown in this section.',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
  ],
  preview: {
    select: { title: 'meta.title', subtitle: 'meta.sectionId' },
    prepare({ title, subtitle }) {
      return { title: title ?? 'Testimonials', subtitle }
    },
  },
})
