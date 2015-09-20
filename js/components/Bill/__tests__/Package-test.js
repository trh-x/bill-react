jest.dontMock('../Package');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const Package = require('../Package');

describe('Package', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <Package /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        //expect(result.props.children).toEqual([]);
    });
});
