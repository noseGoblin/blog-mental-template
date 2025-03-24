export default {
  name: 'alert',
  title: 'Alert Dialog',
  type: 'document',
  fields: [
    {
      name: 'buttonText',
      title: 'Initial Button Text',
      description: 'Text for the initial button. This button will open the alert dialog.',
      type: 'string',
    },
    {
      name: 'buttonColor',
      title: 'Button Color',
      type: 'string',
      description: 'Enter the color of the button in HEX format. Example: #ff0000',
      // options: {
      //   list: [
      //     {title: 'Blue', value: 'blue'},
      //     {title: 'Orange', value: 'orange'},
      //     {title: 'Green', value: 'green'},
      //   ],
      // },
    },
    {
      name: 'buttonlink',
      title: 'Initial Button Link',
      description:
        'Add the full URL including https:// for external links. If linking to a page on this site, use the relative path. Example (homepage): /',
      type: 'string',
    },
    {
      name: 'dialogTitle',
      title: 'Dialog Title',
      type: 'string',
    },
    {
      name: 'dialogDescription',
      title: 'Dialog Description',
      type: 'string',
    },
    {
      name: 'cancelText',
      title: 'Cancel Button Text',
      type: 'string',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctalink',
      title: 'CTA Button Link',
      description:
        'Add the full URL including https:// for external links. If linking to a page on this site, use the relative path. Example (homepage): /',
      type: 'string',
    },
  ],
}
