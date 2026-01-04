import { defineType, defineField } from 'sanity'
import { ICON_OPTIONS, IconNameInput } from '../components/IconNameInput'

export default defineType({
  name: 'icon',
  title: 'Icon',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Icon',
      type: 'string',
      description: 'Select an icon from Phosphor Icons.',
      options: { list: ICON_OPTIONS },
      components: {
        input: IconNameInput, // ✅ preview w polu
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'name' },
  },
})
