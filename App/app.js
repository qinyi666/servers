/**
 * Created by 橘子到底酸不酸 on 2017/10/19.
 */
var app = angular.module("app", ["ui.router"]);


app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('car', {
        url: "/car",
        templateUrl: "App/Views/cars.html",
        controller: "carController"
    });
    $stateProvider.state('bar', {
            url: "/bar",
            templateUrl: "App/Views/bars.html",
            controller: "barController"
        });
    $urlRouterProvider.otherwise("/car");
});