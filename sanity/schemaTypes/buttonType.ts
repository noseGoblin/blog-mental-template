export default {
  name: 'button',
  title: 'Button',
  type: 'document',
  fields: [
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Blue', value: 'blue'},
          {title: 'Orange', value: 'orange'},
          {title: 'Green', value: 'green'},
        ],
      },
    },
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Button Link',
      description:
        'Add the full URL including https:// for external links. If linking to a page on this site, use the relative path. Example (homepage): /',
      type: 'string',
    },
  ],
}
