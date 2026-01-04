import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeCoursesLabels',
  title: 'Home Courses Labels',
  type: 'object',
  fields: [
    defineField({
      name: 'format',
      title: 'Format label',
      type: 'string',
      initialValue: 'Format:',
    }),
    defineField({
      name: 'length',
      title: 'Length label',
      type: 'string',
      initialValue: 'Length:',
    }),
    defineField({
      name: 'start',
      title: 'Start label',
      type: 'string',
      initialValue: 'Start:',
    }),
    defineField({
      name: 'end',
      title: 'End label',
      type: 'string',
      initialValue: 'End:',
    }),
    defineField({
      name: 'price',
      title: 'Price label',
      type: 'string',
      initialValue: 'Price:',
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity label',
      type: 'string',
      initialValue: 'Capacity:',
    }),

    defineField({
      name: 'whatYoullLearn',
      title: 'What you’ll learn',
      type: 'string',
      initialValue: 'What you’ll learn',
    }),
    defineField({
      name: 'curriculum',
      title: 'Curriculum',
      type: 'string',
      initialValue: 'Curriculum',
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'string',
      initialValue: 'FAQ',
    }),

    defineField({
      name: 'enroll',
      title: 'Enroll fallback',
      type: 'string',
      initialValue: 'Enroll',
    }),
    defineField({
      name: 'noDetails',
      title: 'No details text',
      type: 'string',
      initialValue: 'No additional details available.',
    }),

    defineField({
      name: 'findOutMore',
      title: 'Find out more',
      type: 'string',
      initialValue: 'Find out more',
    }),
    defineField({
      name: 'showLess',
      title: 'Show less',
      type: 'string',
      initialValue: 'Show less',
    }),
  ],
})
