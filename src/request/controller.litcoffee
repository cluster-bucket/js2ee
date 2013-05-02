Request Front Controller
========================

> Defines a central point of entry for every request. Processes the
request and uses it to select an operation to perform. Operations are often
defined in specialized `command` objects organized according to the command
pattern. --Zandstra, Matt. _PHP Objects, Patterns, and Practice_. 3rd ed.
Berkeley, CA: Apress, 2010. Print.

    define [
      './resolver'
    ], (Resolver) ->
      class RequestController

        constructor: (@request) ->

        @run: (request) ->
          controller = new RequestController(request)
          controller.handle()
          return

        handle: () ->
          resolver = new Resolver()
          resolver.getView(@request).then (View) =>
            View.execute(@request)
