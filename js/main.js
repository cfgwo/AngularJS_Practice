/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope){
    $scope.value = 1;
    $scope.even = false;

    $scope.inc = function(){
        $scope.value += 1;
        $scope.even = $scope.value % 2 == 0;
    };
});



