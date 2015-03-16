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
		/*console.log(data);
		console.log(loginFactory.login(data));*/

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

		// console.log(loginFactory.login(data));
		// console.log(result.data);
		// return loginFactory.login(data);
		result = {};
		loginFactory.login(data).then(function(response,result){
			/*console.log("Service");
			console.log(data.data);
			var status = data.data.status;
			console.log(data.data.status);
			var result = data.data.result;
			if(data.data.status == 200){
				console.log(data.data.result);
				result = data.data.result;
			}*/
			result = response.data;
			console.log(result);
		});
		console.log(result);
		return (result);
	}
}