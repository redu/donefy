describe "TaskView", ->
  beforeEach ->
    jasmine.getFixtures().fixturesPath = '__spec__/fixtures'
    loadFixtures "task.html"

    @task = new Donefy.Models.Task({ 'author' : 'jubis' })
    @taskView = new Donefy.Views.TaskView({ model : @task, id : 12 })

    $container = $("<div/>", { 'id' : 'container' })
    $("body").append $container
    $container.append(@taskView.render().el)

  afterEach ->
    $("#container").remove()

  it "should render correctly", ->
    (expect $("#container .task .author")).toHaveHtml("jubis")

  it "should update when the model changes", ->
    @task.set({ 'author' : 'guila' })
    (expect $("#container .task .author")).toHaveHtml("guila")


