jest.dontMock('../BillApp');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillApp = require('../BillApp');
const LoadBillButton = require('../LoadBillButton');
const BillView = require('../BillView');

describe('BillApp', function() {
    /*LoadBillButton.prototype.render.mockImplementation(function() {
        return <noscript id="load-bill-button" />;
    });*/
    //TestUtils.mockComponent(LoadBillButton, 'load-bill-button');

    it('renders the correct markup', function() {
        let shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillApp /> );

        let result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <section><LoadBillButton /></section>,
            <section><BillView /></section>
        ]);
    });
});
