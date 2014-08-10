"use strict";

/* App Module */
define("app-debug", [ "angular-route-debug", "./animations-debug", "angular-animate-debug", "./controllers-debug", "./filters-debug", "./services-debug", "angular-resource-debug" ], function(require, exports, module) {
    require("angular-route-debug");
    require("./animations-debug");
    require("./controllers-debug");
    require("./filters-debug");
    require("./services-debug");
    var phonecatApp = angular.module("phonecatApp", [ "ngRoute", "phonecatAnimations", "phonecatControllers", "phonecatFilters", "phonecatServices" ]);
    phonecatApp.config([ "$routeProvider", function($routeProvider) {
        $routeProvider.when("/phones", {
            templateUrl: "partials/phone-list.html",
            controller: "PhoneListCtrl"
        }).when("/phones/:phoneId", {
            templateUrl: "partials/phone-detail.html",
            controller: "PhoneDetailCtrl"
        }).otherwise({
            redirectTo: "/phones"
        });
    } ]);
    return phonecatApp;
});