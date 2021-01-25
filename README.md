# Getting Started

Before you start, you have to setup the application values:

```
cp src/Config/index.dev.js src/Config/index.js 
```

Edit the `src/Config/index.js` and add your `API_PUBLIC_KEY`.

## Installation

```
yarn install 
# or npm install
```

## Available Scripts

In the project directory, you can run:

```
yarn start
# or npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
yarn test
# or npm run test
```

Launches the test runner in the interactive watch mode.

```
yarn build
# or npm run build
```

Builds the app for production to the `build` folder.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Switch the selector

Edit the `src/Config/index.js` and set `SELECTOR_ORDER` to `MMY` or `YMM`. Then run the application again.

## TODO

- add more unit tests
- add end-to-end tests using `codeceptjs`
- add pagination to the graphql-query results
