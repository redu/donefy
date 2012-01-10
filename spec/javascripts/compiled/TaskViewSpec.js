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
        model: this.task
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
    it("should update when the model changes", function() {
      this.task.set({
        'author': 'guila'
      });
      return (expect($("#container .task .author"))).toHaveHtml("guila");
    });
    return describe("when removing", function() {
      return it("should trigger model's destroy event", function() {
        var callback;
        callback = jasmine.createSpy();
        this.task.bind('destroy', callback);
        $(".destroy").trigger('click');
        return (expect(callback)).toHaveBeenCalled();
      });
    });
  });

}).call(this);
