import { defineType, defineField } from "sanity";

export default defineType({
  name: "valueWithLabel",
  title: "Value with Label",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label (optional)",
      type: "string",
      description:
        "Optional custom label. If empty, a default translated label will be used.",
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
