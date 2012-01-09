class TasksController < ApplicationController
  def index
    @tasks = Task.all

    respond_to do |format|
      format.json { render json: @tasks }
    end
  end

  def show
    @task = Task.find(params[:id])

    respond_to do |format|
      format.json { render json: @task }
    end
  end

  def new
    @task = Task.new

    respond_to do |format|
      format.json { render json: @task }
    end
  end

  def create
    @task = Task.new(params[:task])

    respond_to do |format|
      if @task.save
        format.json { render json: @task, status: :created, location: @task }
      else
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @task = Task.find(params[:id])

    respond_to do |format|
      if @task.update_attributes(params[:task])
        format.json { head :ok }
      else
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    respond_to do |format|
      format.json { head :ok }
    end
  end
end
