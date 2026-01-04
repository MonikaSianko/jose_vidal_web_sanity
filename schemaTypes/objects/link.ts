import { defineField, defineType } from 'sanity'
import {
  HOME_SECTION_IDS,
  HOME_SECTIONS_LIST,
  HomeSectionId,
} from '../constants/sections'

type LinkParent = { type?: 'section' | 'external' | 'phone' | 'email' }

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Text displayed for the link.',
    }),

    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'external',
      options: {
        list: [
          { title: 'Section', value: 'section' },
          { title: 'External URL', value: 'external' },
          { title: 'Phone (tel:)', value: 'phone' },
          { title: 'Email (mailto:)', value: 'email' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sectionId',
      title: 'Section',
      type: 'string',
      description: 'Select a section anchor id (without "#").',
      hidden: ({ parent }) =>
        (parent as LinkParent | undefined)?.type !== 'section',
      options: {
        list: HOME_SECTIONS_LIST,
      },
      validation: (Rule) =>
        Rule.custom((value, ctx) => {
          const parent = ctx.parent as LinkParent | undefined
          if (parent?.type !== 'section') return true

          if (!value) return 'Section is required'
          if (typeof value === 'string' && value.startsWith('#'))
            return 'Do not include "#".'

          const allowed = new Set<HomeSectionId>(HOME_SECTION_IDS)
          return allowed.has(value as HomeSectionId)
            ? true
            : `Invalid section. Allowed: ${HOME_SECTION_IDS.join(', ')}`
        }),
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'External URL.',
      hidden: ({ parent }) =>
        (parent as LinkParent | undefined)?.type !== 'external',
      validation: (Rule) =>
        Rule.custom((value, ctx) => {
          const parent = ctx.parent as LinkParent | undefined
          if (parent?.type !== 'external') return true
          return value ? true : 'URL is required'
        }),
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Phone number for tel: links.',
      hidden: ({ parent }) =>
        (parent as LinkParent | undefined)?.type !== 'phone',
      validation: (Rule) =>
        Rule.custom((value, ctx) => {
          const parent = ctx.parent as LinkParent | undefined
          if (parent?.type !== 'phone') return true
          return value ? true : 'Phone is required'
        }),
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email address for mailto: links.',
      hidden: ({ parent }) =>
        (parent as LinkParent | undefined)?.type !== 'email',
      validation: (Rule) =>
        Rule.custom((value, ctx) => {
          const parent = ctx.parent as LinkParent | undefined
          if (parent?.type !== 'email') return true
          if (!value) return 'Email is required'
          const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))
          return ok ? true : 'Invalid email'
        }),
    }),

    defineField({
      name: 'newTab',
      title: 'Open in new tab',
      type: 'boolean',
      description: 'Open external links in a new tab.',
      initialValue: false,
      hidden: ({ parent }) =>
        (parent as LinkParent | undefined)?.type !== 'external',
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'icon',
      description: 'Optional icon displayed next to the link label.',
    }),
    defineField({
      name: 'iconPosition',
      title: 'Icon Position',
      type: 'string',
      description: 'Where the icon is displayed relative to the label.',
      options: {
        list: [
          { title: 'Start', value: 'start' },
          { title: 'End', value: 'end' },
        ],
        layout: 'radio',
      },
      initialValue: 'start',
      hidden: ({ parent }) => !(parent as any)?.icon,
    }),
  ],
})
