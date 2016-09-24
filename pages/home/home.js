(function() {
  angular.module('App')
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {

    var vm = this;

    vm.name = 'Bill';
  }
})();