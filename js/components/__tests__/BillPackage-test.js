jest.dontMock('../BillPackage');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillPackage = require('../BillPackage');

describe('BillPackage', function() {
    it('renders the correct markup', function() {
        let shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillPackage /> );

        let result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('div');
        //expect(result.props.children).toEqual([]);
    });
});
