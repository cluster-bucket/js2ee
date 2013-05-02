Index View
==========

The index view is the main view.

    define [
      './view'
      '../helpers/view'
    ], (View, ViewHelper) ->
      class IndexView extends View
        doExecute: (request) ->
          viewHelper = new ViewHelper()
          viewHelper.renderView request


