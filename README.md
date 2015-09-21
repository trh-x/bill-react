# React/Flux Coding Exercise #

## Background ##

Having first read about React many moons ago, my interest was piqued but I never managed to find time to take an in-depth look at it... Angular development has been the main cut and thrust of my day job for the past couple of years, so I've spent most of my time buried deep within that particular ecosystem, or possibly relaxing by the bar and trying to forget all about software engineering.

Time waits for no man though, and nowhere is this truer than within the realms of front-end JS development. So, when I was approached with a React job at a prestigious media organisation, I expressed my interest. I was given a technical exercise to perform.

The brief for the task was simple, but I took the opportunity to vastly overengineer the solution and use it as a learning tool for React, Flux and ECMAScript 6, none of which I had previously used.

## The Brief ##

### Display a customer's bill ###

* Use any language, tools or framework
* Consume the bill as JSON from a given endpoint:
```
http://trh-x.com/bill/bill.json
```

### Assessment criteria ###

* TDD/BDD
* Simple and eloquent code
* Knowledge of front end development
* Bill should be easy to understand (good user experience)

## The Solution ##

As mentioned, I went way overboard on this. Although the requirements could be satisfied with a pretty lightweight implementation, I wanted to get exposure to as much of the React architecture as I could. Indeed, I could have entirely omitted Flux from the equation but again, I wanted to get a good understanding of how it all works.

I used React to create a set of modular components to render the view, and used Flux to manage the data flow. Writing in ES6 was refreshing, I have been using CoffeeScript recently so it's good to get exposure to the next generation of vanilla JS.

To run in the browser, Browserify is used to transpile ES6 to ES5 and bundle the modules together according to their dependencies. Bootstrap is used for some simple out-of-the-box styles to present the view.

Following best practice and aware of the assessment criteria, I developed using TDD/BDD with unit tests written in Jest covering the entire codebase.

I've not written any E2E/integration tests but am hoping to come back to this when I have time.

## Installation ##

### Configure ###

The JSON endpoint URL can be configured by editing the file `config.json` in the root of the repository. The code bundle will need rebuilding after modifying the config.

### Build ###

The build tools require Node 4 or iojs.

Firstly, install the dependencies:
```
$ npm install
$ npm install -g bower
$ bower install
```

To build the bundle (this also starts a watch to rebuild the files on change):
```
npm start
```

To build the production version:
```
npm run build
```

## How To Run ##

In your web browser, navigate to `index.html` in the root of the repository. Either browse to it as a file, or set up a simple web server, e.g.

```
$ python -m SimpleHTTPServer 8000
```

Then navigate to `http://localhost:8000`

### Online demo ###

You can also see the app running here:

http://trh-x.com/bill-react/


## Testing ##

To run the tests:
```
$ npm test
```

## What I Learned ##

I learned a lot from this exercise, notably that React can be a lot of fun and lends itself to good engineering practices.

Interestingly, I actually spent a lot longer trying to figure out how to test things using Jest than learning React itself, which is pretty straightforward conceptually and has a nice API.

The Flux architecture is again nice and clean, particularly coming from the Angular world of two-way data binding and dirty checking digest loops.

All in all it was a positive experience and I look forward to more React development.