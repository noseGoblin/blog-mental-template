export default {
  name: "propertyCard",
  title: "Property Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
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
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Bed", value: "bed" },
          { title: "Users", value: "users" },
          { title: "Dollar", value: "dollar" },
          { title: "Arrow Up Right", value: "arrowUpRight" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "mainImage",
    },
  },
}