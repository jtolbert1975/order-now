var myPhotos = angular.module('myPhotos');

myPhotos.controller('albumCtrl', function ($scope, albumData) {

    var promise = albumData.getAlbums();

    promise.then(function (data) {
        $scope.albums = data.data;


        console.log($scope.albums);
    });
});