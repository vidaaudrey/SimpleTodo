'use strict';

/**
 * @ngdoc overview
 * @name doitApp
 * @description
 * # doitApp
 *
 * Main module of the application.
 */
angular
  .module('doitApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch', 
    'ngMessage', 
    'ui.sortable', 
    'LocalStorageModule'
  ])
  // add the localstorage prefix so the app doesn't accidently read todos from another app using the same variable names 
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]) 
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
