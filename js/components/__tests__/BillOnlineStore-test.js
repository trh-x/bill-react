jest.dontMock('../BillOnlineStore');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const BillOnlineStore = require('../BillOnlineStore');

describe('BillOnlineStore', function() {
    it('renders the correct markup', function() {
        let shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render( <BillOnlineStore /> );

        let result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        //expect(result.props.children).toEqual([]);
    });
});
