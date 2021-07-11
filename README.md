# Lodges Limited Website

Built with the Svelte component framework and [Sapper](https://sapper.svelte.dev) to server-side render the
application.

The following development tools are used:

- Rollup bundler
- Typescript
- Prettier code formatting
- ESLint code linting
- SCSS styling support with autoprefixer
- Storybook component browser
- Netlify CI build integration

## Getting started

```bash
git clone ...
```

### Running the project

Once you have cloned the git repository, install dependencies, setup [configuration
variables](#Configuration) and run the project in development mode:

```bash
npm install
npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000). Open it and click around.

You can also run the netlify CLI if you wish to see the Netlify Lambda Functions in action by running:

```bash
netlify dev
```

This will start the Netlify development server on [localhost:8888](http://localhost:8888). Open it and click around.

### Configuration

The following environment variables are available to configure the application.

| Name               | Description               | Example |
| ------------------ | ------------------------- | ------- |
| `AIRTABLE_API_KEY` | Airtable API access token | `111`   |
| `AIRTABLE_BASE_ID` | Airtable Base ID          | `111`   |

## Storybook

Storybook helps you build UI components in isolation from your app's business logic, data, and context. That makes it easy to develop hard-to-reach states. Save these UI states as stories to revisit during development, testing, or QA.

Run the storybook UI with `npm run storybook`.

Each component in
the `src/` directory has an associated `*.stories.js` file which drives the storybook view.

### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.

#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — _pages_, and _server routes_.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

- A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
- The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
- Files and directories with a leading underscore do _not_ create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would _not_ create a `/_helpers/datetime` route.
