(function() {
    'use strict';

	angular
		.module('spa')
		.controller('LogoutCtrl',LogoutCtrl);

	LogoutCtrl.$inject = ['$scope','$state'];	

	function LogoutCtrl($scope,$state){

		$scope.logout = logout;

		function logout(){
			user_data = {};
			$state.go('/');
		};
		
	}

})();