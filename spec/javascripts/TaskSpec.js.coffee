describe "Task", ->
  beforeEach ->
    @server = sinon.fakeServer.create()
    @task = new Donefy.Models.Task({ id : 12 })

  afterEach ->
    @server.restore()

  it "should trigger event when changing state", ->
    response = "{ 'state' : 'doing', 'id' : 12 }"
    @server.respondWith("PUT",
      "/tasks/12",
      [ 200 ,
      { 'Content-Type' : 'application/json' } ,
      response ])

    @task.set({ state : "doing" })
    (expect @server.requests[0].url).toEqual '/tasks/12'
