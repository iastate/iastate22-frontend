# Callout With Image

**This is a custom component (no class prefix in place as it does not conflict with bootstrap)**

- There are two variations to this component, the `default` and `--small`
- The markup is identical between both variants, with the exception of the additional class of `callout-with-image--small` on the `--small` variant (for styling purposes)
- There is a companion component associated with the `--small` variant, called `callout-with-image-small-set` which outputs multiple instances with a background color included
- The custom styles are imported into the `index.scss` file as `@import "../components/callout-with-image/callout-with-image";`
- There is a paragraph-widget wrapper for use in page context `<div class="paragraph-widget paragraph-widget--callout-with-image">`.
