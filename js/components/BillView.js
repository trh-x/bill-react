import React from 'react';
import BillStatement from './BillStatement';
import BillPackage from './BillPackage';
import BillCallCharges from './BillCallCharges';
import BillOnlineStore from './BillOnlineStore';

class BillView extends React.Component {
    render() {
        return (
            <div>
                <BillStatement bill={this.props.bill} />
                <BillPackage bill={this.props.bill} />
                <BillCallCharges bill={this.props.bill} />
                <BillOnlineStore bill={this.props.bill} />
            </div>
        );
    }
}

export default BillView;
