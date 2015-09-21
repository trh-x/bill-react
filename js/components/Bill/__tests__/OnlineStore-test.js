jest.dontMock('../OnlineStore');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const BillTestUtils = require('../../../testUtils/BillTestUtils');

const CurrencyUtils = require('../../../utils/CurrencyUtils');
const Section = require('../Section');
const SubSection = require('../SubSection');
const Total = require('../Total');
const Item = require('../Item');
const OnlineStore = require('../OnlineStore');

describe('OnlineStore', function() {
    CurrencyUtils.formatCurrency.mockImplementation( value => `GBP ${value.toFixed(2)}` );

    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        const mockBill = BillTestUtils.mockBill();
        shallowRenderer.render( <OnlineStore bill={mockBill} /> );

        const result = shallowRenderer.getRenderOutput();
        TestUtils.isElementOfType(result.type, <Section /> )
        expect(result.props.title).toBe('Sky Store');
        expect(result.props.children).toEqual([
            <SubSection key="rentals" title="Rentals">
                {[
                    <Item key="0" name="50 Shades of Grey" value="GBP 4.99" />
                ]}
            </SubSection>,
            <SubSection key="buyAndKeep" title="Buy and Keep">
                {[
                    <Item key="0" name="That's what she said" value="GBP 9.99" />,
                    <Item key="1" name="Brokeback mountain" value="GBP 9.99" />
                ]}
            </SubSection>,
            <Total key="total" total={24.97} />
        ]);
    });
});
