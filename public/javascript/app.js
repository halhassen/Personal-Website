(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'templates/home.html'
		}).state('Contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'ContactController',
			controllerAs: 'vm'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
