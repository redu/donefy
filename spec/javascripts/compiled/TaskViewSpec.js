(function() {

  describe("TaskView", function() {
    beforeEach(function() {
      return this.task = new Donefy.Models.Task;
    });
    return it("should react to destroy", function() {
      var taskView;
      loadFixtures("task.html");
      return taskView = new Donefy.Views.TaskView({
        model: this.task
      });
    });
  });

}).call(this);
