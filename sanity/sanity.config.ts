import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'blog.alliantgroup',

  projectId: 'v700z5ue',
  dataset: 'production',

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: 'https://blog.alliantgroup.com',
        previewMode: {enable: '/preview/enable', disable: '/preview/disable'},
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
