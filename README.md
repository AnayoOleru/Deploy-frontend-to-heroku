# Deploy-frontend-to-heroku

[![Build Status](https://travis-ci.org/AnayoOleru/Deploy-frontend-to-heroku.svg?branch=develop)](https://travis-ci.org/AnayoOleru/Deploy-frontend-to-heroku)

A simple web-app with built with html, css and javascript, to be deployed to heroku using git and express.js
# Check a sample of it on https://arizonaacademy.herokuapp.com  

## Implemented Features
* Users can register
* Users can login

## Technologies Used
* [Node.js](https://nodejs.org) - A runtime environment based off of Chrome's V8 Engine for writing Javascript code on the server.
* [Express.js](https://expressjs.com) - Web framework based on Node.js.
* [Babel](https://babeljs.io) - Javascript transpiler.
* [Eslint](https://eslint.org/) - Javascript linter. 
* [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style [guide](https://github.com/airbnb/javascript) was followed.
*[bycrypt]() - an adaptive hash function based
*[JWT]() - API authentication mechanism

## Testing tools
* [Mocha](https://mochajs.org/) - A Javascript test framework.
* [Chai](http://chaijs.com) - Assertion library.


## API Infomormation
   Heroku https://arizonaacademy.herokuapp.com/api/v1/

  | METHOD  | DESCRIPTION                  |             ENDPOINTS                                |
  | --------| -------------                |          -------------------------------             |
  | POST    | User register                |    `/api/v1/users`                                   |
  | POST    | User login                   |     `/api/v1/users/login`                            | 
  