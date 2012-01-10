(function() {

  Donefy.Views.TaskView = Backbone.View.extend({
    className: "task-wrapper",
    events: {
      'click .destroy': 'destroyTask'
    },
    initialize: function() {
      _.bindAll(this, 'render', 'remove');
      this.model.bind('change', this.render);
      return this.model.bind('destroy', this.remove);
    },
    template: function() {
      return _.template($("#task-template").html());
    },
    render: function() {
      var template;
      template = this.template()(this.model.toJSON());
      $(this.el).html(template);
      return this;
    },
    destroyTask: function() {
      return this.model.destroy();
    }
  });

}).call(this);
