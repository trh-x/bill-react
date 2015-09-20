import React from 'react';
import Item from './Item';

class Statement extends React.Component {
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
                    <Item name="Generated" value={formatDateForProperty('generated')} />
                </div>
            </section>
        );
    }
}

export default Statement;
