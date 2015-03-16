angular
	.module('spa')
	.factory('loginFactory', loginFactory);

loginFactory.$inject = ['$http','serializeFormPostData'];

function loginFactory($http,serializeFormPostData,data){
	// console.log(api_url+'login.php');
	/*return $resource(api_url+'login.php',{},{
		login : {
            method : 'POST',
            isArray: true,
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }
	});*/
	// return $http.post(api_url+'login.php',data).success(function(){}).error(function(){});
	var service = {
		login : login
	};

	return service;

	function login(data){
		var req = {
            url: api_url+'login.php',
            method: 'POST',
            // data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            transformRequest: serializeFormPostData,
			data: data,
        };

		return $http(req)
            .then(processLoginSuccess)
            .catch(processLoginFailed);

        function processLoginSuccess(response) {
            return response;
        }

        function processLoginFailed(error) {
            logger.error('XHR Failed for getAvengers.' + error.data);
        }
	}
}