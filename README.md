# React, Webpack Boilerplate

Boilerplate designed to get up and running on a new React project in no time.
The boilerplate configures [Webpack](https://webpack.js.org/) to build the application using the following: ES6 JS transpiler ([Babel](http://babeljs.io)), Web Dev Server with Hot Module Replacement (HMR) and [React Hot Loader](https://github.com/gaearon/react-hot-loader), [React Router](https://reacttraining.com/react-router), [Redux](https://redux.js.org) integration, [Redux Devtools](https://github.com/gaearon/redux-devtools) and styling with [CSS Modules](https://github.com/css-modules/css-modules).

Once you have downloaded/cloned the repo, run:

    $ npm install

The following commands are then available:

    $ npm run prod
    $ npm run dev

"prod" - compiles (hashes assets and uglifies/minifies) the application in the /public/ folder ready for deployment. HTML, JS and CSS files are generated.

"dev" - starts up the dev server (http://localhost:8080) with HMR/React Hot Loader.

A simple Express server has also been added to serve the production files (files located in /public/ will be served at http://localhost:8080). The following command is available:

    $ node server.js
