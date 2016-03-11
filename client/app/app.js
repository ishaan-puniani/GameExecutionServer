'use strict';

angular.module('gameExecutionServerApp', [
  'gameExecutionServerApp.auth',
  'gameExecutionServerApp.admin',
  'gameExecutionServerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
