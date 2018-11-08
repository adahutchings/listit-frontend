var app = angular.module("ListIt", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .otherwise({
        redirectTo:'/'
    })
})