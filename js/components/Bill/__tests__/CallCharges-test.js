jest.dontMock('../CallCharges');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const CallCharges = require('../CallCharges');

describe('CallCharges', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <CallCharges /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        //expect(result.props.children).toEqual([]);
    });
});
