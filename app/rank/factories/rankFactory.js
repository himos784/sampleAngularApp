(function() {
    'use strict';

    angular
        .module('spa')
        .factory('rankFactory', rankFactory);

    /* @ngInject */
    function rankFactory(dependencies) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();