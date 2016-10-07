
// var app = angular.module("survey",[
// 	'ui.router',
// 	'survey.controllers'
// 	])
// .config(function($stateProvider){
// 	$stateProvider
// 	.state('main',{
// 		url: '/main',
// 		templateUrl: 'src/html/main.html',
// 		controller: 'MainController',
// 		controllerAs: 'vm'
// 	});
// })

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

(function(){
    angular.module("survey",
            [
                "ui.router"
            ])
        .config(function($urlRouterProvider,$stateProvider){
            $urlRouterProvider.otherwise(function($injector){
                var $state = $injector.get('$state');
            })
            $stateProvider.state('home', {
                url: '/home',
                templateURL: 'src/html/groups.component.html'
            })
        })
}());