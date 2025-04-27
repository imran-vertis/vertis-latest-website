# 11ty Plain Bootstrap 5.2

[![Build and Deploy](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml/badge.svg)](https://github.com/mandrasch/11ty-plain-bootstrap5/actions/workflows/build-deploy.yaml)

Minimalistic template for the awesome static site generator [Eleventy/11ty](https://www.11ty.dev/), just

- [Bootstrap 5](https://www.npmjs.com/package/bootstrap) (via npm)
- [Laravel Mix](https://www.npmjs.com/package/laravel-mix)\* for SCSS / JS compilation (incl. Autoprefixer)

_\* Laravel Mix is a wrapper around webpack, it is purely NodeJS, no PHP involved ;-)_

Plugins used (you don't have to keep them):

- [eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)
- [eleventy-img](https://www.11ty.dev/docs/plugins/image/)
- [eleventy-rss](https://www.11ty.dev/docs/plugins/rss/) (to get absolute URLs for social media open graph tags)

## Usage

**Install via:**

- `npm install`

**Start local development with**

- `npm run dev`

Preview runs on http://localhost:8080/.

**Where to edit?**

- Work with files in `src/`-folder
- Homepage: `src/index.njk`, Config: `.eleventy.js`
- **Don't** edit `_site/` folder (automatically generated)

**Generate a static build with**

- `npm run build`

_Advice: `BASE_URL` should be set as node env variable for open graph image support (they need full instead of relative URLs. You can strip them out as well in `meta.njk`. See `.github/workflows/build-deploy.yaml` for information. Currently it defaults to http://localhost:8080 if no env var is set.)_

## Technical background:

Bootstrap information for npm/sass:

- https://getbootstrap.com/docs/5.2/getting-started/download/#source-files
- https://getbootstrap.com/docs/5.2/customize/sass/

Sustainable Web Design:

- Comment out not needed bootstrap components in `src/scss/app.scss`

## License

MIT license

_(License is for compatibility purposes with eleventys license only. You don't have to attribute my personal additions, I did mostly boring config stuff. Please be aware that Eleventy, Bootstrap, Bootstrap Icons, Laravel Mix and eleventy plugins used are licensed as MIT license.)_
