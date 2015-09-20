jest.dontMock('../Statement');
jest.dontMock('moment');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const BillTestUtils = require('../../../testUtils/BillTestUtils');

const CurrencyUtils = require('../../../utils/CurrencyUtils');
const Section = require('../Section');
const SubSection = require('../SubSection');
const Total = require('../Total');
const Item = require('../Item');
const Statement = require('../Statement');

describe('Statement', function() {
    CurrencyUtils.formatCurrency.mockImplementation( value => `GBP ${value.toFixed(2)}` );

    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        const mockBill = BillTestUtils.mockBill();
        //const mockBill = require('../../../../shortBill.json');
        shallowRenderer.render( <Statement bill={mockBill} /> );

        const result = shallowRenderer.getRenderOutput();
        TestUtils.isElementOfType(result.type, <Section /> )
        expect(result.props.title).toBe('Statement');
        expect(result.props.children).toEqual([
            <Item key="generated" name="generated" value="January 11, 2015" />,
            <Item key="due" name="due" value="January 25, 2015" />,
            <SubSection key="period" title="Period">
                <Item key="from" name="from" value="January 26, 2015" />
                <Item key="to" name="to" value="February 25, 2015" />
            </SubSection>,
            <Total key="total" total={136.03} />
        ]);
    });
});
