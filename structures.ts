import type { StructureResolver } from "sanity/structure";

const manualTypes = [
  "homePage",
  "book",
  "course",
  "testimonial",
  "author",
  "social",
] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("homePage").title("Home Pages"),

      S.divider(),

      S.documentTypeListItem("book").title("Books"),
      S.documentTypeListItem("course").title("Courses"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("social").title("Social links"),

      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId();
        if (!id) return true;
        return !(manualTypes as readonly string[]).includes(id);
      }),
    ]);
