'use strict';
angular.module('libApp')
  .controller('libcontroller', function($scope, libservice) {
    console.log("in the libcontroller");
    $scope.sortOrder = "isHidden"; //default display of sortOrder
    $scope.hideit = true;

    $scope.checkIt = function(lesson) {
      lesson.isChecked = true;
      console.log(lesson.name);
      console.table($scope.library.lessons);
    }
    $scope.upvotesnippet = function(lesson) {
      lesson.upvoteCount++;
    }
    $scope.downvotesnippet = function(lesson) {
      lesson.upvoteCount--;
    }
    $scope.curious = false; //for ng-show/hide toggle
    $scope.horizRule = '<p>-------</p>'; //for placeholder using ng-bind-html
    $scope.myBtnStyle = {
      color: "navy",
      minWidth: "40px",
      minHeight: "40px",
      backgroundColor: "#af9768",
      opacity: ".1"
    };
    $scope.library = libservice.library;
    console.table($scope.library.lessons);


  });
/*
'use strict';
angular.module('libApp')
  // libService
  .controller('libcontroller', function($scope) {
    $scope.libtest = "Lib is working!";

    /*_______________________________________*/
