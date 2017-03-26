/**
 * Created by Daniel on 20/03/2017.
 */
app.factory('BikeService', function ($q, $http) {

  var bikeListings = [];


  return {

    all: function () {

      return bikeListings;

    },

    get: function (id) {
      var bikeItem;

      for (var i = 0; i < bikeListings.length; i++) {

        // console.log("Comparing against ",id, movieListings[i]);

        if (bikeListings[i].id == id) {

          bikeItem = bikeListings[i];
          break;

        }
      }

      return bikeItem;


    },

    load: function () {
      //Set up angular promiseand defer
      var deferred = $q.defer();

      var serviceUrl = "https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=";
      var key = "68d3deea32362d40502ddc99bf1129fd5407070d";


      $http.get(serviceUrl + key, {}).success(function (data) {


        console.log("loading", serviceUrl + key, data);

        angular.forEach(data, function (bikeItem) {

          //console.log(movieItem)

          bikeListings.push(bikeItem);


        });

        //resolve the deferred promise so data is ultimately sent back to caller
        deferred.resolve();

      }).error(function () {

        alert('there was an error');

      });


      return bikeListings;

    }


  }
});
