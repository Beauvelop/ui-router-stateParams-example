'use strict';
angular.module("libApp")
  .filter('difficultyFilter', function() {
    console.log("in the filter");
    return function(difficulty) {
      switch (difficulty) {
        case 0:
          return "easy";
        case 1:
          return "moderate";
        case 2:
          return "hard";
        case 3:
          return "impossible";
          break;
        default:
          "error"

      }
    }
  })
