# Site Header

**This is a custom component (no class prefix in place as it does not conflict with bootstrap)**

- The header is setup to use `:target` when a user has javascript disabled, to allow the hamburger menu to open on mobile and the navs to use hover states on desktop. When javascript is enabled - these actions are initiated by a click (or touch)
- Contains areas for utility nav as well as full navigation (with sections for subpages)
- The search form has been duplicated to get the positioning correct between mobile and desktop
- The site-header should be placed in the code directly after `<div class="max-bound">`
- The custom styles are imported into the `index.scss` file as `@import "../components/site-header/site-header";`
- The `.ts` file for the javascript is imported into the `index.ts` file as `import siteHeaderInit from "./components/site-header";` and called as `siteHeaderInit();`
