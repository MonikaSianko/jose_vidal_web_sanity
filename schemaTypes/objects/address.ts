import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    defineField({ name: 'line1', title: 'line1', type: 'string' }),
    defineField({ name: 'line2', title: 'line2', type: 'string' }),
    defineField({ name: 'city', title: 'city', type: 'string' }),
    defineField({ name: 'postalCode', title: 'postalCode', type: 'string' }),
    defineField({ name: 'country', title: 'country', type: 'string' }),
  ],
})
