angular
	.module('spa')
	.controller('LoginCtrl',LoginCtrl);

LoginCtrl.$inject = ['$scope','$state'];	

function LoginCtrl($scope,$state){
	$scope.form_data = {};
	$scope.login = function(){
		user_data = $scope.form_data;
		$state.go('home');
	};
}