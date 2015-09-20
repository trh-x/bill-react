jest.dontMock('../SubSection');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const SubSection = require('../SubSection');

describe('SubSection', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(
            <SubSection title="Lost Cities">
                <article>Atlantis</article>
                <article>Shambhala</article>
            </SubSection>
        );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        expect(result.props.children).toEqual([
            <header>
                <h4>Lost Cities</h4>
            </header>,
            <div>
                <article>Atlantis</article>
                <article>Shambhala</article>
            </div>
        ]);
    });
});
