# Angular Seed Prototype w/ routing

Sample app with Angular2 and support for Webpack, ngrx/store and TypeScript.

# Getting Started
## Dependencies
What you need to run this app:

 * `node` and `npm`
 * Global or local install (npm module) of `webpack-dev-server`
 * Global or local install (npm module) of `typings`

## Installation

`npm install`

The _package.json_ file has a postInstall command to install the necessary TypeScript dependencies (`typings install`)

**Note:** There appears to be a peer dependence on having a local copy of the webpack and typescript modules.  These are listed in the package.json as a devDependency.

The installed dependencies:

* `@angular/*`: Core angular framework libraries
* `@ngrx/store`: State management library for Angular2
* `reflect-metadata`: Used for browser polyfills
* `zone.js`: Used for browser polyfills
* `rxjs`: Reactive Extensions used through Angular - specifically for Observables
* `angular2-hmr`: Hot module replacement tool for Angular
* `awesome-typescript-loader`: TypeScript loader desigend for webpack.  Faster than the commonly use *ts-loader*
* `css-loader`: Used for CSS loading and bundling
* `html-webpack-plugin`: Builds html files used with webpack bundles
* `*-loader`: Various loader modules to parse application files
* `less`: CSS preprocessor
* `style-loader`: Combined with css-loader to load and bundle css
* `typescript`: TypeScript compiler
* `webpack`: Module loader
* `webpack-merge`: Plugin to merge different files as part of the webpack operations.

## Execution

At the time of writing, the primary `webpack-dev-server` is the primary web server utilized in order to enable hot module replacement.  The **package.json** includes start and start hot scripts:

* `npm run start` or `npm run start:hot`

This operation will start a webpack-dev-server on [localhost:8080](http://localhost:8080)

If the `*:hot` flag is specified, the application will start a Socket.io to listen for module updates and replace dirty modules without a page refresh.
