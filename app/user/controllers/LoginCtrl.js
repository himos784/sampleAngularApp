angular
	.module('spa')
	.controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ['$scope','$state','loginFactory'];	

function LoginCtrl($scope,$state,loginFactory){
	$scope.login_data = {};
	$scope.login = function(){
		loginFactory.login($scope.login_data).then(function(response){
			if( response.data.status == 200 ){
				user_data = response.data.result;
				$state.go('home');
			}
			else{
				alert("Oops!");
			}
		});
	};
}
