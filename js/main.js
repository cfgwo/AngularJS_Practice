/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope, $filter){
    $scope.mydata = {arr: [{name:"jane", age:33}, {name:"jake", age:33},{name:"steven", age:49}, {name:"hank", age:44}]}
    // you can also use filter in the console
    console.log($filter('uppercase')('make this string uppercase!'));
});





