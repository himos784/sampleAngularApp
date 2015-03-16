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
		console.log(data);
		console.log(loginFactory.login(data));
		/*url = new loginFactory;
		// users = url.query();
		// users = url.get(data,function(){
		// 	users.$login(data);
		// });
		// users = url.save(data);
		users = function(data){
			console.log(data);
			users = url.$login({},data);
		}
		
		users(data);
		
		console.log(users);*/
		// loginFactory(data);
	}
}