export default {
  name: 'alertDialog',
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
      description: 'Enter the color of the button in HEX format. Example: "#00aaff"',
      // options: {
      //   list: [
      //     {title: 'Blue', value: 'blue'},
      //     {title: 'Orange', value: 'orange'},
      //     {title: 'Green', value: 'green'},
      //   ],
      // },
    },
    // {
    //   name: 'buttonlink',
    //   title: 'Initial Button Link',
    //   description:
    //     'Add the full URL including https:// for external links. If linking to a page on this site, use the relative path. Example (homepage): /',
    //   type: 'string',
    // },
    {
      name: 'dialogTitle',
      title: 'Dialog Title',
      type: 'string',
      initialValue: 'Close',
    },
    {
      name: 'dialogDescription',
      title: 'Dialog Description',
      type: 'string',
    },
    {
      name: 'closeText',
      title: 'Cancel Button Text',
      type: 'string',
      description: 'Text for the cancel button. Examples: "Close", "Cancel", "No Thanks"',
      initialValue: 'Cancel',
    },
    {
      name: 'closeLink',
      title: 'Cancel Button Link',
      description:
        'This will close the dialog and execute the action of the initial button. Add the full URL including https:// for external links. If linking to a page on this site, use the relative path. Example (homepage): /',
      type: 'string',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Learn More',
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
