/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope){
    $scope.num = 0;
    $scope.nums = [];

    $scope.increment = function(){
        $scope.num ++;
    };

    $scope.breakit = $scope.$watch('num', function(){
       $scope.nums.push($scope.num);
    });
});





