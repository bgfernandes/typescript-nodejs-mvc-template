# typescript-nodejs-mvc-template
A template for traditional server-side rendered MVC application using NodeJS and TypeScript.

## Afterword
I started this project as a way to get back to speed on NodeJS and learn Typescript, but at the same time have a quick template that I could just fork over to use quickly in a new project. I was somewhat influenced by Ruby on Rails and Elixir/Phoenix, and wanted to have something that worked kind of like that.

I did some research on what it seems to be the closest thing to to it, Sails.js, but it looked a little crude so I decided to cobble up something by myself, and started building this by choosing what to use for every different part of the application. The entire approach felt very hackish to me, in the sense that it doesn't feel there is a standard for building Node.js web applications. Some things that I started to take for granted like the ability to have template inheritance that comes out of the box in RoR or Phoenix are actually not that prevalent in Node. That makes me think that this is not the better approach for doing web applications in Node.

I decided to stop here because I don't feel like I would use this to quickstart any new project, I would probably go for RoR instead. This was an interesting learning experiment though. Typescript seems very interesting, I don't think I would start any javascript project in the future without it.

Here is the board that I used to organize the work on this little project's development, as well as some of the things I thought of adding to it, left in the backlog: https://trello.com/b/8F00WMec/typescript-template.

If I do decide to go back into Node.js, I will definetely look into Next.js.


## Library/Tech choices
- **NodeJS** - Javascript runtime environment.
- **Typescript** - enhances javascript by adding static types, comes with a precompiler.
- **ESLint** - javascript linter, also does the static type checking for typescript.
- **ExpressJS** - Lightweight "framework" for NodeJS application servers. Provides routing and middleware features.
- **Nunjucks** - Javascript templating engine. Picked this one because it supports template inheritance, allowing you to create a rails style "layout" template. Had to do some research to find a templating engine that caters for this in Javascript.
- **Jest** - Javscript testing framework.
- **Dotenv** - for setting up environment variables more easily.
- **i18n** - for localization.
- **TailwindCSS** - For styling. It is in use in a few projects at work, but I never got hands on on it and wanted to try it out. Like the philosophy, and it kind of replaces SASS or LESS. Surprised to find out it also includes a CSS preprocessor that can also purge unused CSS from the main tailwind CSS file and make it super small.
- **Objection and Knex** - Objection is a lightweight ORM for javascript, and it is built on top of knex, which is a query builder for javascript, but also handles DB connection pool and also provides a rails like DB migrations feature.
- **Moment** - for handling date types better than javascript's native Date.
- **Fishery** - for test factory methods.
- **Passport JS** - for handling external identity providers.

## Development setup
Development environment setup:
1. Install NodeJS if you haven't already (more info on https://nodejs.org).
2. Run `npm install` to install dependencies.
3. Install and run a local Postgres instance. A very easy way to do this is by using docker: `docker run --name postgres -e POSTGRES_PASSWORD=password -p 127.0.0.1:5432:5432 -v /home/<my_local_user>/postgres:/var/lib/postgresql/data -d postgres`. That command will run a docker image with postgres setting the password for the `postgres` user as `password`, running on `127.0.0.1:5432`, and map local folder `/home/<my_local_user>/postgres` to contain all the config and data. More info here: https://hub.docker.com/_/postgres.
4. Get a Google web application client ID and secret, follow instructions here for how to do this: https://developers.google.com/identity/sign-in/web/sign-in.
5. Create a `.env` and a `.env.test` file in `src/config` by copying the example files, and update the environment variables. You can set those enviroment variables in any alternative way as well.
6. Run `npm run db:setup` to create the database and run all the migrations.
7. Start server in dev mode with `npm start`. To automatically restart the server on changes, use `npm run dev`.

Run tests:
1. Run `npm test`.

## Running in production
Run the server in production environment with `npm run start-prod`.

## Folder structure
Quick description of the main **folders** and *files* inside the repo:

- **.github/workflows** - Github workflows that run on automated triggers from github.
- **db** - Database related info, has some utility scripts to handle DB create/drop/truncate and also:
  - **migrations** - Knex.js migrations for setting up the DB schema.
- **src** - The main file with application code.
  - *app.ts* - Exports the `Express.Application` object. Calls all initializers, adds middleware and also the main router.
  - *server.ts* - Entry point for serving the application.
  - **assets** - For storing custom javascript, css and other static assets like fonts/images.
  - **config** - For setting up the static and enviroment based project configuration.
    - **initializers** - Scripts that configure and set up libraries.
    - *routes.ts* - Configures all the routes in the application, mathing to the controllers.
  - **controllers** - MVC controllers of the application.
  - **locales** - JSON for the translations, on i18n lib's format.
  - **middleware** - application wide middleware, as well as route specific middlewares like *neewdsAuth.ts*.
  - **models** - MVC models for the application, all in the Objection's lib format.
    - *BaseModel.ts* - The base model class from which all models inherit from.
  - **views** - Has all the nunjucks view templates used.
- **test** - Folder with all the jest test suites and some test helpers. The tests for the modules are structured in the same way as inside the **src** folder.
  - *factories.ts* - Test factories for the models using the Fishery library.
  - *globalSetup.ts* -  Database chores that run once before all test suites.
  - *setup.ts* - Database chores that run once before each test case in all the suites.
  - *testHelpers.ts* - Any helper functions needed for the test suites.
- **types** - Typescript type definition overrides for external libraries.




