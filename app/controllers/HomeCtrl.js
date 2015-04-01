(function() {
    'use strict';

    angular
		.module('spa')
		.controller('HomeCtrl',HomeCtrl);

	HomeCtrl.$inject = ['$scope'];

	function HomeCtrl($scope){

		$scope.form_data = user_data;
		
	}

})();