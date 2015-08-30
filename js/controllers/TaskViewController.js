taskTrackerApp.controller("TaskViewController", ["$scope", "taskListManager", 
	function($scope, taskListManager) {

		this.getCurTask = function() {
			return taskListManager.curTask;
		};
	}
]);