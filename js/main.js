/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope, myFactory, myService){
    console.log(myFactory.getData());
    myFactory.addData("Bla Bla Bla");
    console.log(myFactory.getData());

    console.log(myService.getData());
    myService.addData("Bla Bla Bla");
    console.log(myService.getData());
});

app.factory("myFactory", function() {
    // Private function
    var myString = "this is some data";
    var addToString = function (newStr) {
        myString += newStr
    }
    return {
        getData: function(){
            return "String contains: " + myString;
        },
        addData: addToString
    }
});

/*app.service('myService', function(){
    // Private function
    var myString = "this is some data";
    var addToString = function (newStr) {
        myString += newStr
    };

    this.getData = function(){
        return "String contains: " + myString;
    };
    this.addData = addToString;
});*/
// Coffee Script
app.service("myService", ServiceClass);


app.factory("myService", function(){
    return new ServiceClass();
});

function ServiceClass(){
    // Private function
    var myString = "this is some data";
    var addToString = function (newStr) {
        myString += newStr
    };

    this.getData = function(){
        return "String contains: " + myString;
    };
    this.addData = addToString;
}


/*
Service Types:
Constants
Values
Factories
Services
Providers
Decorators

*/
