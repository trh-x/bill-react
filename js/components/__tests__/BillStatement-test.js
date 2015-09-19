jest.dontMock('../BillStatement');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillStatement = require('../BillStatement');

describe('BillStatement', function() {
    it('renders the correct markup', function() {
        let shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillStatement /> );

        let result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('div');
        //expect(result.props.children).toEqual([]);
    });
});
