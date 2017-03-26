angular.module('movie.controllers', [])

  .controller('MoviesCtrl', function($scope, MovieService) {

    $scope.movies = MovieService.load();
  })

  .controller('MovieDetailCtrl', function($scope, $stateParams, MovieService) {
    $scope.movie = MovieService.get($stateParams.movieId);
  })
