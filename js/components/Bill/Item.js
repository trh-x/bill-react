import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <p>
                <span className="col-sm-7 text-right"><strong>{this.props.name}</strong></span>
                <span className="col-sm-5">{this.props.value}</span>
            </p>
        );
    }
}

export default Item;
