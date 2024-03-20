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
      name: 'credentials',
      type: 'string',
      title: 'Author credentials ( position / title / leadership: former roles / etc. )',
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
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'email',
      type: 'email',
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
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
