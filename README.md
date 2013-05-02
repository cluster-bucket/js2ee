JS2EE
=====

What is it?
-----------

A CoffeeScript application that demonstrates J2EE application architecture with 
GoF Design Patterns. [Read more](http://dblogit.com/archives/3895).

Installation
------------

[node.js](http://nodejs.org/) and [npm](https://npmjs.org/) are used to build
and compile the project, so you'll need to install those first. Once that's
taken care of you can run `npm install` from this directory to set up all of 
the required dependencies.

Development
-----------

Once you've installed the dependencies several [Grunt](http://gruntjs.com/) 
tasks will be available on the command line. To build the project run `grunt`.
To start a server run `grunt server`.

Usage
-----

Since this is just an example, all the important stuff gets logged to the 
console. You'll need to open up your debugger to see what's going on.

Start your server using `grunt server` and then try out the following URLS:

* `http://localhost:8000/` will render the default view
* `http://localhost:8000/?foo=bar` will render the `index` view which will log
   `Foo: bar` to the console.