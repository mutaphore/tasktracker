taskTrackerApp.controller("TaskRunController", ["$scope", "$interval", "taskListManager",
  function($scope, $interval, taskListManager) {
    var stop; 

    this.currentTaskSelected = function() {
      return !$.isEmptyObject(taskListManager.curTask) && taskListManager.taskList.length > 0;
    } 

    this.runCurTask = function() {
      var curTask = taskListManager.curTask;  
      var self = this;

      if (angular.isDefined(stop) || curTask.taskTimeLeft === 0) {
        return;
      }
      stop = $interval(function() {
        curTask.taskTimeLeft--;
        if (curTask.taskTimeLeft === 0) {
          self.stopCurTask();
        }
      }, 1000);
    };

    this.stopCurTask = function() {
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
      }
    };

    // this.runCurTask = function() {
    //   var curTask = taskListManager.curTask;  
    //   taskListManager.runTask(curTask.taskId);
    // }

    // this.stopCurTask = function() {
    //   var curTask = taskListManager.curTask;  
    //   taskListManager.stopTask(curTask.taskId);
    // }

    $scope.$on('$destroy', function() {
      // Make sure when we exit scope kill the interval
      $scope.stopCurTask();
    });
  }
]);