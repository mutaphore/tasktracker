taskTrackerApp.controller("TaskInputController", ["$scope", "taskListManager", 
	function($scope, taskListManager) {

		$scope.taskName = "My task ";
		// $scope.taskDurationSec = 10;
		// $scope.taskDurationMin = 0;

		$scope.addTask = function() {
      if ($scope.taskNameForm.$valid && $scope.taskDurationForm.$valid) {
        console.log($scope.taskDurationSec);
  			var sec = ($scope.taskDurationMin || 0) * 60 + ($scope.taskDurationSec || 0);
  			taskListManager.addTask($scope.taskName, sec);
      }
		};

    $scope.clearTasks = function() {
      taskListManager.clearTasks();
    }
  }
]);