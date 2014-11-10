/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 1 ]
//var MainController = function($scope){
//    $scope.val = "test123";
//};

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope){
    $scope.value = "test123";
});

// [ METHOD : 3] - PRODUCTION
//angular.module("controllers", []).controller("MainController", function($scope){
//    $scope.value = "test123";
//});