/**
 * Created by eweng on 11/7/2014.
 */

var app = angular.module("app", []);

// [ METHOD : 2 ] - DEVELOPMENT
app.controller("MainController", function($scope, myFactory, Auth){
    console.log(myFactory.getdata());
    console.log(myFactory.mydata);
});

app.factory("myFactory", function(){
    // Private function
    var mydata  = "this is some data";
    var myfunct = function(){};
    return {
        getdata: function(){
            return mydata;
        }
    }
});

app.factory("Auth", function(){
    var current_user = {};
    return {
        setUser : function(){},
        login   : function(){},
        logout  : function(){}
    }
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
