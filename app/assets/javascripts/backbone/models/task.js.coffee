window = class Donefy.Models.Task extends Backbone.Model
  paramRoot: 'task'
  urlRoot: '/tasks'

  defaults:
    body: null
    author: null
    state: null

  initialize: ->
    this.bind "change:state", ->
      this.save()

class Donefy.Collections.TasksCollection extends Backbone.Collection
  model: Donefy.Models.Task
  url: '/tasks'
