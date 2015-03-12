var user = angular.module('userControllers', ['ui.router']);

user.controller("LoginCtrl",['$scope','$state',function($scope,$state){
	$scope.form_data = {};
	$scope.login = function(){
		user_data = $scope.form_data;
		$state.go('home');
	};
}]);

user.controller("RegisterCtrl",['$scope',function($scope){
	$scope.message = "You are here!"
}]);

user.controller("HomeCtrl",['$scope','$state',function($scope,$state){
	$scope.form_data = user_data;

}]);
