
var myPhotos = angular.module('myPhotos', []);

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
                return deferred.promise;

            }
        };
    });

myPhotos.factory('photoData', function($http, $q){
    "use strict";
    var root = 'http://jsonplaceholder.typicode.com';
    var deferred = $q.defer();
    $http.get(root+ '/photos').then(function(data){
        "use strict";
        deferred.resolve(data);
    });
    return{
        getPhotos: function() {
            "use strict";
            console.log(deferred.promise);
            return deferred.promise;

        }
    };

});

myPhotos.factory('albumData', function($http, $q){
    "use strict";
    var root = 'http://jsonplaceholder.typicode.com';
    var deferred = $q.defer();
    $http.get(root+ '/albums').then(function(data){
        "use strict";
        deferred.resolve(data);
    });
    return{
        getAlbums: function() {
            "use strict";
            console.log(deferred.promise);
            return deferred.promise;

        }
    };

});



//Controllers
myPhotos.controller('usersCtrl', function ($scope, userDataOp) {

    var promise = userDataOp.getUsers();

    promise.then(function (data) {
        $scope.users = data.data;
        //console.log($scope.users);
  });

    $scope.showAlbum = function (id){
        "use strict";
        $scope.id = id;
        console.log("The id is:", $scope.id );

    };


});
