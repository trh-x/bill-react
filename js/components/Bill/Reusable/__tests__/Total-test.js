jest.dontMock('../Total');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const CurrencyUtils = require('../../../../utils/CurrencyUtils');
const SubSection = require('../SubSection');
const Total = require('../Total');

describe('Total', function() {
    CurrencyUtils.formatCurrency.mockImplementation( value => `GBP ${value.toFixed(2)}` );

    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <Total total={12.5} /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        expect(result.props.className).toBe('bill-total');
        expect(result.props.children).toEqual([
            <span className="col-sm-7 text-right"><strong>Total</strong></span>,
            <span className="col-sm-5">GBP 12.50</span>
        ]);
    });
});
