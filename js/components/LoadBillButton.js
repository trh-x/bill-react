//import React from 'react/addons';
import React from 'react';
import BillActions from '../actions/BillActions';

class LoadBillButton extends React.Component {
    constructor(props) {
        super(props);
        //this.loadBill = this.loadBill.bind(this);
    }

    loadBill() {
        BillActions.loadBill();
    }

    render() {
        return (
            <button className="btn btn-block btn-primary" onClick={this.loadBill}>Load Bill</button>
        );
    }
};

export default LoadBillButton;
