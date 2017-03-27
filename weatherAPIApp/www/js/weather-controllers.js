angular.module('weather.controllers', [])

  .controller('WeatherCtrl', function($scope
    , WeatherService
  ) {

    $scope.weathers = WeatherService.load();
  });

