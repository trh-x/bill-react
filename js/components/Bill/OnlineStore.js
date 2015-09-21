import React from 'react';

import CurrencyUtils from '../../utils/CurrencyUtils';
import Section from './Section';
import SubSection from './SubSection';
import Total from './Total';
import Item from './Item';

class OnlineStore extends React.Component {
    render() {
        let children = [];

        if (this.props.bill.skyStore != null) {
            function renderItems(items) {
                return items.map( (item, index) => <Item key={index} name={item.title} value={CurrencyUtils.formatCurrency(item.cost)} /> );
            }

            children = [
                <SubSection key="rentals" title="Rentals">
                    { renderItems(this.props.bill.skyStore.rentals) }
                </SubSection>,
                <SubSection key="buyAndKeep" title="Buy and Keep">
                    { renderItems(this.props.bill.skyStore.buyAndKeep) }
                </SubSection>,
                <Total key="total" total={this.props.bill.skyStore.total} />
            ];
        }

        return (
            <Section title="Sky Store">
                {children}
            </Section>
        );
    }
}

export default OnlineStore;
