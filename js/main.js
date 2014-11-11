/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope){
    $scope.classVar = ["orange", "italic"];
    $scope.enableOrange = false;
    $scope.enableItalic = true;

});



