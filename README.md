### My personal portfolio

- My new portfolio build with React, custom webpack boilerplate.
- Hosted on netlify.

### It has the following
- My social network links (LinkedIn, GitHub, CodePen and react native app)
- About me
- My Skills list
- My projects list

### Stack
- [React](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Webpack](https://webpack.js.org/)

### It has the following setup
- Google Analytics
- Progressive web app using `InjectManifest` from `workbox-webpack-plugin`

## Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.<br>
It will open [http://localhost:3000](http://localhost:3000) automatically in the browser to see your app.

All changes will be injected automatically without reloading the page.<br>

You will see in the console the following:

- Any of the following errors:
    1. Linting errors.
    2. Code format errors (because of [prettier](https://prettier.io/))

### `pnpm build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `pnpm build:serve`

Serves the app on `http://localhost:8080/` from the `dist` folder to check the production version.

**_Note:_** Use this script only if you ran the build script `pnpm build`.

### `pnpm analyze-bundle`

It allows you to analyze the bundle size.