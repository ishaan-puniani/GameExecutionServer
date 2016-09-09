'use strict';

angular.module('gameExecutionServerApp.auth', [
    'gameExecutionServerApp.constants',
    'gameExecutionServerApp.util',
    'ngCookies',
    'ui.router'
])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
