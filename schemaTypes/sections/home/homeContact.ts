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
      description:
        'Paste ONLY the value of the iframe "src" attribute from Google Maps embed. ' +
        "How to get it: Open Google Maps → Share → Embed a map → Copy the iframe code → " +
        'extract and paste only the URL inside src="...". Example: https://www.google.com/maps/embed?pb=...',
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
});
