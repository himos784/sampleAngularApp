var user = angular.module('userControllers', ['ui.router']);
user.controller("LoginCtrl",['$scope','$state',function($scope,$state){
	$scope.current_data = {};
	$scope.form_data = {};
	$scope.login = function(){
		console.log($scope.form_data);
		// $scope.current_data.push($scope.form_data);
		$state.go('home');
	};
}]);
user.controller("RegisterCtrl",['$scope',function($scope){
	$scope.message = "You are here!"
}]);