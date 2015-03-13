angular
	.module('spa')
	.factory('loginFactory', loginFactory);

RegisterCtrl.$inject = ['$http'];	

function loginFactory($http){
	var service = {
		login : login
	};

	return service;

	function login(email,password){

		return $http.get(api_url+'login.php')
            .then(getAvengersComplete)
            .catch(getAvengersFailed);

        function processLoginSuccess(response) {
            return response.data.results;
        }

        function processLoginFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
	}
}