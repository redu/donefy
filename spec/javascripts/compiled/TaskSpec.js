(function() {

  describe("Task", function() {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();
      return this.task = new Donefy.Models.Task({
        id: 12
      });
    });
    afterEach(function() {
      return this.server.restore();
    });
    return it("should trigger event when changing state", function() {
      var response;
      response = "{ 'state' : 'doing', 'id' : 12 }";
      this.server.respondWith("PUT", "/tasks/12", [
        200, {
          'Content-Type': 'application/json'
        }, response
      ]);
      this.task.set({
        state: "doing"
      });
      return (expect(this.server.requests[0].url)).toEqual('/tasks/12');
    });
  });

}).call(this);
