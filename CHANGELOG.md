# 2024.05.##
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