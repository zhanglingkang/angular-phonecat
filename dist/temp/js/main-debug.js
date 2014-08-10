/**
 * Created by zhanglingkang on 14-8-10.
 */
"use strict";

define("main-debug", [ "./app-debug", "angular-route-debug", "./animations-debug", "angular-animate-debug", "./controllers-debug", "./filters-debug", "./services-debug", "angular-resource-debug" ], function(require) {
    var app = require("./app-debug");
    angular.bootstrap(document, [ app.name ]);
});