import React from 'react';

class SubSection extends React.Component {
    render() {
        return (
            <section>
                <header>
                    <h4>{this.props.title}</h4>
                </header>
                <div>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default SubSection;
