'use strict';

angular.module('angularBootstrap').controller('BookCtrl', ['$scope', '$routeParams', 'Book', function ($scope, $routeParams, Book) {

    $scope.book = Book.get({id: $routeParams.bookId});

    $scope.delete = function(book){
        book.$delete().then(function(){
            alert('resource deleted!');
        });
    };

}]);