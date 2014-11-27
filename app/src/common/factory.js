'use strict';

angular.module('ngUps', []).factory('MyFactory', [function() {

	console.log('init factory');

    return {
    	doSomething: function(){
    		alert('toto');
    	}
    };

}]);