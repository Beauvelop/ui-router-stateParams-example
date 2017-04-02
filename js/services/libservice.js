'use strict';
angular.module('libApp')
  .factory('libservice', function() {
    console.log("in libservice");
    return {
      library: {
        name: "Code Library",
        date: new Date().getTime(),
        time: "10:00 am",
        location: {
          address: "DevMtn",
          city: "Provo",
          state: "UT"
        },
        imageURL: 'img/rubylogo.png',
      },
      lessons: [{
        name: "Access Control",
        description: "methods on an object",
        difficulty: 0,
        tag: "objects",
        tech: "ruby",
        techIcon: "img/rubyicon.png",
        abstract: "In this session you will learn Directives",
        upvoteCount: 0,
        snippet: "activity.public_methods.sort",
        triviaQ: "This code renders what?",
        answer: "All the methods available on the object 'activity'",
        addendum: "",
        isChecked: false
      }, {
        name: "Filters: JSON",
        description: "often used for debugging",
        difficulty: 2,
        tag: "JSON",
        tech: "angular",
        techIcon: "img/angularicon.png",
        abstract: "Today we'll learn how to talk2",
        upvoteCount: 0,
        snippet: '{"name":"Susan", "sign": "Leo", "description": { "eyes": "blue", "age": 38}}',
        triviaQ: "How to render this object unescaped to the html?",
        answer: ' {{ {"name":"Susan", "sign": "Leo", "description": { "eyes": "blue", "age": 38}} | json }}',
        addendum: "",
        isChecked: false
      }, {
        name: "Object Destructuring",
        description: "different approach to objects",
        difficulty: 3,
        tag: "ES6",
        tech: "javascript",
        techIcon: "img/es6icon.png",
        abstract: "This is an introductory course",
        upvoteCount: 0,
        snippet: "var user = {\n    \"name\": Leroy Jenkins,\n    \"age\": 38, \n    \"happy\": true\n};",
        triviaQ: "How would I log this object?",
        answer: "var {name, age, happy} = user;\n console.log({name})\n console.log({name, happy, age})",
        addendum: "",
        isChecked: false

      }]
    }

  }) //returning value

; //service END



/*  library: {
    name: "Code Library",
    date: function() {
      return new Date().getTime();
    },
    time: "10:00 am",
    location: {
      address: "DevMtn",
      city: "Provo",
      state: "UT"
    },
    imageURL: 'img/rubylogo.png',

    lessons: [{
      name: "Access Control",
      description: "methods on an object",
      difficulty: 0,
      tag: "objects",
      tech: "ruby",
      techIcon: "img/rubyicon.png",
      abstract: "In this session you will learn Directives",
      upvoteCount: 0,
      snippet: "activity.public_methods.sort",
      triviaQ: "This code renders what?",
      answer: "All the methods available on the object 'activity'",
      addendum: "",
      isChecked: false
    }, {
      name: "Filters: JSON",
      description: "often used for debugging",
      difficulty: 2,
      tag: "JSON",
      tech: "angular",
      techIcon: "img/angularicon.png",
      abstract: "Today we'll learn how to talk2",
      upvoteCount: 0,
      snippet: '{"name":"Susan", "sign": "Leo", "description": { "eyes": "blue", "age": 38}}',
      triviaQ: "How to render this object unescaped to the html?",
      answer: ' {{ {"name":"Susan", "sign": "Leo", "description": { "eyes": "blue", "age": 38}} | json }}',
      addendum: "",
      isChecked: false
    }, {
      name: "Object Destructuring",
      description: "different approach to objects",
      difficulty: 3,
      tag: "ES6",
      tech: "javascript",
      techIcon: "img/es6icon.png",
      abstract: "This is an introductory course",
      upvoteCount: 0,
      snippet: "var user = {\n    \"name\": Leroy Jenkins,\n    \"age\": 38, \n    \"happy\": true\n};",
      triviaQ: "How would I log this object?",
      answer: "var {name, age, happy} = user;\n console.log({name})\n console.log({name, happy, age})",
      addendum: "",
      isChecked: false

    }]
  }

})

*/
