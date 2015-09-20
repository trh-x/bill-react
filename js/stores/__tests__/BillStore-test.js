jest.dontMock('../BillStore');
jest.dontMock('../../constants/BillConstants');
jest.dontMock('keymirror');

const AppDispatcher = require('../../dispatcher/AppDispatcher');
const BillLoader = require('../../data/BillLoader');
const ActionTypes = require('../../constants/BillConstants').ActionTypes;
const Store = require('../Store');

const MOCK_TOKEN = 'ABC123';
AppDispatcher.register.mockReturnValue(MOCK_TOKEN);
const BillStore = require('../BillStore');

describe('BillStore', function() {
    it('initialises with an empty bill', function() {
        expect(BillStore.getBill()).toEqual({});
    });

    it('registers with AppDispatcher', function() {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
        expect(AppDispatcher.register).toBeCalledWith(jasmine.any(Function));
        expect(BillStore.dispatchToken).toBe(MOCK_TOKEN);
    });

    it('correctly invokes BillLoader.loadBill() when an ActionTypes.BILL_LOAD action is dispatched', function() {
        AppDispatcher.register.mock.calls[0][0]({
            type: ActionTypes.BILL_LOAD
        });
        expect(BillLoader.loadBill.mock.calls.length).toBe(1);
    });

    it('correctly stores data and invokes Store.emitChange() when an ActionTypes.BILL_LOAD_SUCCESS action is dispatched', function() {
        const MOCK_BILL = { foo: 'Bar' };
        Store.prototype.emitChange = jest.genMockFn();

        AppDispatcher.register.mock.calls[0][0]({
            type: ActionTypes.BILL_LOAD_SUCCESS,
            bill: MOCK_BILL
        });
        expect(BillStore.emitChange.mock.calls.length).toBe(1);
        expect(BillStore.getBill()).toBe(MOCK_BILL);
    });
});
