/// <reference path="angular.min.js">

var app = angular.module("myApp",[]).controller("myController",function($scope,$http){
        /* 1 for ng-repeat*/
        var employees = [
            {firstname:"deep",
             lastname:"shah",
             address :[
                    {name:"add1"},
                    {name:"add2"}] 
            },
            {firstname:"samar",
             lastname:"patel",
             address :[
                 {name:"add1"},
                 {name:"add2"}] 
            },
            {firstname:"haresh",
             lastname:"shah",
             address :[
                 {name:"add1"},
                 {name:"add2"}]}
        ];
        $scope.employees = employees;
    
        /*2 Event handling*/
        var technologies = [
            {name:"c#", like:0,dislike:0},
            {name:"java", like:0,dislike:0},
            {name:"angularjs", like:0,dislike:0}
        ];
    
        $scope.technologies = technologies;
        
        $scope.incrementLike = function(tecnology){
            tecnology.like++;
        };
        
        $scope.incrementDislike = function(technology){
            technology.dislike++;
        };
    
        /*3 filter data for sorting formating and filter */
        var students = [
            {name:"deep",DOB:new Date("December, 21 ,1993"),gender:"male",salary:12000.200},
            {name:"haresh",DOB:new Date("May 21 ,1993"),gender:"male",salary:12000},
            {name:"viral",DOB:new Date("June 21 ,1993"),gender:"male",salary:57000},
            {name:"manoj",DOB:new Date("December 21 ,1993"),gender:"male",salary:53000},
            {name:"kc",DOB:new Date("December 21 ,1993"),gender:"male",salary:12000.200}
        ];
        $scope.students = students;
        $scope.rowlimit=3;
    
        /* 4 sorting 3 */
        $scope.sortCol = "name";
        $scope.reverseSort = false;
    
        $scope.getSortClass= function(column){
            if($scope.sortCol == column){
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
            return '';
            
        }
        $scope.getSortData = function(column){
            $scope.reverseSort = ($scope.sortCol == column ) ? ! $scope.reverseSort : false;
            $scope.sortCol = column;
        }
        
        
        /*11 angular webservices */
        $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});

var demo = angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});