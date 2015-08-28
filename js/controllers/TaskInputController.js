taskTrackerApp.controller("TaskInputController", ["$scope", "taskListManager", 
	function($scope, taskListManager) {
		$scope.taskName = "My task";
		$scope.taskDuration = 15;
		$scope.addTask = function(name, duration) {
			taskListManager.addTask(name, duration);
		};
  }
]);