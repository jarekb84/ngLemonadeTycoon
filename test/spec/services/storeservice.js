'use strict';

describe('Service: Storeservice', function () {

  // load the service's module
  beforeEach(module('ngLemonadeTycoonApp'));

  // instantiate service
  var Storeservice;
  beforeEach(inject(function (_Storeservice_) {
    Storeservice = _Storeservice_;
  }));

  it('should do something', function () {
    expect(!!Storeservice).toBe(true);
  });

});
