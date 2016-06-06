(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngBootbox', 'ngMaterial', 'ngScrollbar'])
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
		}).state('Skills', {
			url: '/skills',
			templateUrl: 'templates/skills.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('Portfolio', {
			url: '/portfolio',
			templateUrl: 'templates/portfolio.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		}).state('About', {
			url: '/about',
			templateUrl: 'templates/about.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
