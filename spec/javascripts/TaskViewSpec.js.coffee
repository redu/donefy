describe "TaskView", ->
  beforeEach ->
    @task = new Donefy.Models.Task

  it "should react to destroy", ->
    loadFixtures "task.html"
    taskView = new Donefy.Views.TaskView({ model : @task })

