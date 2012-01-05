class Donefy.Models.Task extends Backbone.Model
  paramRoot: 'task'

  defaults:
    body: null
    author: null
    state: null

class Donefy.Collections.TasksCollection extends Backbone.Collection
  model: Donefy.Models.Task
  url: '/tasks'
