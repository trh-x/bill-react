jest.dontMock('../LoadBillButton');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillActions = require('../../actions/BillActions');
const LoadBillButton = require('../LoadBillButton');

describe('LoadBillButton', function() {
    let buttonNode;

    beforeEach(function() {
        const loadBillButton = TestUtils.renderIntoDocument( <LoadBillButton /> );
        buttonNode = React.findDOMNode(loadBillButton);
    });

    it('renders a button with the text "Load Bill"', function() {
        expect(buttonNode.tagName).toBe('BUTTON');
        expect(buttonNode.className).toBe('btn btn-block btn-primary');
        expect(buttonNode.textContent).toBe('Load Bill');
    });

    it('calls BillActions.loadBill() on click', function() {
        TestUtils.Simulate.click(buttonNode);
        expect(BillActions.loadBill.mock.calls.length).toBe(1);
    });
});
