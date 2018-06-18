# README: Random Beer Finder #
The Random Beer Finder app uses the BreweryDB API to display a random beer. You can click on the beer's brewery name to view more information about that brewery.
This app has been built using my React-Node template, see [https://github.com/daraclare/react-node-template](https://github.com/daraclare/react-node-template).


## Start Guide
Below is a guide to install, running and building the app.

```sh
git clone git@github.com:daraclare/Random-Beer.git

cd Random-Beer

# install all node modules in the package.json file
npm install

# start the application — this will enable hot-reloading, linting and display the coverage in the console
npm start
```

The app will open at [http://localhost:3000/](http://localhost:3000/).


For production, run the build to transpile code to 'dist' folder. This runs the app in localhost and ensures the app is running correctly using the 'dist' folder files:
```npm run build```

To view the build files run:
```npm run start:dist```

## Basic Tech Stack ##
This app is built using **React 16.4** for building user interfaces. The template is build using **React-Router 4** and **Webpack 4**. ES6 syntax is transpiled to ES5 using Babel.

## To Do
Given more time, below is a list of improvements that could be made to the app.

**Testing:** the app could have been built using TDD, this could make the code more maintainable, extensible and create a focus on the goal of the project. At very least, more unit tests should be implemented to make the app more robust.

**Vanilla JavaScript:** the app was built using React for demonstration purposes only, such a simple app could have been built with plain JavaScript.

**Cross Browser Testing:** the app has not been testing across all browsers.

**Responsive Testing:** although efforts have been made to ensure the app is responsive, these have not been extensively tested outside the Chrome Dev tools.

**UI Design:** The app would benefit from more time spent on designing the UI.
