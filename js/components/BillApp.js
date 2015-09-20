import React from 'react';
import LoadBillButton from './LoadBillButton';
import BillView from './BillView';
import BillStore from '../stores/BillStore';

function getBillState() {
    return { bill: BillStore.getBill() };
}

class BillApp extends React.Component {
    constructor() {
        super();
        this.state = getBillState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        BillStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        BillStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <main className="container">
                <section className="col-sm-6">
                    <LoadBillButton />
                </section>
                <section className="col-sm-6">
                    <BillView bill={this.state.bill} />
                </section>
            </main>
        );
    }

    _onChange() {
        this.setState(getBillState());
    }
}

export default BillApp;
