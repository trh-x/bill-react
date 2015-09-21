jest.dontMock('../Package');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const BillTestUtils = require('../../../testUtils/BillTestUtils');

const CurrencyUtils = require('../../../utils/CurrencyUtils');
const Section = require('../Section');
const SubSection = require('../SubSection');
const Total = require('../Total');
const Item = require('../Item');
const Package = require('../Package');

describe('Package', function() {
    CurrencyUtils.formatCurrency.mockImplementation( value => `GBP ${value.toFixed(2)}` );

    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        const mockBill = BillTestUtils.mockBill();
        shallowRenderer.render( <Package bill={mockBill} /> );

        const result = shallowRenderer.getRenderOutput();
        TestUtils.isElementOfType(result.type, <Section /> )
        expect(result.props.title).toBe('Subcriptions');
        expect(result.props.children).toEqual([
            <SubSection key="tv" title="TV">
                <Item key="subscription" name="All You Can Eat TV Dinners" value="GBP 50.00" />
            </SubSection>,
            <SubSection key="talk" title="Talk">
                <Item key="subscription" name="Mo' Minutes, Mo' Problems" value="GBP 5.00" />
            </SubSection>,
            <SubSection key="broadband" title="Broadband">
                <Item key="subscription" name="Extreme Cable XXL" value="GBP 16.40" />
            </SubSection>,
            <Total key="total" total={71.4} />
        ]);
    });
});
