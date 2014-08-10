/**
 * Created by zhanglingkang on 14-8-10.
 */
"use strict";

define("main", [ "./app", "angular-route", "./animations", "angular-animate", "./controllers", "./filters", "./services", "angular-resource" ], function(require) {
    var app = require("./app");
    angular.bootstrap(document, [ app.name ]);
});