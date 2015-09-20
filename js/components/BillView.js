import React from 'react';
import * as Bill from './Bill';

class BillView extends React.Component {
    render() {
        return (
            <div>
                <Bill.Statement bill={this.props.bill} />
                <Bill.Package bill={this.props.bill} />
                <Bill.CallCharges bill={this.props.bill} />
                <Bill.OnlineStore bill={this.props.bill} />
            </div>
        );
    }
}

export default BillView;
