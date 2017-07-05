var myPhotos = angular.module('myPhotos', []);
//var userDataOp = angular.module('userDataOp', []);

myPhotos.factory('userDataOp', function($http, $q){
    var root = 'http://jsonplaceholder.typicode.com';
    var deferred = $q.defer();
    $http.get(root+ '/users').then(function(data){
        "use strict";
        deferred.resolve(data);
    });
    return{
        getUsers: function() {
            "use strict";
            console.log("You clicked me");
            return deferred.promise;

        }
    };
});