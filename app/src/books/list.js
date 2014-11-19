'use strict';

angular.module('angularBootstrap').controller('BookListCtrl', ['$scope', 'Book', function ($scope, Book) {

    $scope.books = Book.query();

}]);