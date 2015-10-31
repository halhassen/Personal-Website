(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		
		//Mail Routes is gitignored due to containing sensitive information
		o.sendMail = function(message) {
			var q = $q.defer();
			$http.post('/api/mail/send', message).success(function(res) {
				q.resolve();
			})		
			return q.promise;	
		}


		return o;
	}
})();