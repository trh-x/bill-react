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
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillApp /> );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <section className="col-sm-5 col-sm-offset-1"><LoadBillButton /></section>,
            <section className="col-sm-5"><BillView bill={undefined} /></section>
        ]);
    });

    describe('with a store', function() {
        const BillStore = require('../../stores/BillStore');
        let billApp;

        beforeEach(function() {
            billApp = TestUtils.renderIntoDocument( <BillApp /> );
        });

        it('adds a change listener when mounted to the document', function() {
            expect(BillStore.addChangeListener.mock.calls.length).toBe(1);
            expect(BillStore.addChangeListener).toBeCalledWith(billApp._onChange);
        });

        it('removes the change listener when unmounted from the document', function() {
            const container = document.createElement('div');
            React.render( <BillApp />, container );

            React.unmountComponentAtNode(container);
            expect(BillStore.removeChangeListener.mock.calls.length).toBe(1);
            expect(BillStore.removeChangeListener).toBeCalledWith(billApp._onChange);
        });

        it('updates its state when notified of a change to the store', function() {
            const mockBill = { foo: 'Bar' };
            BillStore.getBill.mockReturnValue(mockBill);
            React.Component.prototype.setState = jest.genMockFn();

            BillStore.addChangeListener.mock.calls[0][0]();
            expect(billApp.setState.mock.calls.length).toBe(1);
            expect(billApp.setState).toBeCalledWith({ bill: mockBill });
        });
    });
});
