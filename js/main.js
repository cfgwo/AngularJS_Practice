/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope){
    $scope.mydata = {val: "jake"};

    $scope.$watch('mydata.val', function(newval){
        $scope.mydata.toolong = newval.length > 15;
        console.log('Hi');
    });
});





