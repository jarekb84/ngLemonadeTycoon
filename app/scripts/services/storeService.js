'use strict';

angular.module('ngLemonadeTycoonApp')
  .service('StoreService', function StoreService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var store;
    this.GetStore = function() {
      if (!store) {
        store = {
          Quantity: 11,
          Price: 3
        };
      }

      return store;
    };

    this.ResetStore = function () {
      store.Quantity = 11;
    };
  });