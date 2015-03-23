angular
	.module('spa')
	.controller('UsersCtrl',UsersCtrl);

UsersCtrl.$inject = ['$scope','userFactory'];

function UsersCtrl($scope,userFactory){
	// $scope.form_data = user_data;

 	$scope.users = [];
	$scope.alerts = [];

	refreshUsers();

	function refreshUsers(){
		userFactory.getAllUsers().then(function(results){
			$scope.users = results;
		});
	}

	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};
  	
	$scope.delete_user = function(user){
		userFactory.deleteUser(user.id).then(function(result){
			if(result.status == 200){ 
				$scope.alerts.push({type: 'success',msg: 'Successfully deleted!'});
				$scope.users.splice( $scope.users.indexOf(user), 1 );
				refreshUsers();
			}
		});
	};
}