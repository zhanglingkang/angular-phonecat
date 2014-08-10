"use strict";

/* Filters */
define("filters", [], function(require) {
    angular.module("phonecatFilters", []).filter("checkmark", function() {
        return function(input) {
            return input ? "✓" : "✘";
        };
    });
});