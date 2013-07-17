JS2EE
=====

What is it?
-----------

A CoffeeScript application that demonstrates J2EE application architecture with 
GoF Design Patterns. [Read more](http://dblogit.com/archives/3895).

Installation
------------

To install, first make sure you have a working copy of the latest stable version
of [node.js](http://nodejs.org/), and [npm](https://npmjs.org/). You can then 
install CoffeeScript with npm: `npm install -g coffee-script`.

Development
-----------

Once you've installed the dependencies you can build the project running
`cake build` from this directory. The built files will be output into the `dist`
directory. You can test the project by launching a web server from the `dist`
directory and running the `index.html` file.

Usage
-----

Since this is just an example, all the important stuff gets logged to the 
console. You'll need to open up your debugger to see what's going on.

Start your server and then try out the following URLS:

* `http://localhost:8000/` will render the default view
* `http://localhost:8000/?foo=bar` will render the `index` view which will log
   `Foo: bar` to the console.