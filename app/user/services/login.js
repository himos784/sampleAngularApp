angular
	.module('spa')
	.service('loginService', loginService);

loginService.$inject = ['loginFactory'];	

function loginService(loginFactory){
	var service = {
		login : login
	};

	return service;

	function login(data){
		url = loginFactory;
		users = url.query();
		console.log(users);
	}
}