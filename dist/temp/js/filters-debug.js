"use strict";

/* Filters */
define("filters-debug", [], function(require) {
    angular.module("phonecatFilters", []).filter("checkmark", function() {
        return function(input) {
            return input ? "✓" : "✘";
        };
    });
});