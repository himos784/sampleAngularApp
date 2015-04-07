(function() {
    'use strict';

    angular
        .module('spa')
        .controller('EmployeeCtrl', EmployeeCtrl);

    /* @ngInject */
    function EmployeeCtrl(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();