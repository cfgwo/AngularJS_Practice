/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope, constService, valService){
    console.log(constService.attr, valService());
});


app.constant('twitterAPI', {url: "api.twitter.com/v1/"});
app.constant('constService', {attr: "this is const data!"});

app.value('valService', function(){ return "this is the returned from a fn";});


/*
Service Types:
Constants
Values
Factories
Services
Providers
Decorators

*/
