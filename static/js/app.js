var app = angular.module('mesa', ['ngResource']);

app.config(['$httpProvider', '$resourceProvider',
function($httpProvider, $resourceProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.factory('Status', function($resource) {
    return $resource('/api/statuses/:id/');
});

app.controller('MesaController', ['$scope', '$resource', 'Status',
function($scope, $resource, Status) {
    $scope.getPosts = function() {
        Status.query(function(statuses) {
            $scope.statuses = statuses;
        });
    };
    $scope.getPosts();

    $scope.newPost = function() {
        var post = new Status();
        post.text = 'Hey hey, this is some posting.';
        post.$save().then(function() {
            $scope.getPosts();
        });
    };

    $scope.deletePost = function() {
        console.log("deleted");
    };
}]);
