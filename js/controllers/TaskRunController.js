taskTrackerApp.controller("TaskRunController", ["$scope", "$interval", "taskListManager",
  function($scope, $interval, taskListManager) {

    this.currentTaskSelected = function() {
      return !$.isEmptyObject(taskListManager.curTask) && taskListManager.taskList.length > 0;
    };

    this.runCurTask = function() {
      taskListManager.runTask(taskListManager.curTask.taskId);
    };

    this.stopCurTask = function() {
      taskListManager.stopTask(taskListManager.curTask.taskId);
    };

    this.isRunning = function() {
      return angular.isDefined(taskListManager.curTask.taskInterval);
    }

    $scope.$on('$destroy', function() {
      // Make sure when we exit scope kill the interval
      this.stopCurTask();
    });
  }
]);