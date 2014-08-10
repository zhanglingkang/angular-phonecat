"use strict";

/* Services */
define("services", [ "angular-resource" ], function(require) {
    require("angular-resource");
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