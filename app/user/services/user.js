angular
	.module('spa')
	.service('userService', userService);

userService.$inject = ['$state','userFactory'];	


function userService($state,userFactory){
	var vm = this;
	vm.retrieveAllUsers = retrieveAllUsers;
	vm.retrieveByIdUser = retrieveByIdUser;
	vm.retrievePaginateUsers = retrievePaginateUsers;
	
	function retrieveAllUsers(users){
		console.log('Before Return!');
		console.log(users);
		return userFactory.getAllUsers().then(function(response){
			users = response.data;
			return users;
		});
	}

	function retrieveByIdUser(id,scope_data){
		userFactory.getByIdUser(id).then(function(response){
			/*console.log(response.data);
			if( response.data.status == 200 ){
				user_data = response.data.result;
				$state.go('home');
			}
			else{
				alert("Oops!");
			}*/

			scope_data = response.data.result;
			// return scope_data;
		});
	}

	function retrievePaginateUsers(page_number,scope_data){
		userFactory.getPaginateUsers(page_number).then(function(response){
			/*console.log(response.data);
			if( response.data.status == 200 ){
				user_data = response.data.result;
				$state.go('home');
			}
			else{
				alert("Oops!");
			}*/

			scope_data = response.data.result;
			// return scope_data;
		});
	}
}