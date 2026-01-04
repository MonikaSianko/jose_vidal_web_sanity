import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeCourses',
  title: 'Home Courses Section',
  type: 'object',
  fields: [
    defineField({
      name: 'meta',
      title: 'Section Meta',
      type: 'sectionMeta',
      initialValue: { sectionId: 'courses' },
    }),

    defineField({
      name: 'labels',
      title: 'UI labels',
      type: 'homeCoursesLabels',
    }),

    defineField({
      name: 'items',
      title: 'items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'course' }] }],
    }),
  ],
  preview: {
    select: { title: 'meta.title', subtitle: 'meta.sectionId' },
    prepare({ title, subtitle }) {
      return { title: title ?? 'Courses', subtitle }
    },
  },
})
