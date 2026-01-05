import { defineType, defineField } from "sanity";

export default defineType({
  name: "homeCourses",
  title: "Home Courses Section",
  type: "object",

  fieldsets: [
    {
      name: "meta",
      title: "Section",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "ui",
      title: "UI Labels",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "content",
      title: "Courses",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    // SECTION META
    defineField({
      name: "meta",
      title: "Section Meta",
      type: "sectionMeta",
      fieldset: "meta",
      initialValue: { sectionId: "courses" },
    }),

    // UI LABELS
    defineField({
      name: "labels",
      title: "UI Labels",
      type: "homeCoursesLabels",
      fieldset: "ui",
      description:
        "Optional custom labels used in the Courses section UI (buttons, headings, etc.).",
    }),

    // COURSES LIST
    defineField({
      name: "items",
      title: "Courses",
      type: "array",
      fieldset: "content",
      of: [{ type: "reference", to: [{ type: "course" }] }],
      description:
        "Select which courses should be displayed in this section (order matters).",
    }),
  ],

  preview: {
    select: { title: "meta.title", subtitle: "meta.sectionId" },
    prepare({ title, subtitle }) {
      return {
        title: title ?? "Courses",
        subtitle,
      };
    },
  },
});
