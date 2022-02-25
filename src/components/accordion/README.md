# Accordion

## Behavior options

### Open first accordion by default
Add data attribute `data-silc-accordion-open-first`

### Open multiple sections simultaneously
Add data attribute `data-silc-accordion-open-multiple`

### Enable slide animations when opening/closing sections
Add data attribute `data-silc-accordion-animated`

## Uniqueness
Tabs and accordions that become tabs must have a unique id addeded to each section, that is then referenced within the navigation link.

## Design Notes
Out of the box, the accordion component supports quick customization of the following properties:

- `margin` and `padding` of the entire accordion group
- The breakpoint at which accordions change into tabs when using the `.silc-accordion--become-tabs` modifier class
- `margin` and `padding` of the tablist
- `border`, `background`, `color`, `margin`, `padding`, `text-decoration`, `text-transform`, and `font-size` of tabs/accordion section labels
- `background` and `color` of the active tab/accordion section's label
- `background` and `color` when hovering over tabs/accordion section labels
- `border`, `background`, and `padding` of the content area of each tab panel/accordion section
- Duration and easing of the slide transition when using the `data-silc-accordion-animated` option