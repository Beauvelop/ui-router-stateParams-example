angular.module('routeApp')
  .controller('readerCtrl', function($scope, $stateParams) {
    $scope.test = $stateParams.id;
    $scope.msg = "Hi from the readerCtrl! 😘";

  })
