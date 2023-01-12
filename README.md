# WeatherApp Coding Challenge

Basic version of the outlined Weather app, with limited functionality:

- the locations to show weather for are static
- loading state and any error messages from trying to fetch data is displayed in a very rudimentary fashion

Applied very simple styling using CSS Modules – a designer would typically supply all the pizzaz. Verified that the
Screen Reader experience is decent using Voice Over on OSX. 

The app is built on top of react-query, to cache and update fetched data.

There was no time left over to write tests, but I would have written one for each of the composing components, as they
give most value. Mocking out the ReactQuery hooks, there should be tests for:

- [pages/Dashboard/LocationList/Location](./src/pages/Dashboard/LocationList/Location/Location.tsx)
- [pages/Dashboard](./src/pages/Dashboard/Dashboard.tsx)
- [pages/LocationDetails/components/CurrentWeather](./src/pages/LocationDetails/components/CurrentWeather/CurrentWeather.tsx)
- [pages/LocationDetails](./src/pages/LocationDetails/LocationDetails.tsx)

For each tested component, you verify that the expected content is rendered at the different life phases (
loading/error/success).

# Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and customized
with [CRACO](https://github.com/dilanx/craco).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
