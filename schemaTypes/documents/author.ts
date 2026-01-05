import { defineType, defineField } from "sanity";
import { languages } from "../../languages";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "language",
      type: "string",
      options: {
        list: languages.map((lang) => ({
          title: lang.title,
          value: lang.id,
        })),
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({ name: "title", title: "name", type: "string" }),
    defineField({
      name: "description",
      title: "bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "photo",
      title: "photo",
      type: "image",
      options: { hotspot: true },
    }),
    // defineField({ name: 'link', title: 'link', type: 'link' }),
  ],
  preview: {
    select: { title: "title", media: "photo", subtitle: "language" },
  },
});
