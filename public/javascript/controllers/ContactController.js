(function() {
	'use strict';
	angular.module('app')
	.controller('ContactController', ContactController);

	ContactController.$inject = ['$state', 'HomeFactory', '$timeout'];

	function ContactController($state, HomeFactory, $timeout) {
		var vm = this;
		vm.mail = {};
		vm.thankYou = false;

		vm.sendMail = function(submit) {
			vm.mail = {
				email: submit.email,
				sender: submit.sender,
				message: submit.message
			};
			vm.thankYou = true;
			HomeFactory.sendMail(vm.mail).then(function(res) {
				delete vm.mail;
				vm.mail = {};
				$timeout(function() { $state.go('Home') },3000);
			});
		};

	}
})();