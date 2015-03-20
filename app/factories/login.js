angular
	.module('spa')
	.factory('loginFactory', loginFactory);

loginFactory.$inject = ['$http','serializeFormPostData'];

function loginFactory($http,serializeFormPostData){
    var service = {
		login : login
	};

	return service;

	function login(data){
		var req = {
            url: api_url+'login.php',
            method: 'POST',
            transformRequest: serializeFormPostData,
			data: data,
        };

		return $http(req)
            .success(processLoginSuccess)
            .error(processLoginFailed);

        function processLoginSuccess(response) {
            return response.data;
        }

        function processLoginFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
	}
}