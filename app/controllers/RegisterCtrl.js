(function() {
    'use strict';

	angular
		.module('spa')
		.controller('RegisterCtrl',RegisterCtrl);

	RegisterCtrl.$inject = ['$scope','$state','userService'];	

	function RegisterCtrl($scope,$state,userService){

		$scope.register_data = {};
		$scope.users = [];
		$scope.register = register;

		function register(){
			userService.createUser($scope.register_data).then(function(response){
				if( response.status == 200 ){
					user_data = $scope.register_data;
					$state.go('home');
				}
				else{
					alert("Oops!");
				}
			});
		};
		
	}

})();