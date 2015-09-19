import React from 'react';
import BillStatement from './BillStatement';
import BillPackage from './BillPackage';
import BillCallCharges from './BillCallCharges';
import BillOnlineStore from './BillOnlineStore';

class BillView extends React.Component {
    render() {
        return (
            <div>
                <BillStatement />
                <BillPackage />
                <BillCallCharges />
                <BillOnlineStore />
            </div>
        );
    }
}

export default BillView;
