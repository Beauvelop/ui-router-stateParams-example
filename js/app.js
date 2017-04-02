angular.module('libApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/home') //this is four redirection to 'home'
      // $urlRouterProvider.otherwise('/home')
      //if user goes to invalid route.. you get redirected to another page

    $stateProvider
      .state('home', {
        controller: 'homeCtrl',
        url: '/home',
        templateUrl: './states/home/home.html'
      })
      .state('library', {
        controller: 'libcontroller', //REVIEW: This seems to call the controller twice! both from index.html & from here.
        url: '/library',
        templateUrl: './states/library/lib.html'
      })

    // .state('about', {
    //   controller: 'aboutCtrl',
    //   url: '/about',
    //   templateUrl: './states/about/about.html'
    // })

    // .state('reader', {
    //   controller: 'readerCtrl',
    //   url: '/reader/:id', //NB:parameter
    //   templateUrl: './states/reader/reader.html'
    // })


  });
/*
add /:id --
This will take a parameter in the reader state and store that parameter in the value 'id'

Then, go to that state's controller and set
$scope.test = $stateparams.id;
*/
