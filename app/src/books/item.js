'use strict';

angular.module('angularBootstrap').controller('BookCtrl', 
	['$scope', '$routeParams', 'Book', 'MyService', 'MyFactory', 
	function ($scope, $routeParams, Book, MyService, MyFactory) {
	MyService.doSomething();
	MyFactory.doSomething();

    $scope.book = Book.get({id: $routeParams.bookId});

    $scope.delete = function(book){
        book.$delete().then(function(){
            alert('resource deleted!');
        });
    };

}]);