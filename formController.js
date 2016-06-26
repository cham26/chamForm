(function() {
    'use strict';

    angular
        .module('formApp')
        .controller('formController', formController);

    formController.$inject = ['$scope'];

    /* @ngInject */
    function formController($scope) {
        var vm = this;
        vm.title = 'formController';
        vm.userName = "";
        vm.userEmail = "";
        vm.userCash = "";
        vm.validateForm = function() {
            console.log(vm.userName, vm.userEmail, vm.userCash);
        }
        activate();

        ////////////////

        function activate() {
        }  
    }
})();