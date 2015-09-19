jest.dontMock('../BillCallCharges');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillCallCharges = require('../BillCallCharges');

describe('BillCallCharges', function() {
    it('renders the correct markup', function() {
        let shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillCallCharges /> );

        let result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('div');
        //expect(result.props.children).toEqual([]);
    });
});
