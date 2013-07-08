/*
 Project script
*/


var app = angular.module('app', ['ngResource']);

app.run(function ($rootScope) {

    $rootScope.project_name = 'PodcastHub';

});


app.factory('store', function($resource) {
    return {
        'podcasts': $resource(
            '/store/podcasts.json',
            {},
            { query: { method:'GET', isArray: false } }
        )
    };
});


app.controller('PodcastsCtrl', function ($scope, store) {

    $scope.podcasts = store.podcasts.query();

});

app.directive('bsHolder', function() {
    return {
        link: function (scope, element, attrs) {
            Holder.run();
        }
    };
});