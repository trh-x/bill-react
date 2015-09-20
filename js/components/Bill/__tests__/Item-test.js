jest.dontMock('../Item');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const Item = require('../Item');

describe('Item', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <Item name="fooBar" value="Baz" /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('p');
        expect(result.props.children).toEqual([
            <span className="col-sm-6">Foo Bar</span>,
            <span className="col-sm-6">Baz</span>
        ]);
    });
});
