(function() {
    'use strict';

	angular
		.module('spa')
		.controller('ViewUserCtrl',ViewUserCtrl);

	ViewUserCtrl.$inject = ['$scope','$stateParams','userService'];

	function ViewUserCtrl($scope,$stateParams,userService){

		$scope.user = {};

		userService.getByIdUser($stateParams.id).then(function(result){
			$scope.user = result;
		});
		
	}

})();