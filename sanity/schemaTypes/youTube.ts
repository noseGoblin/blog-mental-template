import {PlayIcon} from '@sanity/icons'

export default {
  name: 'youTube',
  title: 'YouTube Embed',
  type: 'object',
  icon: PlayIcon,
  fields: [
    {
      name: 'url',
      title: 'YouTube video URL',
      type: 'url',
    },
  ],
}
