Donefy.Views.TaskView = Backbone.View.extend(
  className : "task-wrapper"
  events :
    'click .destroy' : 'destroyTask'

  initialize : ->
    _.bindAll(this, 'render', 'remove')
    this.model.bind('change', this.render)
    this.model.bind('destroy', this.remove)

  template : ->
    _.template $("#task-template").html()

  render : ->
    template = this.template()(this.model.toJSON())
    $(this.el).html(template)

    this

  destroyTask : ->
    this.model.destroy()
)
