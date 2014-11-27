'use strict';

angular.module('ngUps').directive('upsBook', [function() {

    return {
    	restrict: 'EA',
    	transclude: true,
    	require: 'ngModel',
    	templateUrl: 'src/books/item.html',
    	scope : {
    		book: '=data'
    	},
    	controller: function($scope){
    		$scope.delete = function(book){
    			console.log(book)
    		};
    	}
    };

}]);