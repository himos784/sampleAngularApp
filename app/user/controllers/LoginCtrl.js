angular
	.module('spa')
	.controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ['$scope','$state','loginService'];	

function LoginCtrl($scope,$state,loginService){
	$scope.login_data = {};

	$scope.login = function(){
		var login = loginService.login($scope.login_data.email,$scope.login_data.password)
		if( login ){
			user_data = $scope.login_data;
			$state.go('home');
		}
		else{
			alert("Oops!");
		}
	};
}
