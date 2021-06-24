# typescript-nodejs-mvc-template
A template for traditional server-side rendered MVC application using NodeJS and TypeScript.

## Library/Tech choices
- NodeJS - Javascript runtime environment.
- Typescript - enhances javascript by adding static types, comes with a precompiler.
- ESLint - javascript linter, also does the static type checking for typescript.
- ExpressJS - Lightweight "framework" for NodeJS application servers. Provides routing and middleware features.
- Nunjucks - Javascript templating engine. Picked this one because it supports template inheritance, allowing you to create a rails style "layout" template. Had to do some research to find a templating engine that caters for this in Javascript.
- Jest - Javscript testing framework.
- Dotenv - for setting up environment variables more easily.
- i18n - for localization.
- TailwindCSS - For styling. It is in use in a few projects at work, but I never got hands on on it and wanted to try it out. Like the philosophy, and it kind of replaces SASS or LESS. Surprised to find out it also includes a CSS preprocessor that can also purge unused CSS from the main tailwind CSS file and make it super small.

## Development setup
Development environment setup:
1. Install NodeJS if you haven't already (more info on https://nodejs.org).
2. Run `npm install` to install dependencies.
3. Create a `.env` file in `src/config` by copying the `src/config/.env.example` and update the environment variables.
4. Start server in dev mode with `npm start`. To run the server with hot reload, use `npm run dev`.

Run tests:
1. Run `npm test`.

## Building for deployment
To build, run `npm run build-prod`, the output will be in the `dist` folder. Run the server in production environment with `NODE_ENV=production node dist/server.js`.
