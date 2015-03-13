angular
	.module('spa')
	.service('loginService', loginService);

function loginService(){
	var service = {
		login : login
	};

	return service;

	function login(email,password){
		for( x = 0 ; x < users.length ; x++ ){
			if( ( users[x].email == email ) && ( users[x].password == password ) ){
				return true;
			}
		}
		return false;
	}
}