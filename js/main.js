/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope){
    $scope.myarr = [1, 2, 3, 4, 5];

    $scope.users = [{name:"ellen", age:28},{name:"paul", age:28}];

    $scope.ob = {name: "mike", age:35, title:"Mr."};
});



