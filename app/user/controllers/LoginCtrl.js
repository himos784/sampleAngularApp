angular
	.module('spa')
	.controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ['$scope','loginService'];	

function LoginCtrl($scope,loginService){
	$scope.login_data = {};
	$scope.login = function(){
		// var login = loginService.login($scope.login_data);
		// loginService.login($scope.login_data);
		/*console.log(login);
		console.log(login.status);*/
		// console.log(login);
		/*if( login.status == 200 ){
			user_data = $scope.login_data;
			$state.go('home');
		}
		else{
			alert("Oops!");
		}*/

		loginService.login($scope.login_data);

	};
}
