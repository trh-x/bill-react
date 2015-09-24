import React from 'react';

import moment from 'moment';

import CurrencyUtils from '../../utils/CurrencyUtils';
import { Section, SubSection, Total, Item } from './Reusable';

class Statement extends React.Component {
    render() {
        function upperCaseFirst(titleValue) {
            return titleValue[0].toUpperCase() + titleValue.substring(1);
        }

        function formatDate(dateValue) {
            return moment(dateValue).format('LL');
        }

        function addDateChildItems(children, obj, ...properties) {
            for (const property of properties) {
                children.push( <Item key={property} name={upperCaseFirst(property)} value={formatDate(obj[property])} /> );
            }
        }

        const children = [];
        if (this.props.bill.statement != null) {
            addDateChildItems(children, this.props.bill.statement, 'generated', 'due');

            const subSectionChildren = []
            addDateChildItems(subSectionChildren, this.props.bill.statement.period, 'from', 'to');

            children.push(
                <SubSection key="period" title="Period">
                    {subSectionChildren}
                </SubSection>
            );
        }
        if (this.props.bill.total != null)
            children.push( <Total key="total" total={this.props.bill.total} /> );

        return (
            <Section title="Statement">
                {children}
            </Section>
        );
    }
}

export default Statement;
