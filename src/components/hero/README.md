# Hero

**This is a custom component (no class prefix in place as it does not conflict with bootstrap)**

- There are two variants, the `default` for the main site (which places the `subnav` in the top right on desktop), and the `--top-level-lp` variant for for top-level landing pages (contains a modified version of the `subnav` below the main image)
- Images within the `hero__media` element will be inline `img` elements and are sized using the css `ojbect-fit` property (a polyfill is included for older browsers)
- Contains two subcomponents: `breadcrumb` and `subnav`
- The custom styles are imported into the `index.scss` file as `@import "../components/hero/hero";`
- The hero component should be placed in the page in the following order relative to the `<main>` element:

```
    <main id="main-content">
      <div class="outer-pad">
        <div class="hero">
          ...
```
