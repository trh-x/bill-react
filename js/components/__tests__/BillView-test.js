jest.dontMock('../BillView');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillStatement = require('../BillStatement');
const BillPackage = require('../BillPackage');
const BillCallCharges = require('../BillCallCharges');
const BillOnlineStore = require('../BillOnlineStore');
const BillView = require('../BillView');

describe('BillView', function() {
    it('renders the correct markup', function() {
        let shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillView /> );

        let result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <BillStatement />,
            <BillPackage />,
            <BillCallCharges />,
            <BillOnlineStore />
        ]);
    });
});
