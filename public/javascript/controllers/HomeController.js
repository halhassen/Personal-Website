(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["$window"];

	function HomeController($window) {
		var vm = this;
		
		//Skills
		vm.codingSkills = [ 
		{name: 'JavaScript', level: '8'},
		{name: 'HTML5', level: '8'},
		{name: 'CSS3', level: '8'},
		{name: 'Bootstrap', level: '7'},
		{name: 'AngularJS', level: '7'},
		{name: 'jQuery', level: '6'},
		{name: 'MongoDB', level: '6'},
		{name: 'ExpressJS', level: '6'},
		{name: 'NodeJS', level: '6'},
		{name: 'JSON', level: '6'}
		];

		vm.tools = [
		{name: 'Node Package Manager', level: '8'},
		{name: 'Bower', level: '8'},
		{name: 'Photoshop', level: '7'},
		{name: 'Gulp', level: '7'},
		{name: 'Google Analytics', level: '6'},
		{name: 'Google AdWords', level: '6'},
		{name: 'SPSS', level: '5'},
		{name: 'Statistix', level: '5'}
		];

		vm.otherSkills = [
		{name: 'Agile Software Development', level: '8'},
		{name: 'Git Workflow', level: '7'},
		{name: 'Market Research', level: '7'},
		{name: 'Wireframing', level: '7'},
		{name: 'Marketing', level: '6'},
		{name: 'Social Media', level: '5'}
		];

		vm.passions = [
		{name: 'Puns. Lots of puns.', level: '10'},
		{name: 'Basketball', level: '9'},
		{name: 'Music', level: '8'},
		{name: 'Games', level: '7'},
		{name: 'TV Shows', level: '6'},
		{name: 'Fitness', level: '6'},
		{name: 'Cooking', level: '5'}
		];

		//Portfolio Screen

		vm.portfolio = [
		{
			url: 'http://www.leagueforce.us/#/',
			project: "League Force", 
			image: 'http://res.cloudinary.com/halhassen/image/upload/c_scale,h_210,w_373,z_2.4/v1447791925/Screen_Shot_2015-11-17_at_12.23.20_PM_j2usgx.png',
			description: "I was the front-end lead for a group of two other developers for Coder Camp's final project. Web app that allows users to create sports leagues, add teams, post newsletters, and schedule matches.",
			build: "The MEAN Stack, Mongoose, Passport.js, Google Maps API, Google Auth API, FaceBook Auth API, Cloudinary API, HTML5, CSS3, and Bootstrap."
		}
		];

		vm.portfolioMobile = [
		{
			url: 'http://www.leagueforce.us/#/',
			project: "League Force", 
			image: 'http://res.cloudinary.com/josemedina760/image/upload/c_scale,h_50,w_50/v1444790611/force_logo_svh4rp.png',
			description: "I was the group's front-end lead for Coder Camp's final project. Web app that allows users to create sports leagues, add teams, post newsletters, and schedule matches.",
			build: "The MEAN Stack, Mongoose, Passport.js, Google Maps API, Google Auth API, FaceBook Auth API, Cloudinary API, HTML5, CSS3, and Bootstrap."
		}
		];

	}
})();