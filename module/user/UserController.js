var user = angular.module('userControllers', ['ui.router']);
user.controller("LoginCtrl",['$scope','$state',function($scope,$state){
	$scope.form_data = {};
	$scope.login = function(){
		console.log($scope.form_data);
		user_data.push($scope.form_data);
		$state.go('home');
	};
}]);

user.controller("RegisterCtrl",['$scope',function($scope){
	$scope.message = "You are here!"
}]);

user.controller("HomeCtrl",['$scope','$state',function($scope,$state){
	$scope.form_data = user_data;
}]);
