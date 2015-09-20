import React from 'react';
import BillItem from './BillItem';

class BillStatement extends React.Component {
    render() {
        const formatDateForProperty = property => {
            if (this.props.bill.statement == null) return '';
            return this.props.bill.statement[property];
        }

        return (
            <section>
                <header>
                    <h2>Statement</h2>
                </header>
                <div>
                    <BillItem name="Generated" value={formatDateForProperty('generated')} />
                </div>
            </section>
        );
    }
}

export default BillStatement;
