(function() {
	'use strict';
	angular.module('app')
	.controller('NavController', NavController);

	NavController.$inject = ['$timeout'];

	function NavController($timeout) {
		var vm = this;
		vm.title = 'Welcome to our App!';
		vm.menu = false;
		
		vm.openMenu = function() {
			if(vm.menu) {
				$timeout(function() {
					vm.menu = false;
					console.log(vm.menu);
				}, 10);
			}
			else {
				vm.menu = true
			}
			console.log('test')
		};
	}
})();