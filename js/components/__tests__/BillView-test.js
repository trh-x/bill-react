jest.dontMock('../BillView');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const Bill = require('../Bill');
const BillView = require('../BillView');

describe('BillView', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        const mockBill = { foo: 'Bar' };
        shallowRenderer.render( <BillView bill={mockBill} /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <Bill.Statement bill={mockBill} />,
            <Bill.Package bill={mockBill} />,
            <Bill.CallCharges bill={mockBill} />,
            <Bill.OnlineStore bill={mockBill} />
        ]);
    });
});
