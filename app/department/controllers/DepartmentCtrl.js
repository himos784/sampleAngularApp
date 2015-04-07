(function() {
    'use strict';

    angular
        .module('spa')
        .controller('DepartmentCtrl', DepartmentCtrl);

    /* @ngInject */
    function DepartmentCtrl(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();