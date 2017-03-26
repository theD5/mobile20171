/**
 * Created by Daniel on 20/03/2017.
 */
angular.module('books.controllers', [])
.controller('BooksCtrl', function($scope, Books) {
  $scope.books=Books.all();
})
  .controller('BooksDetailCtrl', function($scope, $stateParams, Books) {

    $scope.books=Books.all();
    $scope.book = $scope.books[$stateParams.bookId];
  });
