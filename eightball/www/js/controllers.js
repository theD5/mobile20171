angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$timeout, Predictions, Movies) {

    $scope.predictions=Predictions.all();
    $scope.yourPrediction="?";

    $scope.makePrediction= function(){
      //alert("predicting");
      //$scope.answered = false;
      $scope.yourPrediction = "Asking the oracle";
      $timeout( function() {
        var randomNumberGenerated = Math.random() * $scope.predictions.length;
        var randomNumber = Math.floor(randomNumberGenerated);
        $scope.yourPrediction = $scope.predictions[randomNumber];

      },2000)
    }

    $scope.movies=Movies.all();

  })
  .controller('DashDetailCtrl', function($scope, $stateParams, Movies) {

    $scope.movies=Movies.all();
    $scope.movie = $scope.movies[$stateParams.movieId];
  })

/**
  .controller('BooksCtrl', function($scope, Books) {
    $scope.books=Books.all();
  })
  .controller('BooksDetailCtrl', function($scope, $stateParams, Books) {

    $scope.books=Books.all();
    $scope.book = $scope.books[$stateParams.bookId];
  })
*/
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
