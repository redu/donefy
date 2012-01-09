(function() {

  describe("Task", function() {
    describe("when manipulating tasks around", function() {
      beforeEach(function() {
        this.server = sinon.fakeServer.create();
        return this.task = new Donefy.Models.Task({
          id: 12
        });
      });
      afterEach(function() {
        return this.server.restore();
      });
      return it("should generate update request", function() {
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
        (expect(this.server.requests[0].method)).toEqual('PUT');
        return (expect(this.server.requests[0].url)).toEqual('/tasks/12');
      });
    });
    return describe("public API", function() {
      beforeEach(function() {
        return this.task = new Donefy.Models.Task;
      });
      it("should respond to changeColumn", function() {
        return (expect(this.task.changeColumn)).toBeDefined();
      });
      return it("should change to specified column", function() {
        this.task.changeColumn('done');
        return (expect(this.task.get('state'))).toEqual('done');
      });
    });
  });

}).call(this);
