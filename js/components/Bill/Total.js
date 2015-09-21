import React from 'react';

import CurrencyUtils from '../../utils/CurrencyUtils';
import Item from './Item';

class Total extends React.Component {
    render() {
        return (
            <section className="bill-total">
              <span className="col-sm-7 text-right"><strong>Total</strong></span>
              <span className="col-sm-5">{CurrencyUtils.formatCurrency(this.props.total)}</span>
            </section>
        );
    }
}

export default Total;
