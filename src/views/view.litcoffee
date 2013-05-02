Abstract View
=============

All other views inherit from this.

    define [], () ->
      class View
        execute: (request) ->
          console.log "View: #{@constructor.name}"
          @doExecute request
        doExecute: (request) ->
