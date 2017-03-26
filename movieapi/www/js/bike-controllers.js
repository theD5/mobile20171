/**
 * Created by Daniel on 20/03/2017.
 */
angular.module('bike.controllers', [])

  .controller('BikesCtrl', function($scope, BikeService) {

    $scope.bikes = BikeService.load();
  })

//  .controller('MovieDetailCtrl', function($scope, $stateParams, MovieService) {
 //   $scope.movie = MovieService.get($stateParams.movieId);
 // })
