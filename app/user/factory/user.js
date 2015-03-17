angular
	.module('spa')
	.factory('userFactory', userFactory);

userFactory.$inject = ['$http'];

function userFactory($http){
	var service = {
		getAllUsers : getAllUsers,
		getByIdUser : getByIdUser,
		getPaginateUsers : getPaginateUsers
	};

	return service;

	function getAllUsers(){
		var req = {
            url: api_url+'users.php',
            method: 'GET'
        };

		return $http(req)
            .success(processSuccess)
            .error(processFailed);

        function processSuccess(response) {
            return response.data;
        }

        function processFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
	}

	function getByIdUser(id){
		var req = {
            url: api_url+'users.php?user_id='+id,
            method: 'GET'
        };

		return $http(req)
            .success(processSuccess)
            .error(processFailed);

        function processSuccess(response) {
            return response.data;
        }

        function processFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
	}

	function getPaginateUsers(page_number){
		var req = {
            url: api_url+'users.php?page_number='+pageNumber,
            method: 'GET'
        };

		return $http(req)
            .success(processSuccess)
            .error(processFailed);

        function processSuccess(response) {
            return response.data;
        }

        function processFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
	}
}