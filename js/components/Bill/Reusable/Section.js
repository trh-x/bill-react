import React from 'react';

class Section extends React.Component {
    render() {
        return (
            <section className="bill-section col-sm-12">
                <header className="col-sm-12">
                    <h3>{this.props.title}</h3>
                </header>
                <div className="col-sm-12">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Section;
