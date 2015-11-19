(function() {
	'use strict';
	angular.module('app')
	.controller('ContactController', ContactController);

	ContactController.$inject = ['$state', 'HomeFactory'];

	function ContactController($state, HomeFactory) {
		var vm = this;
		vm.mail = {};
		
		vm.sendMail = function(submit) {
			vm.mail = {
				email: submit.email,
				sender: submit.sender,
				message: submit.message
			};
			HomeFactory.sendMail(vm.mail).then(function(res) {
				delete vm.mail;
				vm.mail = {};
				$state.go('Home')
			}) ;
		} ;

	}
})();