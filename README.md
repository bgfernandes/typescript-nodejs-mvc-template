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
- Objection and Knex: Objection is a lightweight ORM for javascript, and it is built on top of knex, which is a query builder for javascript, but also handles DB connection pool and also provides a rails like DB migrations feature.

## Development setup
Development environment setup:
1. Install NodeJS if you haven't already (more info on https://nodejs.org).
2. Run `npm install` to install dependencies.
3. Install and run a local Postgres instance. A very easy way to do this is by using docker: `docker run --name postgres -e POSTGRES_PASSWORD=password -p 127.0.0.1:5432:5432 -v /home/<my_local_user>/postgres:/var/lib/postgresql/data -d postgres`. That command will run a docker image with postgres setting the password for the `postgres` user as `password`, running on `127.0.0.1:5432`, and map local folder `/home/<my_local_user>/postgres` to contain all the config and data. More info here: https://hub.docker.com/_/postgres.
4. Create a `.env` and a `.env.test` file in `src/config` by copying the example files, and update the environment variables if needed. You can set those enviroment variables in any alternative way as well.
5. Run `npm run db:setup` to create the database and run all the migrations.
6. Start server in dev mode with `npm start`. To automatically restart the server on changes, use `npm run dev`.

Run tests:
1. Run `npm test`.

## Building for deployment
To build, run `npm run build-prod`, the output will be in the `dist` folder. Run the server in production environment with `NODE_ENV=production node dist/server.js`.
