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
      name: 'email',
      type: 'email',
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
      name: 'linkedin',
      description: 'Add LinkedIn link in this format: https://www.linkedin.com/in/dhavaljadav02/',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      description: 'Add Twitter link in this format: https://twitter.com/dhavaljadav02/',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      description: 'Add Facebook link in this format: https://www.facebook.com/dhavaljadav02/',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      description: 'Add Instagram link in this format: https://www.instagram.com/dhaval_jadav__/',
      type: 'url',
    }),
    defineField({
      name: 'website',
      description: 'Add website URL in this format: https://www.alliantgroup.com/',
      type: 'url',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      description: 'Add phone number in this format: 555-555-5555',
      type: 'string',
      validation: (Rule) =>
        Rule.max(12).warning(`A phone number shoul match the following format: 555-555-5555.`),
    }),
    defineField({
      name: 'location',
      description: 'Add Google Maps link in this format: https://goo.gl/maps/ZYsPcRS77dagkRYA8',
      type: 'url',
    }),
    defineField({
      name: 'customButton',
      type: 'reference',
      to: [{type: 'button'}],
    }),
    defineField({
      name: 'alertDialog',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'alertDialog'}]}],
    }),
  ],
})
