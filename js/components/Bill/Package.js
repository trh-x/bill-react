import React from 'react';

import CurrencyUtils from '../../utils/CurrencyUtils';
import { Section, SubSection, Total, Item } from './Reusable';

class Package extends React.Component {
    render() {
        let children = [];

        if (this.props.bill.package != null) {
            children = this.props.bill.package.subscriptions.map(function(subscription) {
                const type = subscription.type;
                const title = type === 'tv' ? 'TV' : type[0].toUpperCase() + type.substring(1);

                return (
                    <SubSection key={type} title={title}>
                        <Item key="subscription" name={subscription.name} value={CurrencyUtils.formatCurrency(subscription.cost)} />
                    </SubSection>
                );
            }.bind(this));

            children.push( <Total key="total" total={this.props.bill.package.total} /> );
        };

        return (
            <Section title="Subcriptions">
                {children}
            </Section>
        );
    }
}

export default Package;
