(function() {
    'use strict';

    angular
        .module('spa')
        .controller('RankCtrl', RankCtrl);

    /* @ngInject */
    function RankCtrl(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();