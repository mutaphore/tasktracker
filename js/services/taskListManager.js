taskTrackerApp.factory("taskListManager", "$interval", function($interval) {
  var idCounter = 0;
  var stop;
  var manager = {
    taskList: [],
    curTask: {}
  }

  manager.addTask = function(taskName, taskDuration) {
    var newTask = {
      taskId: idCounter,
      taskName: taskName,
      taskDuration: taskDuration,
      taskTimeLeft: taskDuration,
      taskInterval: undefined
    };
    manager.taskList.push(newTask);
    idCounter++;
  }

  manager.removeTask = function(taskId) {
    for (var i = 0; i < manager.taskList.length; i++) {
      if (manager.taskList[i].taskId === taskId) {
        manager.taskList.splice(i, 1);
        // Reset curTask if taskList is empty
        if (manager.taskList.length === 0) {
          manager.curTask = {};
        } else {
          manager.setCurTask(manager.taskList[0].taskId);
        }
        return;
      }
    }
  }

  manager.setCurTask = function(taskId) {
    for (var i = 0; i < manager.taskList.length; i++) {
      if (manager.taskList[i].taskId === taskId) {
        manager.curTask = manager.taskList[i];
        return;
      }
    } 
  };

  manager.runTask = function(taskId) {
    var found = $.grep(manager.taskList, function(obj) { return obj.taskId === taskId; });
    if (found.length === 1) {
      var task = found[0];
      if (!angular.isDefined(task.taskInterval) && task.taskTimeLeft > 0) {
        task.taskInterval = $interval(function() {
          task.taskTimeLeft--;
          if (task.taskTimeLeft === 0) {
            manager.stopTask(task.taskId);
          }
        }, 1000);
      }
    }
  };

  manager.stopTask = function(taskId) {
    var found = $.grep(manager.taskList, function(obj) { return obj.taskId === taskId; });
    if (found.length === 1) {
      var task = found[0];
      if (angular.isDefined(task.taskInterval)) {
        $interval.cancel(task.taskInterval);
        task.taskInterval = undefined;
      }
    }
  };

  return manager;
});