angular
	.module('spa')
	.controller('RegisterCtrl',RegisterCtrl);

RegisterCtrl.$inject = ['$scope'];	

function RegisterCtrl($scope){
	$scope.message = "You are here!"
}