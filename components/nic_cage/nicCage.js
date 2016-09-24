(function() {
  angular.module('App')
  .component('nicCage', {
    bindings: {
      name: '@'
    },
    templateUrl: './components/nic_cage/nicCage.html',
    controller: NicCageCtrl,
    controllerAs: 'nicCage'
  });

  function NicCageCtrl() {
    var nicCage = this;
  }
})();