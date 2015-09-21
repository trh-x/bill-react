import React from 'react';

class SubSection extends React.Component {
    render() {
        return (
            <section className="bill-subsection">
                <header className="col-sm-12">
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
