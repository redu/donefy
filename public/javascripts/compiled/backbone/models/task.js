(function() {
  var window,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window = Donefy.Models.Task = (function(_super) {

    __extends(Task, _super);

    function Task() {
      Task.__super__.constructor.apply(this, arguments);
    }

    Task.prototype.paramRoot = 'task';

    Task.prototype.urlRoot = '/tasks';

    Task.prototype.defaults = {
      body: null,
      author: null,
      state: 'todo'
    };

    Task.prototype.initialize = function() {
      return this.bind("change:state", function() {
        return this.save();
      });
    };

    Task.prototype.changeColumn = function(state) {
      return this.set({
        state: state
      });
    };

    return Task;

  })(Backbone.Model);

  Donefy.Collections.TasksCollection = (function(_super) {

    __extends(TasksCollection, _super);

    function TasksCollection() {
      TasksCollection.__super__.constructor.apply(this, arguments);
    }

    TasksCollection.prototype.model = Donefy.Models.Task;

    TasksCollection.prototype.url = '/tasks';

    return TasksCollection;

  })(Backbone.Collection);

}).call(this);
