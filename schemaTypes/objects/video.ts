import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'title', type: 'string' }),
    defineField({ name: 'description', title: 'description', type: 'text' }),
    defineField({ name: 'videoUrl', title: 'videoUrl', type: 'url' }),
    defineField({ name: 'thumbnail', title: 'thumbnail', type: 'image' }),
  ],
})
