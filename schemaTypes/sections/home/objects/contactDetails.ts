import { defineType, defineField } from "sanity";

export default defineType({
  name: "homeContactDetails",
  title: "Contact Details",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),

    defineField({
      name: "email",
      title: "Email",
      type: "valueWithLabel",
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "valueWithLabel",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "address",
    }),

    // optional later:
    // defineField({ name: 'cta', title: 'CTA', type: 'link' }),
  ],
});
