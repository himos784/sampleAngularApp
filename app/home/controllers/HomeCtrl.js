angular
	.module('spa')
	.controller('HomeCtrl',HomeCtrl);

// HomeCtrl.$inject = ['$scope','userService','userFactory'];
HomeCtrl.$inject = ['$scope','userFactory'];

function HomeCtrl($scope,userFactory){
// function HomeCtrl($scope,userService,userFactory){
	$scope.form_data = user_data;
	$scope.users = [];

	userFactory.getAllUsers().then(function(results){
		$scope.users = results;
	});

	// Commented just incase 
	/*$scope.users = userService.retrieveAllUsers($scope.users);
	console.log($scope.users.$$state);
	console.log($scope.users.$$state.value);*/
	// console.log($scope.users);
}