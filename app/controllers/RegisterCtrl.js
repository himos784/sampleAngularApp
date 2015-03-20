angular
	.module('spa')
	.controller('RegisterCtrl',RegisterCtrl);

RegisterCtrl.$inject = ['$scope','$state','userFactory'];	

function RegisterCtrl($scope,$state,userFactory){
	$scope.register_data = {};
	$scope.users = [];
	$scope.register = function(){
		userFactory.createUser($scope.register_data).then(function(response){
			if( response.status == 200 ){
				user_data = $scope.register_data;
				$state.go('home');
			}
			else{
				alert("Oops!");
			}
		});
	};
}