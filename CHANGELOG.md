# miklosdaniel.hu

## 2.3.2

### Patch Changes

- c38f6a5: Revert svelte-seo from +layout file as child pages cannot override parent tags.

## 2.3.1

### Patch Changes

- fc99b14: Fixed a case when scrolling to fast resulted in a white area on the bottom of the screen on mobile.
- 42bbb57: Change text order when generating og:image on projects
- 63116e4: Reduce top padding used by header component on mobile
- 5503597: Removed "refactoring" text on main page. Added more bottom margin to "Recent Projects" text and increased font weight
- d894de9: Use svelte-seo instead of manually write it with svelte:head
- 36541cb: Added padding to the footer component, improved styling.

## 2.3.0

### Minor Changes

- aea77ed: Refactor selected project page with nicer styling, adjusted spacing and colors.
- c0ac2e4: Show project tags on Project page
- cf77718: Add sitemap.xml and rss.xml
- 892e9a1: Add changeset tool to the project
- b8ef19e: Implement ProjectLinks svelte component
- b3d6349: Add Satori to generate preview.png of blog posts at build time.
- 11f4b75: Add Shiki for styling code blocks in markdown files

### Patch Changes

- e6d0aa4: Add mdsvex-reading-time to indicate reading time of posts.
- e38f894: Set flag to show only "published" posts in production, but render all in dev mode
- ee91fbf: Show only projects tab temporarily
- 1f191d7: Moved project content files from previous version of the blog, adjusted dates and links.
