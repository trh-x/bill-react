import React from 'react';

import CurrencyUtils from '../../utils/CurrencyUtils';
import { Section, Total } from './Reusable';

class CallCharges extends React.Component {
    render() {
        let children = [];

        if (this.props.bill.callCharges != null) {
            children.push(
                <div key="header" className="bill-call-charges-header">
                    {
                        [ 'Called', 'Duration', 'Cost' ].map( title => <h4 key={title} className="col-sm-4 col-xs-4">{title}</h4> )
                    }
                </div>
            );

            let callCharges = this.props.bill.callCharges.calls.map((call, index) => {
                return (
                    <div key={index}>
                        {
                            [ 'called', 'duration' ].map( property => <span key={property} className="col-sm-4 col-xs-4">{call[property]}</span> )
                        }
                        <span key="cost" className="col-sm-4 col-xs-4">{CurrencyUtils.formatCurrency(call.cost)}</span>
                    </div>
                );
            });

            children.push( <div key="callCharges" className="bill-call-charges">{callCharges}</div> );
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
