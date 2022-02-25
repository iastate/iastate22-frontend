# Card

## Images
Images within the `card__media` element can either be `img` elements (if the image can be output at a consitent size) or as a background image using the `style` attribute (if images are not a consitent size).

### Using the `img` element
```html
<div class="card__media">
  <img src="http://via.placeholder.com/400x250/ddd/ddd" alt="">
</div>
```

### Using the `style` attribute
```html
<div class="card__media" style="background-image:url(http://via.placeholder.com/400x250/ddd/ddd)"></div>
```

## Clickable functionality
The entire card can be made clickable by passing `true` as the second parameter to the `Card` class's constructor. This global setting can be overridden on a per-component basis by applying the `data-clickable` attribute with either `true` or `false` as its value.

## Design Notes
The card component has two different layout styles—horizontal and standard. Out of the box, the card component supports quick customization of the following properties:

- `border`, `border-radius`, and `box-shadow` on the root card element
- `background-color`, `text-decoration`, and `transition` on the card's CTA
- `background-color` and `color` of the card's CTA when hovered over
- `height`, `margin`, `padding`, and aspect ratio of the card media
- `margin` and `padding` of the card's content
