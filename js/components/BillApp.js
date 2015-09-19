import React from 'react';
import LoadBillButton from './LoadBillButton';
import BillView from './BillView';

class BillApp extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <LoadBillButton />
                </section>
                <section>
                    <BillView />
                </section>
            </div>
        );
    }
}

export default BillApp;
