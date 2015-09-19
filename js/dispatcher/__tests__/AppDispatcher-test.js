jest.dontMock('../AppDispatcher.js');

describe('AppDispatcher', function() {
    it('is an instance of the Flux Dispatcher', function() {
        var Dispatcher = require('flux').Dispatcher;
        var instance = require('../AppDispatcher');
        expect(instance).toEqual(jasmine.any(Dispatcher));
    });
});
