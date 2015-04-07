(function() {
    'use strict';

    angular
        .module('spa')
        .factory('departmentFactory', departmentFactory);

    /* @ngInject */
    function departmentFactory(dependencies) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();