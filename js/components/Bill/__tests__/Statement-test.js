jest.dontMock('../Statement');
jest.dontMock('moment');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const BillTestUtils = require('../../../testUtils/BillTestUtils');

const CurrencyUtils = require('../../../utils/CurrencyUtils');
const { Section, SubSection, Total, Item } = require('../Reusable');
const Statement = require('../Statement');

describe('Statement', function() {
    CurrencyUtils.formatCurrency.mockImplementation( value => `GBP ${value.toFixed(2)}` );

    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        const mockBill = BillTestUtils.mockBill();
        //const mockBill = require('../../../../shortBill.json');
        shallowRenderer.render( <Statement bill={mockBill} /> );

        const result = shallowRenderer.getRenderOutput();
        TestUtils.isElementOfType( result.type, <Section /> )
        expect(result.props.title).toBe('Statement');
        expect(result.props.children).toEqual([
            <Item key="generated" name="Generated" value="January 11, 2015" />,
            <Item key="due" name="Due" value="January 25, 2015" />,
            <SubSection key="period" title="Period">
                <Item key="from" name="From" value="January 26, 2015" />
                <Item key="to" name="To" value="February 25, 2015" />
            </SubSection>,
            <Total key="total" total={136.03} />
        ]);
    });
});
