import { defineField, defineType } from "sanity";

const YOUTUBE_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/i;

export default defineType({
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    defineField({ name: "title", title: "title", type: "string" }),
    defineField({ name: "description", title: "description", type: "text" }),

    defineField({
      name: "videoUrl",
      title: "YouTube URL",
      type: "url",
      description:
        "Only YouTube links are allowed (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...)",
      validation: (Rule) =>
        Rule.required()
          .uri({ scheme: ["http", "https"] })
          .custom((value) => {
            if (!value) return true;
            return YOUTUBE_REGEX.test(value)
              ? true
              : "Provide a valid YouTube link (youtube.com or youtu.be).";
          }),
    }),

    defineField({ name: "thumbnail", title: "thumbnail", type: "image" }),
  ],
});
