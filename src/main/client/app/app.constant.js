(function (angular) {
    'use strict';

    angular.module('gameExecutionServerApp.constants', [])
        .constant('appConfig', {userRoles: ['guest', 'user', 'admin']});
})(angular);
