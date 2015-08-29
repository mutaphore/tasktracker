taskTrackerApp.controller("TaskViewController", ["$scope", "taskListManager", 
	function($scope, taskListManager) {

		this.getCurTask = function() {
			return taskListManager.curTask;
		};

    this.getPercentDone = function() {
      var task = taskListManager.curTask;
      return task.taskTimeLeft / task.taskDuration * 100;
    };

    this.isRunning = function() {
      return angular.isDefined(taskListManager.curTask.taskInterval);
    }
	}
]);