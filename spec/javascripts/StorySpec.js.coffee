describe "Story", ->
  beforeEach ->
    jasmine.getFixtures().fixturesPath = '__spec__/fixtures'

  describe "should have many tasks", ->
    beforeEach ->
      @story = new Donefy.Models.Story

    it "should respond to tasks", ->
      expect(@story.tasks).toBeDefined()

    it "should be possible to have many tasks", ->
      tasks = (new Donefy.Models.Task({ 'body' : n }) for n in [0..3])
      @story.tasks.add(tasks)
      expect(@story.tasks.include(tasks[0])).toBeTruthy()

  describe "should bind to change:story_id from all tasks", ->
    beforeEach ->
      @story = new Donefy.Models.Story
      tasks = (new Donefy.Models.Task({ 'body' : n, 'story_id' : @story.cid }) \
        for n in [0..3])
      @story.tasks.add(tasks)

    it "should remove a task if it changes story_id", ->
      removed_task = @story.tasks.first()
      mantained_task = @story.tasks.last()
      removed_task.set({ 'story_id' : 'new2' })

      expect(@story.tasks.include(removed_task)).toBeFalsy()
      expect(@story.tasks.include(mantained_task)).toBeTruthy()
