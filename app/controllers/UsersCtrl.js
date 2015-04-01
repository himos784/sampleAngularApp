(function() {
    'use strict';

	angular
		.module('spa')
		.controller('UsersCtrl',UsersCtrl);

	UsersCtrl.$inject = ['$scope','userService'];

	function UsersCtrl($scope,userService){

	 	$scope.users = [];
		$scope.alerts = [];

		refreshUsers();

		function refreshUsers(){
			userService.getAllUsers().then(function(results){
				$scope.users = results;
			});
		}

		$scope.closeAlert = function(index) {
	    	$scope.alerts.splice(index, 1);
	  	};
	  	
		$scope.delete_user = function(user){
			userService.deleteUser(user.id).then(function(result){
				if(result.status == 200){ 
					$scope.alerts.push({type: 'success',msg: 'Successfully deleted!'});
					$scope.users.splice( $scope.users.indexOf(user), 1 );
					refreshUsers();
				}
			});
		};
		
	}

})();