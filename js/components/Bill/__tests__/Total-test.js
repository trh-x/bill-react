jest.dontMock('../Total');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const CurrencyUtils = require('../../../utils/CurrencyUtils');
const SubSection = require('../SubSection');
const Total = require('../Total');

describe('Total', function() {
    CurrencyUtils.formatCurrency.mockImplementation( value => `GBP ${value.toFixed(2)}` );

    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <Total total={12.5} /> );

        const result = shallowRenderer.getRenderOutput();
        TestUtils.isElementOfType(result.type, <SubSection /> )
        expect(result.props.title).toBe('Total');
        expect(result.props.children).toEqual(
            <p>GBP 12.50</p>
        );
    });
});
