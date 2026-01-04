import { defineType, defineField } from 'sanity'
import { languages } from '../../languages'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: languages.map((lang) => ({ title: lang.title, value: lang.id })),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({ name: 'hero', title: 'Hero', type: 'homeHero' }),
    defineField({ name: 'about', title: 'About', type: 'homeAbout' }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'homeTestimonials',
    }),
    defineField({ name: 'author', title: 'Author', type: 'homeAuthor' }),
    defineField({ name: 'courses', title: 'Courses', type: 'homeCourses' }),
    defineField({ name: 'cta', title: 'CTA', type: 'homeCTA' }),
    defineField({ name: 'contact', title: 'Contact', type: 'homeContact' }),
  ],
  preview: {
    select: { title: 'language' },
    prepare({ title }) {
      return { title: `Home Page (${title ?? 'no language'})` }
    },
  },
})
