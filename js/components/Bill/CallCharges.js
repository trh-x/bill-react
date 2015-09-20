import React from 'react';

import CurrencyUtils from '../../utils/CurrencyUtils';
import Section from './Section';
import Total from './Total';

class CallCharges extends React.Component {
    render() {
        let children = [];

        if (this.props.bill.callCharges != null) {
            children.push(
                <div key="header">
                    {
                        [ 'Called', 'Duration', 'Cost' ].map( title => <h5 key={title} className="col-sm-4">{title}</h5> )
                    }
                </div>
            );

            this.props.bill.callCharges.calls.forEach(function(call, index) {
                children.push(
                    <div key={index}>
                        {
                            [ 'called', 'duration' ].map( property => <span key={property} className="col-sm-4">{call[property]}</span> )
                        }
                        <span key="cost" className="col-sm-4">{CurrencyUtils.formatCurrency(call.cost)}</span>
                    </div>
                );
            });

            children.push( <Total key="total" total={this.props.bill.callCharges.total} /> );
        }

        return (
            <Section title="Call Charges">
                {children}
            </Section>
        );
    }
}

export default CallCharges;
