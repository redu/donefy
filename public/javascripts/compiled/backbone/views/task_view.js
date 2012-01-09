(function() {
  var window,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window = Donefy.Views.TaskView = (function(_super) {

    __extends(TaskView, _super);

    function TaskView() {
      TaskView.__super__.constructor.apply(this, arguments);
    }

    return TaskView;

  })(Backbone.View);

}).call(this);
