jest.dontMock('../Item');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const Item = require('../Item');

describe('Item', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <Item name="Foo" value="Bar" /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('p');
        expect(result.props.children).toEqual([
            <span className="col-sm-6">Foo</span>,
            <span className="col-sm-6">Bar</span>
        ]);
    });
});
