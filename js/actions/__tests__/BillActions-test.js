jest.dontMock('../BillActions.js');
jest.dontMock('../../constants/BillConstants');
jest.dontMock('keymirror');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const AppDispatcher = require('../../dispatcher/AppDispatcher');
const BillConstants = require('../../constants/BillConstants');
const BillActions = require('../BillActions.js');

describe('BillActions', function() {
    it('dispatches the correct event when BillActions.loadBill() is invoked', function() {
        BillActions.loadBill();
        expect(AppDispatcher.dispatch.mock.calls.length).toBe(1);
        expect(AppDispatcher.dispatch).toBeCalledWith({
            actionType: BillConstants.BILL_LOAD
        });
    });
});
