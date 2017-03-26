/**
 * Created by Daniel on 20/03/2017.
 */
app.factory('MovieService', function ($q, $http) {

  var movieListings = [];


  return {

    all: function () {

      return movieListings;

    },

    get: function (id) {
      var movieItem;

      for (var i = 0; i < movieListings.length; i++) {

        // console.log("Comparing against ",id, movieListings[i]);

        if (movieListings[i].id == id) {

          movieItem = movieListings[i];
          break;

        }
      }

      return movieItem;


    },

    load: function () {
      //Set up angular promiseand defer
      var deferred = $q.defer();

      var serviceUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=";
      var key = "40b1737b334731260976ee0db9de4f08";


      $http.get(serviceUrl + key, {}).success(function (data) {


        console.log("loading", serviceUrl + key, data);

        angular.forEach(data.results, function (movieItem) {

          //console.log(movieItem)

          movieListings.push(movieItem);


        });

        //resolve the deferred promise so data is ultimately sent back to caller
        deferred.resolve();

      }).error(function () {

        alert('there was an error');

      });


      return movieListings;

    }


  }
});
