import React from 'react';

class Section extends React.Component {
    render() {
        return (
            <section>
                <header>
                    <h2>{this.props.title}</h2>
                </header>
                <div>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Section;
