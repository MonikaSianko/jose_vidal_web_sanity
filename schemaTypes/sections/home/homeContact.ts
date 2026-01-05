import { defineType, defineField } from "sanity";

export default defineType({
  name: "homeContact",
  title: "Home Contact Section",
  type: "object",
  fieldsets: [
    {
      name: "cards",
      title: "Cards",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "map",
      title: "Map",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "meta",
      title: "Section Meta",
      type: "sectionMeta",
      initialValue: { sectionId: "contact" },
    }),

    defineField({
      name: "contactDetails",
      title: "Contact Card",
      type: "homeContactDetails",
      fieldset: "cards",
    }),

    defineField({
      name: "social",
      title: "Social Card",
      type: "homeSocial",
      fieldset: "cards",
    }),

    defineField({
      name: "googleMapsLink",
      title: "Google Maps Embed URL",
      type: "url",
      fieldset: "map",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
});
