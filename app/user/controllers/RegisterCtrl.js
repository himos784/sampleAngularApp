angular
	.module('spa')
	.controller('RegisterCtrl',RegisterCtrl);

RegisterCtrl.$inject = ['$scope','$state'];	

function RegisterCtrl($scope,$state){
	$scope.register_data = {};
	$scope.register = function(){
		users.push($scope.register_data);
		user_data = $scope.register_data;
		$state.go('home');
	};
}