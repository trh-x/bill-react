jest.dontMock('../BillView');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillStatement = require('../BillStatement');
const BillPackage = require('../BillPackage');
const BillCallCharges = require('../BillCallCharges');
const BillOnlineStore = require('../BillOnlineStore');
const BillView = require('../BillView');

describe('BillView', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        const mockBill = { foo: 'Bar' };
        shallowRenderer.render( <BillView bill={mockBill} /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <BillStatement bill={mockBill} />,
            <BillPackage bill={mockBill} />,
            <BillCallCharges bill={mockBill} />,
            <BillOnlineStore bill={mockBill} />
        ]);
    });
});
