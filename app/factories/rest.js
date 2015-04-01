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