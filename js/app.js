'use strict';

const angular = require('angular');

// Other dependencies below
const ngRoute = require('angular-route');


const app = angular.module('wwtgApp', [ngRoute]);

require('./factories');
require('./controllers');

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "../partials/guide.html",
        controller: "GuideCtrl"
    })
    .otherwise("/");
});

// Put routes here

module.exports = app;