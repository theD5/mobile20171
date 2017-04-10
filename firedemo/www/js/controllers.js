angular.module('starter.controllers', ['firebase'])

.controller('DashCtrl', function($scope,$firebaseObject) {
   // $scope.demo - "Hello World";
    var ref = firebase.database().ref().child("CarId");

    $scope.data = $firebaseObject(ref);

    var ref = firebase.database().ref().child("message");
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope,"message");

  })

.controller('ChatsCtrl', function($scope, Chats, $firebaseArray) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    var ref = firebase.database().ref().child("people");
    $scope.people = $firebaseArray(ref);

    $scope.personMaster={firstName:"", age: ""};
    $scope.person={firstName:"", age: ""};


    $scope.addPerson = function(){
      $scope.people.$add(angular.copy($scope.person));
      $scope.person = angular.copy($scope.personMaster);

    }

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $firebaseObject) {
 // $scope.chat = Chats.get($stateParams.chatId);

    var ref = firebase.database().ref().child("people");
    $scope.person = $firebaseObject(ref.child($stateParams.chatId));

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});








