var user_data = {};

var api_url = "http://localhost/angular_api/";	

(function() {
    'use strict';

    angular
    	.module('spa', [
	    	'ngRoute',
	    	'ui.router',
	    	'ui.bootstrap'
    	]);
})();


(function() {
    'use strict';
    
    angular
        .module('spa')
        .config(function($stateProvider, $urlRouterProvider,$httpProvider) {
            $urlRouterProvider.otherwise('/');
            
            $stateProvider
            .state('/', {
                url: '/',
            	views: {
            		'': { 
            			templateUrl: 'partials/landing/landing-page.html' 
            		},
            		'login@/': { 
            			templateUrl: 'partials/landing/login.html',
            			controller: 'LoginCtrl'
            		},
            		'register@/': { 
            			templateUrl: 'partials/landing/register.html',
            			controller: 'RegisterCtrl' 
            		}
            	}
            })
            .state('home',{
            	url: '/home',
            	views: {
            		'': {
            			templateUrl: 'partials/home/home.html',
                        controller: 'HomeCtrl',
            		},
                    'users@home': { 
                        templateUrl: 'partials/home/users-table.html',
                        controller: 'UsersCtrl' 
                    }
            	}
            })
            .state('view-user',{
                url: '/user/:id',
                templateUrl: 'partials/user/view.html',
                controller: 'ViewUserCtrl'
            })
            .state('delete-user',{
                url: '/user/delete/:id',
                controller: 'DeleteUserCtrl'
            })
            .state('logout',{
                url: '/logout',
                views: {
                    '': { 
                        templateUrl: 'partials/landing/landing-page.html' 
                    }
                }
            });
        });

})();
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
(function() {
    'use strict';

	angular
		.module('spa')
		.factory('restApiFactory', restApiFactory);

	restApiFactory.$inject = ['$http','$q'];

	function restApiFactory($http,$q){

		var services = {
			connect : connect
		}
		return services;

		function connect(config){
		    var deferred = $q.defer();
		    $http(config)
		        .success(function (data) {
		            deferred.resolve(data);
		        })
		        .error(function (e) {
		            deferred.reject(e);
		        });
		    return deferred.promise;
		}
		
	}

})();
(function() {
    'use strict';

	angular
		.module('spa')
		.factory('serializeFormPostData', serializeFormPostData);
		
	function serializeFormPostData() {

		function transformRequest( data, getHeaders ) {

			var headers = getHeaders();

			headers[ "Content-type" ] = "application/x-www-form-urlencoded; charset=utf-8";

			return( serializeData( data ) );

		}

		return( transformRequest );

		function serializeData( data ) {

			if ( ! angular.isObject( data ) ) {

				return( ( data == null ) ? "" : data.toString() );

			}

			var buffer = [];

			for ( var name in data ) {

				if ( ! data.hasOwnProperty( name ) ) {

					continue;

				}

				var value = data[ name ];

				buffer.push(
					encodeURIComponent( name ) +
					"=" +
					encodeURIComponent( ( value == null ) ? "" : value )
				);

			}

			var source = buffer
				.join( "&" )
				.replace( /%20/g, "+" )
			;

			return( source );
		}
		
	}

})();	
(function() {
    'use strict';

    angular
        .module('spa')
        .service('userService', userService);

    userService.$inject = ['$http','serializeFormPostData','restApiFactory'];

    function userService($http,serializeFormPostData,restApiFactory){

        this.getAllUsers = getAllUsers;
        this.getByIdUser = getByIdUser;
        this.getPaginateUsers = getPaginateUsers;
        this.createUser = createUser;
        this.updateUser = updateUser;
        this.deleteUser = deleteUser;
        this.login = login;

        ////////////////

        function getAllUsers(){
            var req = {
                url: api_url+'users.php',
                method: 'GET',
            };
            return restApiFactory.connect(req);
        }

        function getByIdUser(id){
            var req = {
                url: api_url+'users.php?user_id='+id,
                method: 'GET',
            };
            return restApiFactory.connect(req);
        }

        function getPaginateUsers(page_number){
            var req = {
                url: api_url+'users.php?page_number='+pageNumber,
                method: 'GET',
            };
            return restApiFactory.connect(req);
        }

        function createUser(data){
            var req = {
                url: api_url+'create_user.php',
                method: 'POST',
                transformRequest: serializeFormPostData,
                data: data
            };
            return restApiFactory.connect(req);
        }

        function updateUser(id,data){
            var req = {
                url: api_url+'update_user.php?user_id='+id,
                method: 'POST',
                transformRequest: serializeFormPostData,
                data: data,
            };
            return restApiFactory.connect(req);
        }

        function deleteUser(id){
            var req = {
                url: api_url+'delete_user.php?user_id='+id,
                method: 'GET',
            };
            return restApiFactory.connect(req);
        }

        function login(data){
            var req = {
                url: api_url+'login.php',
                method: 'POST',
                transformRequest: serializeFormPostData,
                data: data,
            };
            return restApiFactory.connect(req);
        }

    }

})();