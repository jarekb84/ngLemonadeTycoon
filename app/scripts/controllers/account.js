'use strict';

angular.module('ngLemonadeTycoonApp')
  .controller('AccountCtrl', function($scope, $window, CustomerService, StoreService) {
    $scope.Account = {
      Name: 'Jerry',
      Balance: 0
    };

    $scope.processDay = function() {
      var customers = CustomerService.GetCustomers(),
        store = StoreService.GetStore();

      customers.forEach(function(element) {
        if (element.wallet >= store.Price && store.Quantity > 0) {
          element.wallet -= store.Price;
          $scope.Account.Balance += store.Price;
          store.Quantity -= 1;
        }
      });
    };

    $scope.resetStore = function() {
      StoreService.ResetStore();
    };
  });