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
        expect(result.props.className).toBe('bill-section col-sm-12');
        expect(result.props.children).toEqual([
            <header className="col-sm-12">
                <h3>Lost Cities</h3>
            </header>,
            <div className="col-sm-12">
                <article>Atlantis</article>
                <article>Shambhala</article>
            </div>
        ]);
    });
});
