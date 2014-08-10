'use strict';

/* App Module */
define(function (require, exports, module) {
    require("angular-route");
    require("./animations");
    require("./controllers");
    require("./filters");
    require("./services");


    var phonecatApp = angular.module('phonecatApp', [
        'ngRoute',
        'phonecatAnimations',
        'phonecatControllers',
        'phonecatFilters',
        'phonecatServices'
    ]);

    phonecatApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/phones', {
                    templateUrl: 'partials/phone-list.html',
                    controller: 'PhoneListCtrl'
                }).
                when('/phones/:phoneId', {
                    templateUrl: 'partials/phone-detail.html',
                    controller: 'PhoneDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/phones'
                });
        }]);
    return phonecatApp;

});

