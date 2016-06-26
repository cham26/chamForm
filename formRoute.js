(function() {
  'use strict';

  angular
    .module('formApp')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'form',
        config: {
          url: '/form',
          templateUrl: 'form.html',
          controller: 'formController',
          controllerAs: 'vm',
          
        } 
      }
    ];
  }
})();
