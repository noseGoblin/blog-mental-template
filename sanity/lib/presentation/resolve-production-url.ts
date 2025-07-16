import {
  defineLocations,
  defineDocuments,
  PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/news/${doc?.slug}`,
          },
          { title: 'Insights', href: `/news` },
        ],
      }),
    }),
  },
  mainDocuments: defineDocuments([
    {
      route: '/',
      filter: `_type == 'page' && slug.current == 'index'`,
    },
    {
      route: '/:slug',
      filter: `_type == 'page' && slug.current == $slug`,
    },
    {
      route: '/expert/:slug',
      filter: `_type == 'expert' && slug.current == $slug`,
    },
    {
      route: '/news/:slug',
      filter: `_type == 'post' && slug.current == $slug`,
    },
  ]),
};
