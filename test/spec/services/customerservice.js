'use strict';

describe('Service: Customerservice', function () {

  // load the service's module
  beforeEach(module('ngLemonadeTycoonApp'));

  // instantiate service
  var Customerservice;
  beforeEach(inject(function (_Customerservice_) {
    Customerservice = _Customerservice_;
  }));

  it('should do something', function () {
    expect(!!Customerservice).toBe(true);
  });

});
