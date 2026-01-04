import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeEditorial',
  title: 'Home Editorial & Rights',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'title', type: 'string' }),
    defineField({ name: 'email', title: 'email', type: 'string' }),
    defineField({ name: 'phone', title: 'phone', type: 'string' }),
    defineField({ name: 'address', title: 'address', type: 'address' }),
    // defineField({ name: 'cta', title: 'cta', type: 'link' }),
  ],
})
