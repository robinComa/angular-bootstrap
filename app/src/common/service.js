'use strict';

angular.module('ngUps').service('MyService', [function() {

	console.log('init service');

    return {
    	doSomething: function(){
    		alert('toto');
    	}
    };

}]);