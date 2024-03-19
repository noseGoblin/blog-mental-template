import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'headshot',
      type: 'image',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
    defineField({
      name: 'email',
      type: 'email',
    }),
    defineField({
      name: 'linkedin',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      type: 'string',
    }),
    defineField({
      name: 'website',
      type: 'url',
    }),
  ],
})
