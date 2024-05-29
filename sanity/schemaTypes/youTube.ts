import {PlayIcon} from '@sanity/icons'
// import {YouTubePreview} from '../../app/components/YouTubePreview'

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
  preview: {
    select: {title: 'url'},
  },
  // components: {
  //   preview: YouTubePreview,
  // },
}
