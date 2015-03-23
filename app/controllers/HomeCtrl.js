angular
	.module('spa')
	.controller('HomeCtrl',HomeCtrl);

HomeCtrl.$inject = ['$scope','userFactory'];

function HomeCtrl($scope,userFactory){
	$scope.form_data = user_data;
}