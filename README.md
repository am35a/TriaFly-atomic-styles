# TriaFly UI Kit

The CSS/JS framework create for TriaFly BI system (https://triafly.ru) project.


## Getting started


### Using GitHub templates

You can clone the project as a GitHub repository.

### Running the project

Once you have created the project, install dependencies and run the project in development mode:

```bash
cd my-app
npm install # or yarn
npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000). Open it and click around.

You now have a fully functional Sapper project! To get started developing, consult [sapper.svelte.dev](https://sapper.svelte.dev).


## Bundler configuration

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.


## Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

If your app can't be exported to a static site, you can use the [vercel-sapper](https://github.com/thgh/vercel-sapper) builder. You can find instructions on how to do so in its [README](https://github.com/thgh/vercel-sapper#basic-usage).
