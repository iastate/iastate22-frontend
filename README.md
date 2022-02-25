# idfive component library

The idfive component library is a front-end framework/starter, focusing on functionality over opinionated styles. It features purposeful and semantic HTML, minimal JavaScript, and SASS variables for easy customization.

It is designed to be modified once downloaded, and all CSS/JS/etc to be modified per specific project. It acts as a starter, with common, accessible components present in a vanilla way, that can be used or not, and styles as needed.

## Installation

### Scaffolding

Depending on the project, this can be downloaded/cloned in several different places, but best practice is to keep the folder named "idfive-component-library", wherever you choose to utilize it.

- Drupal: "/themes/custom/client_theme/idfive-component-library"

### Remove .git tracking

Remove the repo git, as the desire is to commit all to your new client theme.

- `rm -R .git`

### Dependencies

Dependencies need to be installed with [node/npm](https://docs.npmjs.com/getting-started/installing-node), and is best pinned to stable versions via [nvm](https://github.com/nvm-sh/nvm). More on [node usage at idfive](https://developers.idfive.com/#/front-end/node).

- `cd idfive-component-library`
- `nvm use`
- `npm install`

## Development

The component library includes [Fractal](http://fractal.build) for component based development. Your own components can be added to the `src/components` folder. Static assets such as JavaScript, CSS and images will be served out of the `build` folder, but can also be configured to your specific needs by editing the [fractal.js file](fractal.js). For more information, read the [fractal guide](http://fractal.build/guide).

To start the fractal development server:

- `cd idfive-component-library` (if not there)
- `nvm use` (if have not previously)
- `npm run fractal`

Referencing images from within your component handlebars templates:

```html
<img src="{{path '/img/image.png'}}" alt="" />
```

### Watch mode

If you do not wish to use Fractal, or simply want to watch for changes without launching a development server, you can run the watch command:

`npm run watch`

### Webpack server

If you do not wish to use Fractal in development, you can use the webpack development server:

`npm run serve`

## Building for production

To build your code for production, run the following:

`npm run build`

This will generate `build` and `fractal` folders at the root of your project. The `build` folder contains all of your compiled assets (CSS, JavaScript etc.), while the `fractal` folder contains a static generated version of your Fractal component library, which can be used for previews and an online reference to your component library. See the [Clearleft Fractal Library](http://fractal.clearleft.com) as an example.

### Passing parameters to your npm scrips

It is possible to pass parameters to your build scripts, which will then be exposed in JS via `process.env`. Example:

`npm run build --apiBase=http://prod.com`

In your JS file:

`const apiBase = process.env.apiBase || 'http://localapi.com';`

## Silc

The idfive component library includes the [silc](https://silc.io) suite of modules, which includes:

- [silc core](https://github.com/nickrigby/silc-core)
- [silc grid](https://github.com/nickrigby/silc-grid)
- [silc accordion](https://github.com/nickrigby/silc-accordion)
- [silc nav](https://github.com/nickrigby/silc-nav)
- [silc offcanvas](https://github.com/nickrigby/silc-offcanvas)
- [silc utilities](https://github.com/nickrigby/silc-utilities)

## Overriding silc styles

Each silc component contains a number of default SASS variables that can be easily overridden by adding the variable to the [silc/\_overrides.scss file](src/scss/silc/_overrides.scss). For example, to add your own breakpoints, you would create the following variable in the overrides file:

```scss
$silc-core--breakpoints: (
  ("sm", "(min-width:400px)"),
  ("md", "(min-width:600px)"),
  ("lg", "(min-width:1000px)"),
  ("xl", "(min-width:1400px)")
);
```

## Extending silc classes

Some silc modules contain JavaScript classes that can be easily extended for your own needs. To extend a class, you need to import the class and then remove the call to the original module init function e.g. `silcOffcanvasInit`

```javascript
import { SilcOffcanvas } from 'silc-offcanvas';
class MyOffcanvas extends SilcOffcanvas {

    constructor(el) {
        super(el);
    }

    protected toggle(event) {
        super.toggle(event); // Call parent toggle function
        console.log('Toggle!'); // Your own functionality
    }

}
```

You can then write your own init function to apply your new class to the appropriate elements.

```javascript
[].forEach.call(document.querySelectorAll(".silc-offcanvas__trigger"), el => {
  new MyOffcanvas(el);
});
```
