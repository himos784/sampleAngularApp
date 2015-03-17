angular
	.module('spa')
	.service('loginService', loginService);

loginService.$inject = ['$state','loginFactory'];	

function loginService($state,loginFactory){
	var vm = this;
	vm.login = login;

	function login(data){
		loginFactory.login(data).then(function(response){
			console.log(response.data);
			if( response.data.status == 200 ){
				user_data = response.data.result;
				$state.go('home');
			}
			else{
				alert("Oops!");
			}
		});
	}
}