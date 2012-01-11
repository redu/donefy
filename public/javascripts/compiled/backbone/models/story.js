(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Donefy.Models.Story = (function(_super) {

    __extends(Story, _super);

    function Story() {
      Story.__super__.constructor.apply(this, arguments);
    }

    Story.prototype.paramRoot = 'story';

    Story.prototype.defaults = {
      body: null
    };

    Story.prototype.initialize = function() {
      var _this = this;
      this.tasks = new Donefy.Collections.TasksCollection;
      return this.tasks.bind("change:story_id", function(task) {
        return _this.tasks.remove(task);
      });
    };

    return Story;

  })(Backbone.Model);

  Donefy.Collections.StoriesCollection = (function(_super) {

    __extends(StoriesCollection, _super);

    function StoriesCollection() {
      StoriesCollection.__super__.constructor.apply(this, arguments);
    }

    StoriesCollection.prototype.model = Donefy.Models.Story;

    StoriesCollection.prototype.url = '/stories';

    return StoriesCollection;

  })(Backbone.Collection);

}).call(this);
