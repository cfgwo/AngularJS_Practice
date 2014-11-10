/**
 * Created by eweng on 11/7/2014.
 */
var myApp = angular.module("myAppName", []);
myApp.factory('Data', function(){
   return  {message: "Hello from factory"};
})

myApp.controller('FirstCtrl', function($scope, Data) {
    $scope.data = Data;
});

myApp.controller('SecCtrl', function($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function(message){
        return message.split("").reverse().join("");
    }
});

