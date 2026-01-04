import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeHero',
  title: 'Home Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'meta',
      title: 'Section Meta',
      type: 'sectionMeta',
      initialValue: { sectionId: 'home' },
    }),
    defineField({ name: 'badge', title: 'badge', type: 'string' }),
    defineField({
      name: 'photo',
      title: 'photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bgPhoto',
      title: 'background photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'primaryCta', title: 'primaryCta', type: 'link' }),
    defineField({ name: 'secondaryCta', title: 'secondaryCta', type: 'link' }),
  ],
  preview: {
    select: { title: 'meta.title', subtitle: 'meta.sectionId' },
    prepare({ title, subtitle }) {
      return { title: title ?? 'Hero', subtitle }
    },
  },
})
