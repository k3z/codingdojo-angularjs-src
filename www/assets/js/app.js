/*
 Project script
*/


var app = angular.module('app', []);

app.run(function ($rootScope) {

    $rootScope.project_name = 'PodcastHub';

});


app.controller('PodcastsCtrl', function ($scope, $rootScope) {

    $scope.project_name = $rootScope.project_name;

    $scope.podcasts = {
        "items": [
            {
                "label": "Geek Inc",
                "slug": "geek-inc",
                "audio": true,
                "video": true,
                "live": true,
                "episodes": 150,
                "stars": 5
            },
            {
                "label": "Positron",
                "slug": "positron",
                "audio": true,
                "video": false,
                "live": false,
                "episodes": 1,
                "stars": 5
            }
        ]
    }
});