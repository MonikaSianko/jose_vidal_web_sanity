import { defineType, defineField } from 'sanity'
import { languages } from '../../languages'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: languages.map((lang) => ({
          title: lang.title,
          value: lang.id,
        })),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'icon',
      description: 'Optional icon displayed next to the link label.',
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Optional short summary shown on the course card.',
    }),

    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      description: 'Example: Live online, In-person, Hybrid.',
    }),

    defineField({
      name: 'length',
      title: 'Length',
      type: 'string',
      description: 'Example: 4 weeks, 8 sessions, 90 minutes per week.',
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'Displayed on the course card.',
    }),

    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Displayed inside Details.',
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Example: €249, $199, Free.',
    }),

    // ✅ NEW: enroll by email (required)
    defineField({
      name: 'enrollEmail',
      title: 'Enrollment Email',
      type: 'string',
      description: 'Email address users should contact to enroll.',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return 'Enrollment email is required'
          const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))
          return ok ? true : 'Invalid email'
        }),
    }),

    defineField({
      name: 'enrollSubject',
      title: 'Enrollment Email Subject',
      type: 'string',
      description:
        'Optional subject for the mailto link (e.g. "Enrollment: Historical Fiction Intensive").',
    }),

    defineField({
      name: 'enrollInstructions',
      title: 'Enrollment Instructions',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Optional instructions shown in the Enroll dialog (what to include in the email, deadlines, etc.).',
    }),

    // Details content (accordion)
    defineField({
      name: 'details',
      title: 'Details (Rich)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description: 'Full course description shown inside Details.',
    }),

    defineField({
      name: 'whatYoullLearn',
      title: "What You'll Learn",
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'curriculum',
      title: 'Curriculum',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'curriculumItem',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'bullets',
              title: 'Bullets',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({ name: 'answer', title: 'Answer', type: 'text' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
      description: 'Optional max number of participants.',
    }),

    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'language' },
  },
})
