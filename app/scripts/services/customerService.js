'use strict';

angular.module('ngLemonadeTycoonApp')
  .service('CustomerService', function CustomerService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Customers = [];

    this.GetCustomers = function() {
      if (Customers.length === 0) {
        for (var i = 11; i >= 0; i--) {
          var customer = {
            id: i,
            wallet: Math.floor(Math.random() * 6) + 1
          };

          Customers.push(customer);
        }
      }

      return Customers;
    };
  });