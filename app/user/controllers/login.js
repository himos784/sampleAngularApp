angular
	.module('spa')
	.controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ['$scope','$state'];	

function LoginCtrl($scope,$state){
	$scope.login_data = {};
	$scope.login = function(){
		user_data = $scope.login_data;
		$state.go('home');
	};
}