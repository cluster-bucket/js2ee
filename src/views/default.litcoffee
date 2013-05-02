Default View
============

When a request doesn't resolve properly the default view will be invoked. It
will check for and display any messages that were generated but it won't do
anything else.

    define [
      './view'
      '../helpers/view'
    ], (View, ViewHelper) ->
      class DefaultView extends View
        doExecute: (request) ->
          viewHelper = new ViewHelper()
          viewHelper.renderMessages request

