# core-dev-npm
Core development files for front end development with Sass using NPM versus a build tool like Grunt, Gulp or Webpack.  Simple html, css and js boilerplate.  This project extends the [HTML5 Boilerplate(https://github.com/h5bp/html5-boilerplate "HTML5 Boilerplate")] project. 

## NPM vs Build Process
The reason I chose to use NPM versus a build process is because build processes appear to me to add bloat. They also can be difficult introduce new ones if, for instance, you need a newer version of node than your current build process allows.  By using NPM scripts, you avoid having any dependencies other than the versions of Node and NPM you want to use. 

Here is a good article (with some code you will recognize) that describes the process I used for SASS compilations

## Why this boilerplate?
Because I just needed something simple that worked for making prototypes or templates.  I work in the niche of Front End development that crosses over more to design and UX than a front end engineer.


## Getting started
This project requires a few dependencies:

* Node 4.x.x
* NPM 3.x.x

The folder structure is 
* bin/ (where your NPM scripts will reside)
* css/ (where the compiled css will reside)
 * main.css (compiled css file)
* img/ (image files)
* js/ (JavaScript files)
 * vendor/ (3rd party librarires)
  * jquery-1.11.2 (version doesn't matter.  It is optional)
  * modernizer-2.8.3-respons-1.4.2 (version doesn't matter, this is also optional and probably not needed for projects with more modern browser requirements)
 * main.js (all of your custom js scrips)
 * plugins.js (this is more for global plugin scripts like anchor scroll speeds or fixing console errors in older browsers.  This is optional as well and probably overkill)
* sass/ (where your scss files go)
 * _mixins.scss (contains some common mixins I use for a lot of projects.)
 * _variables.scss (contains some examples of variables I use as well as some important image based ones
 * main.sces (core scss file to compile. Contains all imports based on your sass style.+)

I use this method:
[SMACSS by Jonathan Snook](https://smacss.com/)

It is not the only method, and may not be the best method anymore, but I like it for now. 

## Installing NPM dependencies
I found a lot of the methods in this seciton from [this medium article by Biran Han](https://github.com/hellobrian/blogs/tree/master/watch-and-compile-your-sass-with-npm)

First off, it is important to make sure that you have the lastest versions of node-sass and nodemon

```
$ npm install -D node-sass nodemon
```

That should write these dependencies to your package.json file. If not, you can also use --save


