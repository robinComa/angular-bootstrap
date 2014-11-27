'use strict';

angular.module('angularBootstrap').controller('BookListCtrl',
	['$scope', 'Book', 'MyService', 'MyFactory', 'myAsyncValue', '$filter', '$q',
	function ($scope, Book, MyService, MyFactory, myAsyncValue, $filter, $q) {

		//MyService.doSomething();
		//MyFactory.doSomething();

		console.log(myAsyncValue)

    $scope.books = Book.query();

    setTimeout(function(){
    	console.log($filter('date')($scope.books[0].date, 'yy : mm'))
    }, 1000);

    $scope.newbook = new Book();

    $scope.submitNewBook = function(){
		$scope.books[0] = $scope.newbook;
    	if(this.myForm.$valid){
			$scope.newbook.$save().then(function(id){
				console.log(id);
			});   	
    	}
    };

    $scope.updateBook = function(book){
    	$scope.newbook = angular.copy(book);
    }

    var asyncFn = function(){
    	var deferred = $q.defer();
        setTimeout(function(){
        		deferred.notify('0%');
        }, 500);
        setTimeout(function(){
        	$scope.$apply(function(){
            	deferred.resolve(8);
	        });
        }, 1000);
        return deferred.promise;
    };

    var promise = asyncFn();

    promise.then(function(res){
    	console.log(res)
    }, function(err){
    	console.log(err)
    }, function(notification){
    	console.log(notification)
    });

    setTimeout(function(){
    	$scope.searchModel = 'test'
;    }, 100)

                $scope.book2 = {
                title: "iojiojio"
            };
}]);