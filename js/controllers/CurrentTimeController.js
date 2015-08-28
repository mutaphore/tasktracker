taskTrackerApp.controller('CurrentTimeController', ['$scope', '$interval', 
  function($scope, $interval) {
    $scope.curTime = Date.now();

    var stop = $interval(function() {
      $scope.curTime = Date.now();
    }, 1000);

    $scope.$on('$destroy', function() {
      // Make sure when we exit scope kill the interval
      $interval.cancel(stop);
      stop = undefined;
    });
  }
]);