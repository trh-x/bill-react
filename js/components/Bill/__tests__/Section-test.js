jest.dontMock('../Section');

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const Section = require('../Section');

describe('Section', function() {
    it('renders the correct markup', function() {
        const shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(
            <Section title="Lost Cities">
                <article>Atlantis</article>
                <article>Shambhala</article>
            </Section>
        );

        const result = shallowRenderer.getRenderOutput();
        expect(result.type).toBe('section');
        expect(result.props.children).toEqual([
            <header>
                <h2>Lost Cities</h2>
            </header>,
            <div>
                <article>Atlantis</article>
                <article>Shambhala</article>
            </div>
        ]);
    });
});
