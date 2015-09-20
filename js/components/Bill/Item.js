import React from 'react';

class Item extends React.Component {
    render() {
        function titleFromCamelCase(titleValue) {
            titleValue = titleValue.replace(/[A-Z]/g, initial => ` ${initial.toUpperCase()}`)
            return titleValue[0].toUpperCase() + titleValue.substring(1);
        }

        return (
            <p>
                <span className="col-sm-6">{titleFromCamelCase(this.props.name)}</span>
                <span className="col-sm-6">{this.props.value}</span>
            </p>
        );
    }
}

export default Item;
