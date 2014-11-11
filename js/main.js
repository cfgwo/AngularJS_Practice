/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope, myFactory){
    console.log(myFactory.getData());
    myFactory.reverse();
    console.log(myFactory.getData());
});

app.factory("myFactory", function() {
    // Private function
    var myString = "this is some data";
    var addToString = function (newStr) {
        myString += newStr
    }
    return {
        getData: function(){ return myString},
        setData: function(data) {myString = data},
        addData: addToString
    }
});

app.config(function($provide){
    $provide.decorator('myFactory', function($delegate){
        $delegate.reverse = function(){
            $delegate.setData($delegate.getData()
                     .split('').reverse().join(''))
        }
        return $delegate
    })
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
