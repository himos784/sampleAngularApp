angular
	.module('spa')
	.controller('PreviewUserCtrl',PreviewUserCtrl);

PreviewUserCtrl.$inject = ['$scope','$stateParams','userFactory'];

function PreviewUserCtrl($scope,$stateParams,userFactory){
	console.log($stateParams.id);
	userFactory.getByIdUser($stateParams.id).then(function(result){
		console.log(result);
		$scope.user = result;
	});
}
