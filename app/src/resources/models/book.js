'use strict';

angular.module('angularBootstrap').service('Book', ['$resource',function($resource) {

    return $resource('rest-api/books/:id', {id:'@id'});

}]);