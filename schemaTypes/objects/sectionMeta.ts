import { defineType, defineField } from 'sanity'
import { HOME_SECTIONS_LIST } from '../constants/sections'

export default defineType({
  name: 'sectionMeta',
  title: 'Section Meta',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description:
        'Anchor id used in the page and navigation (e.g. "about", "contact").',
      options: {
        list: HOME_SECTIONS_LIST,
      },
      initialValue: HOME_SECTIONS_LIST[0]?.value,
      validation: (Rule) =>
        Rule.required().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
          name: 'kebab-case',
        }),
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Required section title displayed on the page.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional subtitle displayed under the section title.',
    }),
  ],
})
