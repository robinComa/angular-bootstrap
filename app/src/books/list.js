'use strict';

angular.module('angularBootstrap').controller('BookListCtrl', ['$scope', 'Book', function ($scope, Book) {

    $scope.books = Book.query();

    $scope.newbook = new Book();

    $scope.submitNewBook = function(){
    	if(this.myForm.$valid){
			$scope.newbook.$save().then(function(id){
				console.log(id)
			});   	
    	}
    };

}]);