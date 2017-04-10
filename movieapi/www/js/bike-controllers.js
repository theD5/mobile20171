/**
 * Created by Daniel on 20/03/2017.
 */
angular.module('bike.controllers', [])

  .controller('BikesCtrl', function($scope, BikeService) {

    $scope.bikes = BikeService.load();
  })
  .controller('MapCtrl', function($scope, BikeService) {
    $scope.coords={latitude:53.353462, longitude: -6.265305};
    $scope.bikeStations = BikeService.load();
  })

  .controller('BikeDetailCtrl', function($scope, $stateParams, BikeService) {
    $scope.bike = BikeService.get($stateParams.bikeId);
  })
