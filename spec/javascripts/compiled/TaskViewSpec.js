(function() {

  describe("TaskView", function() {
    beforeEach(function() {
      var $container;
      jasmine.getFixtures().fixturesPath = '__spec__/fixtures';
      loadFixtures("task.html");
      this.task = new Donefy.Models.Task({
        'author': 'jubis'
      });
      this.taskView = new Donefy.Views.TaskView({
        model: this.task,
        id: 12
      });
      $container = $("<div/>", {
        'id': 'container'
      });
      $("body").append($container);
      return $container.append(this.taskView.render().el);
    });
    afterEach(function() {
      return $("#container").remove();
    });
    it("should render correctly", function() {
      return (expect($("#container .task .author"))).toHaveHtml("jubis");
    });
    return it("should update when the model changes", function() {
      this.task.set({
        'author': 'guila'
      });
      return (expect($("#container .task .author"))).toHaveHtml("guila");
    });
  });

}).call(this);
