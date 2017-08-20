var app = angular.module('testApp', []);


app.controller('testController', ['$scope', '$http', '$timeout', '$location', '$window', function ($scope, $http, $timeout, $location, $window) {
    // $http({
    //     method: 'GET',
    //     url: 'http://blog.williampring.com/feed.json'
    // }).then(function successCallback(response) {
    //     $scope.blogs = response;
    //     console.log($scope.blogs)
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    // });

     $http.get('https://williampring.github.io/Blog/feed.json')
    .then(function(response) {
        $scope.blogs = response.data;
        console.log($scope.blogs);
    })
    .catch(function(err) {

    });

    $scope.onRedirect = function() {
        $window.location.href = $scope.blogs.link;
    };
  
}]);
