class Donefy.Models.Story extends Backbone.Model
  paramRoot: 'story'

  defaults:
    body: null

  initialize: ->
    this.tasks = new Donefy.Collections.TasksCollection

    # Removes a task, in case it changes of story
    this.tasks.bind "change:story_id", (task) =>
      this.tasks.remove(task)

class Donefy.Collections.StoriesCollection extends Backbone.Collection
  model: Donefy.Models.Story
  url: '/stories'
