import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <p>
                <span className="col-sm-6">{this.props.name}</span>
                <span className="col-sm-6">{this.props.value}</span>
            </p>
        );
    }
}

export default Item;
