angular
	.module('spa')
	.controller('HomeCtrl',HomeCtrl);

HomeCtrl.$inject = ['$scope','userFactory'];

function HomeCtrl($scope,userFactory){
	$scope.form_data = user_data;
	$scope.users = [];

	userFactory.getAllUsers().then(function(results){
		$scope.users = results;
	});


	$scope.delete_user = function(user){
		userFactory.deleteUser(user.id).then(function(result){
			if(result.status == 200){
				$scope.users.splice( $scope.users.indexOf(user), 1 );
			}
		});
	};
}