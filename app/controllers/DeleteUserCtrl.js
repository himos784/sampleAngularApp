angular
	.module('spa')
	.controller('DeleteUserCtrl',DeleteUserCtrl);

DeleteUserCtrl.$inject = ['$state','$stateParams','userFactory'];

function DeleteUserCtrl($state,$stateParams,userFactory){
	userFactory.deleteUser($stateParams.id).then(function(result){
		if(result.status == 200){
			$state.go('home');
		}
	});
}
