import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'news',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of your article',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of your article',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'image',
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
      title: 'Body Content',
      type: 'body',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'relatedPosts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'news'}]}],
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Small description / excerpt of your article',
    }),
  ],
})
