# 2025.03.21
* Add CardStack component
  * Add [Color Theif](https://www.npmjs.com/package/colorthief) v2.6.0 package via: `npm i colorthief`
  * Add `images.unsplash.com` domain to `next.config.js` for image fallbacks
  * Add propertyCard Sanity schema type
  * Add propertyCard to blogType schema
  * Add CardStack component to news page route
    * Update query to include propertyCard fields
  * Update inferface fullArticle with propertyCard types
  * Add `@ts-ignore` to suppress TypeScript error
* Update sanity cli v3.80.0
* Update framer-motion paackage v12.5.0
* Update @types/node dependency v22.13.11
* Add new `socials` dark mode color
  * Update primary dark mode color
  * **Note:** *remediation need to fix dark mode colors not updating*

# 2025.03.17
* Update next-themes v0.4.5
* Add LogoSwitcher component
  * Add LogoSwitcher to Navbar
* Add 3D card
  * Add CardBody, CardContainer, CardItem components
  * Replace Card with new 3D card
  * Style new card on home page route
  * Add ThreeDCardDemo component

# 2025.03.14
* Add Sass styles to global styles

# 2025.03.06
* Update dark mode styles
  * Fix ModeToggle icon color issue
* Begin Navbar rebrand

# 2025.03.05
* Update Next.js v15.2.1
  * Update React and React DOM to v18.3.1 due to [Sanity compatibility requirement](https://www.sanity.io/help/react-19)
  * Update all dependencies
    * Add package `npm-check-updates` to monitor update all dependencies, and run
  * Update dymanic page routes to await props for server components
* Update Bun v1.2.4 and npm to 11.2.0
* Update Sanity v3.78.0
  * [Enable React SctrictMode](https://www.sanity.io/docs/cli-reference#reactStrictMode-d6dd5ed608de)
  * Update all dependencies
    * Add package `npm-check-updates` to monitor update all dependencies, and run
* Update Tailwind CSS v4.0.10
  * Update all dependencies
    * Update next-themes and ThemeProvider
      * Add `suppressHydrationWarning` to layout to avoid hydration warnings
      * Update dark mode to `data-mode`
  * Recongifure darkmode from class to selector based
    * Use `[data-mode="dark"]` to enable dark mode
  * Refactor files to support new tw 4
* Migrate components to `@/components` directory
* Update Readme branding

# 2024.05.29
* Add youTube schemaType
  * Add youTube field to body schemaType
* Add [react-player](https://www.npmjs.com/package/react-player) package, in Sanity project folder, via: `npm install react-player @sanity/ui`
* Add [react-player](https://www.npmjs.com/package/react-player) dependency via: `npm install react-player`
  * Add **YouTubeEmbed** component
  * Add conditional **YouTubeEmbed** to blog post page
  * Add data types to `fullArticle` interface
* Make Leadership optional on blog /news page

# 2024.05.22.03
* Add `leadership` field to blogType schema
* Update [news page](https://blog.alliantgroup.com/news/erc-voluntary-disclosure-program)
  * Left align title
  * Add `leadership` section to blog post page
  * Update `fullArticle` interface

# 2024.05.22.02
* Update ISR to 10 minutes
  * [home](https://blog.alliantgroup.com/)
  * [expert page](https://blog.alliantgroup.com/expert/mark-w-everson)
  * [news page](https://blog.alliantgroup.com/news/alliantgroup-and-ceo-dhaval-jadav-host-think-tank-focused-on-ai-for-small-and-medium-sized-cpa-firms-and-businesses)

# 2024.05.22.01
* Add [Vercel Web Analytics](https://vercel.com/alliantgroup/blog-alliantgroup/analytics?environment=all)
  * Install package via: `npm i @vercel/analytics`
  * Add **Analytics** component to root layout

# 2024.05.22
* Fix hydration typeError on expert page
  * Add nested ternary to check for `customButton` input

# 2024.05.15
* Add `buttonType` to Sanity schema types
  * Add `customButton` to authorType
    * Add conditional to Button that opens external links in a new tab
  * Add customButton to /expert dynamic route
  * Update bioPage interface with new fields: color, link, text
  * Use test page: [Mark W. Everson](https://blog.alliantgroup.com/expert/mark-w-everson)
* Update **Button** component
  * Accept `color` prop
    * Values: `blue`, `green`, `orange`

# 2024.05.14
* Add [3D Hover Card](https://ui.aceternity.com/components/3d-card-effect) component from AceTernity UI
  * Add dependencies via: `npm i framer-motion clsx tailwind-merge`
  * Add component file
* Add [Form](https://ui.shadcn.com/docs/components/form) component from shadcn/ui via: `npx shadcn-ui@latest add form`
  * Add **Label** component
  * Add **Input** component via: `npx shadcn-ui@latest add input`
* Add [Signup Form](https://ui.aceternity.com/components/signup-form) component from AceTernity UI
  * Add dependencies via: `npm i framer-motion clsx tailwind-merge @radix-ui/react-label @tabler/icons-react`
  * Add **SinupForm** component
    * ## Need to wire up form and test

# 2024.05.09
* Add post links to home **Card** component images and titles
* Fix **ImageGallery** next / previous button styles
* Add dependency [react-icons](https://react-icons.github.io/react-icons/) via: `npm install react-icons --save`
* Add social icons to expert "Social Presence" section
* Add **Tooltip** component from shadcn/ui via: `npx shadcn-ui@latest add tooltip`
  * Add **Tooltip** to social icons

# 2024.05.07
* Add [Hover Card](https://ui.shadcn.com/docs/components/hover-card) component from shadcn/ui via: `npx shadcn-ui@latest add hover-card`
* Add [Avatar](https://ui.shadcn.com/docs/components/avatar) component from shadcn/ui via: `npx shadcn-ui@latest add avatar`
  * Add **HoverCard** with **Avatar** to blog post page author byline

# 2024.04.17
* Add [Carousel](https://ui.shadcn.com/docs/components/carousel) component from shadcn/ui via: `npx shadcn-ui@latest add carousel`
  * Add **Carousel** to blog post page
    * NOTES: image galleries are alternatives and will appear as duplicates on the page; this is for testing purposes only and should be removed / reconfigured based on feedback
* Update **ImageGallery** component
  * Add hotspot image support
* Add [Badge](https://ui.shadcn.com/docs/components/badge) component from shadcn/ui via: `npx shadcn-ui@latest add badge`
  * Add **Badge** to blog post page
* Add Category page
  * Add category query
  <!-- * Add category page layout -->
  * Add category page to dynamic routing
  * Add interface fullCategory for category query

# 2024.04.12
* Install [React icons](https://www.npmjs.com/package/react-icons) via `npm i react-icons`
* Add **ImageGallery** component
  * Add hotspot image support
  * Add **ImageGallery** to blog post page
  * Update fullArticle interface
* Update Sanity client to use environment variables

# 2024.04.11
* Add **ImageGallery** sanity component
  * Add ImageGallery to blogType
  * Add ImageGallery to **body** component
* Add phone and location fields to author schema and author page
  * Update interface

# 2024.04.09
* Add /author/[slug] dynamic routing
  * Add author page
  * Add author query
  * Add author page layout
  * Add conditional social links section

# 2024.04.08
* Add environment variables
  * Vercel deployed domain: [blog.alliantgroup.com](https://blog.alliantgroup.com/)
  * Sanity Project ID
* Add date formating to blogType
* Add author and publish date to blog post page
* Change Author title to Expert Author on Sanity Studio

# 2024.03.26.01
* Add ISR to blog post pages and home page

# 2024.03.26
* Add Vercel ignore file
* Deploy to Vercel
* Deploy Sanity Studio to Sanity.io

# 2024.03.25
* Add dynamic routing for blog posts
  * Add interface for blog post query
  * Add **PortableText** component to render news post `body`
* Update Sanity schema types
  * Add `body` schema type
    * Includes style options, quote, and image
* Add PortableText package via: `npm i @portabletext/react`
* Add Tailwind CSS Typography plugin via: `npm install -D @tailwindcss/typography`
* Add layout for news post page

# 2024.03.22.01
* Add next-sanity package `npm i next-sanity`
* Add Blog list query to index page
* Add Sanity client
* Add interface for query types
* Install Sanity image-url package `npm i @sanity/image-url`
  * Add image-url helper function: `imageUrlBuilder`
* Add Sanity domain to next config
* Add Card component from shadcn/ui: `npx shadcn-ui@latest add card`
* Adjust container responsive grid

# 2024.03.22
* Install [shadcn-ui@0.8.0](https://ui.shadcn.com/)
  * Add **Button** component
  * Add Blue theme to global styles
  * Add **ThemeProvider** component
    * Wrap root layout with **ThemeProvider**
  * Add **DropdownMenu** component
  * Add **ModeToggle** component
    * Light/Dark mode toggle
* Install next-themes: `npm install next-themes`
  * Add **ThemeToggle** component
* Move Nav to root layout

# 2024.03.20.01
* Move styles to `/styles` directory
* Install sass: `npm install sass`
* Add styles from [events.alliantgroup.com](https://events.alliantgroup.com/) template
* Add **Navbar** component
* Remove default Next.js homepage

# 2024.03.20
* Init [Next.js](https://nextjs.org/) project running [Sanity.io](https://www.sanity.io/) (clean full customized content studio) utilizing [GROQ](https://www.sanity.io/docs/groq) query language
  * GROQ Cheat Sheet can be found [here](https://www.sanity.io/docs/query-cheat-sheet)
  * GROQ playground is [here](https://groq.dev)
* Add /CHANGELOG.md & update /README.md
* Add Sanity schemaTypes:
  * Blog, Author, Category
* Update favicon & `/sanity/static/` media files