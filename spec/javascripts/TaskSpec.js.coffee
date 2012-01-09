describe "Task", ->
  describe "when manipulating tasks around", ->
    beforeEach ->
      @server = sinon.fakeServer.create()
      @task = new Donefy.Models.Task({ id : 12 })

    afterEach ->
      @server.restore()

    it "should generate update request", ->
      response = "{ 'state' : 'doing', 'id' : 12 }"
      @server.respondWith("PUT",
        "/tasks/12",
        [ 200,
        { 'Content-Type' : 'application/json' },
        response ])

      @task.set({ state : "doing" })
      (expect @server.requests[0].method).toEqual 'PUT'
      (expect @server.requests[0].url).toEqual '/tasks/12'

  describe "public API", ->
    beforeEach ->
      @task = new Donefy.Models.Task

    it "should respond to changeColumn", ->
      (expect @task.changeColumn).toBeDefined()

    it "should change to specified column", ->
      @task.changeColumn('done')
      (expect @task.get('state')).toEqual 'done'
