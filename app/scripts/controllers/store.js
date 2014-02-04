'use strict';

angular.module('ngLemonadeTycoonApp')
  .controller('StoreCtrl', function($scope, StoreService) {
    $scope.Store = StoreService.GetStore();
  });