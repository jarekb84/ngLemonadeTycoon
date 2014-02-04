'use strict';

angular.module('ngLemonadeTycoonApp')
	.controller('CustomerCtrl', function($scope, CustomerService) {
		$scope.Customers = CustomerService.GetCustomers();
	});