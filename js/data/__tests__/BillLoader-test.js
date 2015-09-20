jest.dontMock('../BillLoader');
jest.dontMock('../../constants/BillConstants');
jest.dontMock('keymirror');

const $ = require('jquery');
const AppDispatcher = require('../../dispatcher/AppDispatcher');
const { ActionTypes, Config } = require('../../constants/BillConstants');
const BillLoader = require('../../data/BillLoader');

describe('BillLoader', function() {
    $.get = jest.genMockFn();

    it('GETs the bill when BillLoader.loadBill() is invoked', function() {
        $.get.mockReturnValue({
            done: function() {}
        });
        BillLoader.loadBill();
        expect($.get.mock.calls.length).toBe(1);
        expect($.get).toBeCalledWith(Config.BILL_URL);
    });

    it('dispatches the correct event when the Ajax callback is received', function() {
        const MOCK_BILL = { foo: 'Bar' };
        $.get.mockReturnValue({
            done: successHandler => successHandler(MOCK_BILL)
        });
        BillLoader.loadBill();
        expect(AppDispatcher.dispatch.mock.calls.length).toBe(1);
        expect(AppDispatcher.dispatch).toBeCalledWith({
            type: ActionTypes.BILL_LOAD_SUCCESS,
            bill: MOCK_BILL
        });
    });
});
