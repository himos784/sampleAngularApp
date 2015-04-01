(function() {
    'use strict';

    angular
		.module('spa')
		.controller('LoginCtrl',LoginCtrl);

	LoginCtrl.$inject = ['$scope','$state','userService'];	

	function LoginCtrl($scope,$state,userService){
		$scope.login_data = {};
		$scope.login = function(){
			userService.login($scope.login_data).then(function(response){
				if( response.status == 200 ){
					user_data = response.result;
					$state.go('home');
				}
				else{
					alert("Oops!");
				}
			});
		};
	}
	
})();