(function() {
    'use strict';

    angular
        .module('spa')
        .service('employeeService', employeeService);

    /* @ngInject */
    function employeeService(dependencies) {
        this.func = func;

        ////////////////

        function func() {
        }
    }
})();