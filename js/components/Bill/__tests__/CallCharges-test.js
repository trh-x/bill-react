jest.dontMock('../CallCharges');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const BillTestUtils = require('../../../testUtils/BillTestUtils');

const CurrencyUtils = require('../../../utils/CurrencyUtils');
const Section = require('../Section');
const Total = require('../Total');
const CallCharges = require('../CallCharges');

describe('CallCharges', function() {
    CurrencyUtils.formatCurrency.mockImplementation( value => `GBP ${value.toFixed(2)}` );

    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        const mockBill = BillTestUtils.mockBill();
        shallowRenderer.render( <CallCharges bill={mockBill} /> );

        const result = shallowRenderer.getRenderOutput();
        TestUtils.isElementOfType(result.type, <Section /> )
        expect(result.props.title).toBe('Call Charges');
        expect(result.props.children).toEqual([
            <div key="header">
                <h5 key="Called" className="col-sm-4">Called</h5>
                <h5 key="Duration" className="col-sm-4">Duration</h5>
                <h5 key="Cost" className="col-sm-4">Cost</h5>
            </div>,
            <div key="0">
                {[
                    <span key="called" className="col-sm-4">07818828768</span>,
                    <span key="duration" className="col-sm-4">00:23:03</span>
                ]}
                <span key="cost" className="col-sm-4">GBP 2.13</span>
            </div>,
            <div key="1">
                {[
                    <span key="called" className="col-sm-4">02031234567</span>,
                    <span key="duration" className="col-sm-4">00:05:16</span>
                ]}
                <span key="cost" className="col-sm-4">GBP 0.21</span>
            </div>,
            <Total key="total" total={59.64} />
        ]);
    });
});
