# Iowa State University Front End Library

- Staging site: [staging2.idfive.com](https://staging2.idfive.com/iowa-state-university/fractal/), currently displaying the master branch. Use `guest/guest` for username/password.
- Repo: [Bitbucket private](https://bitbucket.org/idfivellc/iowa-state-frontend/src/master/).
- Build pipelines: [Buddy](https://app.buddy.works/idfive/iowa-state-frontend/), idfive access only.

Notes:

- Installed Boostrap 5.1, the site uses the default breakpoints
- Using Iowa State color variables
- Using Iowa State Font Awesome for social media icons and various elements
- All CSS/JS is scoped to not interfere with Boostrap, using a prefix of "iastate22-" on relevant classes
- All components live in the `src/components` directory

## Dependencies

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

## Building for production

To build your code for production, run the following:

- `npm run build`
- `npm run fractal:build`

This will generate `build` and `fractal` folders at the root of your project. The `build` folder contains all of your compiled assets (CSS, JavaScript etc.), while the `fractal` folder contains a static generated version of your Fractal component library, which can be used for previews and an online reference to your component library.

## Compiling CSS/JS

All CSS/JS/Images will be compiled from `src/*`.

### Markup

- Written using Twig templates
- Proper ARIA functionality is used to meet WCAG accessibility guidelines

### Images

All images should be added to `src/images` which compiles to `build/images/*`.

### CSS

- All CSS to be written as SCSS, and compiled via Webpack.
- All CSS compiled from `src/scss/index.scss`

#### Utility Classes

- In `_base.scss`, `.align-left`, `.align-right`, and `.align-center` handle images placed in WYSIWYG sections
- In `_base.scss`, the `.skip-link` class is for the "Skip To Main Content" button for accessibility
- In `_placeholder-selectors.scss`, `.visible-for-screen-readers` is used to hide content but allow it to be accessibly read/spoken
- In `_placeholder-selectors.scss`, `.outer-pad-x` handles horiztonal padding throughout various parts of the site
- In `_placeholder-selectors.scss`, `%responsive-img` is a placeholder selector which sets up object-fit for images and the padding-top percentage for the associated pseudo element which sets the height of the image
- In `_placeholder-selectors.scss`, `.caption` is a re-used type style for image and video captions
- In `_placeholder-selectors.scss`, `.arrow` is the arrow shape used throughout various button and nav styles

### JS

- All theme JS is written as TypeScript, and compiled to stable, browser-compliant JS via Webpack.
- ALL JS to be compiled from Typescript in `src/js/index.ts`

## Acceptance Standards

- [W3C Validation](https://validator.w3.org/)
- Passes Accessibility check using WAVE and Google Lighthouse
- Provides fallback of full content for non-JS users.
