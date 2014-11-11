/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope, myFactory, myTest){
    console.log(myFactory.getData());
    myFactory.addData("Bla Bla Bla");
    console.log(myFactory.getData());

    console.log(myTest.getData());
    myTest.addData("Bla Bla Bla");
    console.log(myTest.getData());
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

app.provider("myTest", function(){
    var myString = "this is some data";
    var addToString = function (newStr) {
        myString += newStr
    }
    return {
        setData:function(data){
            myString = data
        },
        $get: function(){
            return {
                getData: function(){
                    return "String contains: " + myString;
                },
                addData: addToString
            }
        }
    }
})

app.config(function(myTestProvider){
    myTestProvider.setData('some different string from config')
});
/*
Service Types:
Constants
Values
Factories
Services
Providers
Decorators

*/
