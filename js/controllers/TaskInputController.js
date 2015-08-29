taskTrackerApp.controller("TaskInputController", ["$scope", "taskListManager", 
	function($scope, taskListManager) {

		$scope.taskName = "My task";
		$scope.taskDurationSec = 10;
		$scope.taskDurationMin = 0;

		$scope.addTask = function() {
			var seconds = $scope.taskDurationMin * 60 + $scope.taskDurationSec;	
			taskListManager.addTask($scope.taskName, seconds);
		};

    $scope.clearTasks = function() {
      taskListManager.clearTasks();
    }
  }
]);