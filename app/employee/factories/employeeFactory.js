(function() {
    'use strict';

    angular
        .module('spa')
        .factory('employeeFactory', employeeFactory);

    /* @ngInject */
    function employeeFactory(dependencies) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();