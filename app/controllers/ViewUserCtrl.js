angular
	.module('spa')
	.controller('ViewUserCtrl',ViewUserCtrl);

ViewUserCtrl.$inject = ['$scope','$stateParams','userFactory'];

function ViewUserCtrl($scope,$stateParams,userFactory){
	userFactory.getByIdUser($stateParams.id).then(function(result){
		$scope.user = result;
	});
}
