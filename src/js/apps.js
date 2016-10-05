(function(){
	angular.module("survey")
	.config(function($urlRouteProvider,$stateProvider){
		$stateProvider
		.state('main',{
			url: '/main',
			templateUrl: 'html/main.html',
			controller: 'maincontroller',
			controllerAs: 'vm'
		});

		$urlRouteProvider.otherwise('/landing');
	})
})