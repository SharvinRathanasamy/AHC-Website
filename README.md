# AHC Resources Website

Angular static website for AHC Resources halal consultancy.

## Requirements

- Node.js `22` (see `.nvmrc`)
- npm

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build:prod` to build the project for production. The build artifacts will be stored in `dist/ahc-website/browser`.

Run `npm run deploy:check` before deployment. This validates all translation JSON files, creates a production build and verifies required deployment assets exist in `dist/ahc-website/browser`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deployment (Cloudflare Pages)

1. Push this repository to GitHub/GitLab and connect it in the Cloudflare Pages dashboard.
2. Build command: `npm run deploy:check`
3. Build output directory: `dist/ahc-website/browser`
4. Node version: `22` (set the `NODE_VERSION` environment variable in the Pages dashboard if `.nvmrc` is not picked up automatically).
5. Custom domain: `ahcresources.com`

This is a single static page with section anchors, so no SPA fallback/redirect rule is required. Static security headers are included through `src/_headers` and copied into the production output.

For Cloudflare Pages direct upload, upload `ahc-website-deploy.zip` or the contents of `dist/ahc-website/browser`. The deployed root must contain `assets/i18n/en.json`, `assets/i18n/ms.json` and the other asset files; otherwise translations and images will return 404.
