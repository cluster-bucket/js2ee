Abstract Request Decoratorator Class
====================================

    define ['../process'], (ProcessRequest) ->
      class RequestDecorator extends ProcessRequest
        constructor: (@handler) ->
