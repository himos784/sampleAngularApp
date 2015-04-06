(function() {
    'use strict';

    angular
		.module('spa')
		.controller('HomeCtrl',HomeCtrl);

	HomeCtrl.$inject = ['$scope'];

	function HomeCtrl($scope){

		$scope.form_data = user_data;
		
	}

})();
(function() {
    'use strict';

    angular
		.module('spa')
		.controller('LoginCtrl',LoginCtrl);

	LoginCtrl.$inject = ['$scope','$state','userService'];	

	function LoginCtrl($scope,$state,userService){

		$scope.login_data = {};
		$scope.login = login;

		function login(){
			userService.login($scope.login_data).then(function(response){
				if( response.status == 200 ){
					user_data = response.result;
					$state.go('home');
				}
				else{
					alert("Oops!");
				}
			});
		};
		
	}

})();
(function() {
    'use strict';

	angular
		.module('spa')
		.controller('LogoutCtrl',LogoutCtrl);

	LogoutCtrl.$inject = ['$scope','$state'];	

	function LogoutCtrl($scope,$state){

		$scope.logout = logout;

		function logout(){
			user_data = {};
			$state.go('/');
		};
		
	}

})();
(function() {
    'use strict';

	angular
		.module('spa')
		.controller('RegisterCtrl',RegisterCtrl);

	RegisterCtrl.$inject = ['$scope','$state','userService'];	

	function RegisterCtrl($scope,$state,userService){

		$scope.register_data = {};
		$scope.users = [];
		$scope.register = register;

		function register(){
			userService.createUser($scope.register_data).then(function(response){
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

})();
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
(function() {
    'use strict';

	angular
		.module('spa')
		.controller('ViewUserCtrl',ViewUserCtrl);

	ViewUserCtrl.$inject = ['$scope','$stateParams','userService'];

	function ViewUserCtrl($scope,$stateParams,userService){

		$scope.user = {};

		userService.getByIdUser($stateParams.id).then(function(result){
			$scope.user = result;
		});
		
	}

})();