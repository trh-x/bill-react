jest.dontMock('../Store');

const EventEmitter = require('events');
const Store = require('../Store');

const CHANGE_EVENT = 'change';

describe('Store', function() {
    let store;

    EventEmitter.prototype.emit = jest.genMockFn();
    EventEmitter.prototype.on = jest.genMockFn();
    EventEmitter.prototype.removeListener = jest.genMockFn();

    beforeEach(function() {
        store = new Store();
    });

    it('correctly invokes EventEmitter.emit() when Store.emitChange() is called', function() {
        store.emitChange();
        expect(store.emit.mock.calls.length).toBe(1);
        expect(store.emit).toBeCalledWith(CHANGE_EVENT);
    });

    it('correctly invokes EventEmitter.on() when Store.addChangeListener() is called', function() {
        function callback() {}
        store.addChangeListener(callback);
        expect(store.on.mock.calls.length).toBe(1);
        expect(store.on).toBeCalledWith(CHANGE_EVENT, callback);
    });

    it('correctly invokes EventEmitter.removeListener() when Store.removeChangeListener() is called', function() {
        function callback() {}
        store.removeChangeListener(callback);
        expect(store.removeListener.mock.calls.length).toBe(1);
        expect(store.removeListener).toBeCalledWith(CHANGE_EVENT, callback);
    });
});
