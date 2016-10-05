(function(){
	angular.module("survey",['ui.router','survey.controllers'])
	.config(function($stateProvider){
		$stateProvider
		.state('main',{
			url: '/main',
			templateUrl: 'src/html/main.html',
			controller: 'maincontroller',
			controllerAs: 'vm'
		});
	})
}());