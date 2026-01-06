import { defineType, defineField } from "sanity";
import { languages } from "../../languages";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: languages.map((lang) => ({ title: lang.title, value: lang.id })),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "hero",
      title: "Hero Section",
      type: "homeHero",
      options: { collapsible: true, collapsed: true },
    }),

    defineField({
      name: "about",
      title: "About Section",
      type: "homeAbout",
      options: { collapsible: true, collapsed: true },
    }),

    defineField({
      name: "testimonials",
      title: "Testimonials Section",
      type: "homeTestimonials",
      options: { collapsible: true, collapsed: true },
    }),

    defineField({
      name: "author",
      title: "Author Section",
      type: "homeAuthor",
      options: { collapsible: true, collapsed: true },
    }),

    defineField({
      name: "courses",
      title: "Courses Section",
      type: "homeCourses",
      options: { collapsible: true, collapsed: true },
    }),

    defineField({
      name: "cta",
      title: "CTA Section",
      type: "homeCTA",
      options: { collapsible: true, collapsed: true },
    }),

    defineField({
      name: "contact",
      title: "Contact Section",
      type: "homeContact",
      options: { collapsible: true, collapsed: true },
    }),
  ],
  preview: {
    select: { title: "language" },
    prepare({ title }) {
      return { title: `Home Page (${title ?? "no language"})` };
    },
  },
});
