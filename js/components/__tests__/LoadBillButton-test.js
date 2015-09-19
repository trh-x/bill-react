jest.dontMock('../LoadBillButton.js');

import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import BillActions from '../../actions/BillActions';
const LoadBillButton = require('../LoadBillButton.js');

describe('LoadBillButton', function() {
    let instance, node;

    beforeEach(function() {
        instance = TestUtils.renderIntoDocument( <LoadBillButton /> );
        node = React.findDOMNode(instance);
    });

    it('renders a button with the text "Load Bill"', function() {
        expect(node.tagName).toBe('BUTTON');
        expect(node.textContent).toBe('Load Bill');
    });

    it('calls BillActions.loadBill() on click', function() {
        TestUtils.Simulate.click(node);
        expect(BillActions.loadBill.mock.calls.length).toBe(1);
    });
});
