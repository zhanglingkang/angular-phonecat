"use strict";

define("animations-debug", [ "angular-animate-debug" ], function(require) {
    require("angular-animate-debug");
    var phonecatAnimations = angular.module("phonecatAnimations", [ "ngAnimate" ]);
    phonecatAnimations.animation(".phone", function() {
        var animateUp = function(element, className, done) {
            if (className != "active") {
                return;
            }
            element.css({
                position: "absolute",
                top: 500,
                left: 0,
                display: "block"
            });
            jQuery(element).animate({
                top: 0
            }, done);
            return function(cancel) {
                if (cancel) {
                    element.stop();
                }
            };
        };
        var animateDown = function(element, className, done) {
            if (className != "active") {
                return;
            }
            element.css({
                position: "absolute",
                left: 0,
                top: 0
            });
            jQuery(element).animate({
                top: -500
            }, done);
            return function(cancel) {
                if (cancel) {
                    element.stop();
                }
            };
        };
        return {
            addClass: animateUp,
            removeClass: animateDown
        };
    });
});

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

"use strict";

define("controllers-debug", [], function(require) {
    /* Controllers */
    var phonecatControllers = angular.module("phonecatControllers", []);
    phonecatControllers.controller("PhoneListCtrl", [ "$scope", "Phone", function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = "age";
    } ]);
    phonecatControllers.controller("PhoneDetailCtrl", [ "$scope", "$routeParams", "Phone", function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({
            phoneId: $routeParams.phoneId
        }, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    } ]);
});

"use strict";

/* Filters */
define("filters-debug", [], function(require) {
    angular.module("phonecatFilters", []).filter("checkmark", function() {
        return function(input) {
            return input ? "✓" : "✘";
        };
    });
});

"use strict";

/* Services */
define("services-debug", [ "angular-resource-debug" ], function(require) {
    require("angular-resource-debug");
    var phonecatServices = angular.module("phonecatServices", [ "ngResource" ]);
    phonecatServices.factory("Phone", [ "$resource", function($resource) {
        return $resource("phones/:phoneId.json", {}, {
            query: {
                method: "GET",
                params: {
                    phoneId: "phones"
                },
                isArray: true
            }
        });
    } ]);
});

/**
 * Created by zhanglingkang on 14-8-10.
 */
"use strict";

define("main-debug", [ "./app-debug", "angular-route-debug", "./animations-debug", "angular-animate-debug", "./controllers-debug", "./filters-debug", "./services-debug", "angular-resource-debug" ], function(require) {
    var app = require("./app-debug");
    angular.bootstrap(document, [ app.name ]);
});
