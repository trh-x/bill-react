jest.dontMock('../BillCallCharges');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillCallCharges = require('../BillCallCharges');

describe('BillCallCharges', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillCallCharges /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        //expect(result.props.children).toEqual([]);
    });
});
