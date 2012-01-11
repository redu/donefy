(function() {

  describe("Story", function() {
    beforeEach(function() {
      return jasmine.getFixtures().fixturesPath = '__spec__/fixtures';
    });
    describe("should have many tasks", function() {
      beforeEach(function() {
        return this.story = new Donefy.Models.Story;
      });
      it("should respond to tasks", function() {
        return expect(this.story.tasks).toBeDefined();
      });
      return it("should be possible to have many tasks", function() {
        var n, tasks;
        tasks = (function() {
          var _results;
          _results = [];
          for (n = 0; n <= 3; n++) {
            _results.push(new Donefy.Models.Task({
              'body': n
            }));
          }
          return _results;
        })();
        this.story.tasks.add(tasks);
        return expect(this.story.tasks.include(tasks[0])).toBeTruthy();
      });
    });
    return describe("should bind to change:story_id from all tasks", function() {
      beforeEach(function() {
        var n, tasks;
        this.story = new Donefy.Models.Story;
        tasks = (function() {
          var _results;
          _results = [];
          for (n = 0; n <= 3; n++) {
            _results.push(new Donefy.Models.Task({
              'body': n,
              'story_id': this.story.cid
            }));
          }
          return _results;
        }).call(this);
        return this.story.tasks.add(tasks);
      });
      return it("should remove a task if it changes story_id", function() {
        var mantained_task, removed_task;
        removed_task = this.story.tasks.first();
        mantained_task = this.story.tasks.last();
        removed_task.set({
          'story_id': 'new2'
        });
        expect(this.story.tasks.include(removed_task)).toBeFalsy();
        return expect(this.story.tasks.include(mantained_task)).toBeTruthy();
      });
    });
  });

}).call(this);
