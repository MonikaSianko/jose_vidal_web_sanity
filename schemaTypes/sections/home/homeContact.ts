import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeContact',
  title: 'Home Contact Section',
  type: 'object',
  fields: [
    defineField({
      name: 'meta',
      title: 'Section Meta',
      type: 'sectionMeta',
      initialValue: { sectionId: 'contact' },
    }),

    defineField({
      name: 'editorial',
      title: 'Editorial',
      type: 'homeEditorial',
      description: 'Editorial content displayed in the Contact section.',
    }),

    defineField({
      name: 'social',
      title: 'Social',
      type: 'homeSocial',
      description: 'Social links displayed in the Contact section.',
    }),

    defineField({
      name: 'googleMapsLink',
      title: 'Google Maps Link',
      type: 'url',
      description:
        'Google Maps URL used for embedding in an iframe (or linking).',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
  preview: {
    select: { title: 'meta.title', subtitle: 'meta.sectionId' },
    prepare({ title, subtitle }) {
      return { title: title ?? 'Contact', subtitle }
    },
  },
})
