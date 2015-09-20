jest.dontMock('../OnlineStore');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const OnlineStore = require('../OnlineStore');

describe('OnlineStore', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <OnlineStore /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        //expect(result.props.children).toEqual([]);
    });
});
