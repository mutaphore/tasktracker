taskTrackerApp.controller("TaskListController", ["$scope", "taskListManager", 
  function($scope, taskListManager) {

    $scope.tasks = taskListManager.taskList;

    $scope.getTasks = function() {
      return taskListManager.taskList;
    }

    $scope.removeTask = function(id) {
      taskListManager.removeTask(id);
    };

    $scope.selectTask = function(id) {
      taskListManager.setCurTask(id);
    };

    $scope.isSelected = function(id) {
      return taskListManager.curTask.taskId === id;
    };

    $scope.getPercentDone = function(task) {
      return task.taskTimeLeft / task.taskDuration * 100;
    };

    $scope.isRunning = function(task) {
      return angular.isDefined(task.taskInterval);
    }
  }
]);