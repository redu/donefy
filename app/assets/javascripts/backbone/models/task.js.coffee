class Donefy.Models.Task extends Backbone.Model
  paramRoot: 'task'
  urlRoot: '/tasks'

  defaults:
    body: 'lorem'
    author: 'lipsum'
    state: 'todo'

  initialize: ->
    this.bind "change:state", ->
      this.save()

  changeColumn: (state) ->
    this.set({ state : state })

class Donefy.Collections.TasksCollection extends Backbone.Collection
  model: Donefy.Models.Task
  url: '/tasks'
