import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Expert Author',
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
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Author Bio',
      type: 'body',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
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
