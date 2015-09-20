jest.dontMock('../Statement');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const Statement = require('../Statement');

describe('Statement', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        const mock = require('../../../../shortBill.json');
        shallowRenderer.render( <Statement bill={mock} /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        //expect(result.props.children).toEqual([]);
    });
});
