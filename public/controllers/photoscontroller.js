var myPhotos = angular.module('myPhotos');



myPhotos.controller('photosCtrl', function($scope, photoData){
    "use strict";
    var promise = photoData.getPhotos();

    promise.then(function (data) {
        $scope.photos = data.data;


        console.log($scope.photos);
    });

});
