# Card

**This is a custom component (the class has been prefaced with `.iastate22-[classname]`).**

- Images within the `card__media` element will be inline `img` elements and are sized using the css `ojbect-fit` property (a polyfill is included for older browsers)
- There is a companion component associated called `card-set` which outputs multiple instances of the cards, this should typically be used for output globally
- By deafult, the entire card is clickable. This global setting can be overridden on a per-component basis by applying the `data-clickable` attribute with either `true` or `false` as its value
- The custom styles are imported into the `.index.scss` file as `@import "../components/card/card";`
