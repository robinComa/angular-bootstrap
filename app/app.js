'use strict';

angular.module('angularBootstrap', [
    'ngMockE2E',
    'ngResource',
    'ngRoute',
    'ngUps'
]).config(['$routeProvider', function($routeProvider){

    $routeProvider.
        when('/books', {
            templateUrl: 'src/books/list.html',
            controller: 'BookListCtrl',
            resolve: {
                myAsyncValue: function($q){
                    var deferred = $q.defer();
                    setTimeout(function(){
                        deferred.resolve(8)
                    }, 1);
                    return deferred.promise;
                },
                myAsyncValue2: function($q){
                    var deferred = $q.defer();
                    setTimeout(function(){
                        deferred.resolve(8)
                    }, 1);
                    return deferred.promise;
                }
            }
        }).
        when('/books/:bookId', {
            templateUrl: 'src/books/item.html',
            controller: 'BookCtrl'
        }).
        otherwise({
            redirectTo: '/books'
        });

}]).run(['$httpBackend', '$resource', function($httpBackend, $resource){
    /** Mocked Resources */

    // Book
    $httpBackend.whenGET(/rest-api\/books$/).respond($resource('src/resources/stub/books/GET.json').query());
    $httpBackend.whenPOST(/rest-api\/books$/).respond($resource('src/resources/stub/books/POST.json').get());
    $httpBackend.whenDELETE(/rest-api\/books\/[0-9]*$/).respond(200);
    $httpBackend.whenGET(/rest-api\/books\/1$/).respond($resource('src/resources/stub/books/GET-1.json').get());
    $httpBackend.whenGET(/rest-api\/books\/2$/).respond($resource('src/resources/stub/books/GET-2.json').get());
    $httpBackend.whenGET(/rest-api\/books\/3$/).respond($resource('src/resources/stub/books/GET-3.json').get());

    $httpBackend.whenGET(/.*$/).passThrough();
    $httpBackend.whenPUT(/.*$/).passThrough();
    $httpBackend.whenPOST(/.*$/).passThrough();
    $httpBackend.whenDELETE(/.*$/).passThrough();
    /** END OF Mocked Resources */
}]);