/*
 Project script
*/


var app = angular.module('app', ['ngResource', 'customFilters']);

app.run(function ($rootScope) {

    $rootScope.project_name = 'PodcastHub';

});


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            'templateUrl': 'templates/podcasts.html',
            'controller': 'PodcastsCtrl'
        })
        .when('/podcast/:slug', {
            'templateUrl': 'templates/podcast.html',
            'controller': 'PodcastCtrl'
        });

});

app.factory('store', function($resource) {
    return {
        'podcasts': $resource(
            '/store/podcasts.json',
            {},
            { query: { method:'GET', isArray: false } }
        ),
        'podcast': $resource(
            '/store/podcast.json',
            {},
            { query: { method:'GET', isArray: false } }
        )
    };
});

angular.module('customFilters', []).
    filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }

        };
    });

app.controller('PodcastsCtrl', function ($scope, store) {

    $scope.podcasts = store.podcasts.query();

});

app.controller('PodcastCtrl', function ($scope, store) {

    $scope.podcast = store.podcast.query();

});

app.directive('podcasts', function() {
    return {
        'restrict': 'E', // E | C | A
        'scope': {
            'podcasts': '=' // @ | = | &
        },
        templateUrl: 'templates/podcasts.html'
    };
});

app.directive('podcast', function() {
    return {
        'restrict': 'E',
        'scope': {
            'podcast': '@'
        },
        templateUrl: 'podcast.html'
    };
});

app.directive('bsHolder', function() {
    return {
        link: function (scope, element, attrs) {
            Holder.run();
        }
    };
});