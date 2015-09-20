jest.dontMock('../BillStatement');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillStatement = require('../BillStatement');

describe('BillStatement', function() {
    it('renders the correct markup', function() {
        let shallowRenderer = TestUtils.createRenderer();
        const MOCK_BILL = require('../../../shortBill.json');
        shallowRenderer.render( <BillStatement bill={MOCK_BILL} /> );

        let result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        //expect(result.props.children).toEqual([]);
    });
});
