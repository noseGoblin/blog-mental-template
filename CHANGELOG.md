# 2024.03.2#
* Add dynamic routing for blog posts

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