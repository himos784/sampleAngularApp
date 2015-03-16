angular
	.module('spa')
	.controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ['$scope','$state','loginService'];	
// LoginCtrl.$inject = ['$scope','$state','loginFactory'];	

function LoginCtrl($scope,$state,loginService){
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

		var login = loginService.login($scope.login_data);
		console.log(login);
		/*loginService.login($scope.login_data).then(function(data){
			console.log(data);
		});*/
		// var login = new loginService;

	};
}
