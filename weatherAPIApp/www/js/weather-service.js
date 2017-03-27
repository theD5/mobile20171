
app.factory('WeatherService', function ($q, $http) {
  var weatherListings = [];


  return {

    all: function () {

      return weatherListings;

    },

    get: function (id) {
      var weatherItem;

      for (var i = 0; i < weatherListings.length; i++) {

        // console.log("Comparing against ",id, movieListings[i]);

        if (weatherListings[i].id == id) {

          weatherItem = weatherListings[i];
          break;

        }
      }

      return weatherItem;


    },

    load: function () {
      //Set up angular promiseand defer
      var deferred = $q.defer();

      //var serviceUrl = "api.openweathermap.org/data/2.5/weather?id=2172797&appid=043ca12505a5e56d8e02d171adc2f697";
      var serviceUrl ="https;//api.openweathermap.org/data/2.5/weather?q=London,uk&appid=043ca12505a5e56d8e02d171adc2f697";

      $http.get(serviceUrl, {}).success(function (data) {


        console.log("loading", serviceUrl , data);

        angular.forEach(data.results, function (weatherItem) {

          //console.log(movieItem)

          weatherListings.push(weatherItem);


        });

        //resolve the deferred promise so data is ultimately sent back to caller
        deferred.resolve();

      }).error(function () {

        alert('there was an error');

      });


      return weatherListings;

    }


  }
});

