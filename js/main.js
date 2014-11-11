/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", ['$scope', 'DataService', function(b, c){
    b.mydata = c.data;
}]);

app.factory("DataService", ['AppendService', function(AppendService) {
    return {
        data: AppendService.append("This is service data")
    }
}]);

app.factory('AppendService', function(){
    return {
        append: function(val){
            return val + " and this too!"
        }
    }
})
/*
Service Types:
Constants
Values
Factories
Services
Providers
Decorators

*/
