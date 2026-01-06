import { defineField, defineType } from "sanity";

export default defineType({
  name: "address",
  title: "Address",
  type: "object",
  fields: [
    defineField({ name: "street", title: "street and number", type: "string" }),
    defineField({ name: "city", title: "city", type: "string" }),
    defineField({ name: "postalCode", title: "postalCode", type: "string" }),
    defineField({ name: "country", title: "country", type: "string" }),
  ],
});
