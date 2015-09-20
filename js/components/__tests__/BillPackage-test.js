jest.dontMock('../BillPackage');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillPackage = require('../BillPackage');

describe('BillPackage', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillPackage /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        //expect(result.props.children).toEqual([]);
    });
});
