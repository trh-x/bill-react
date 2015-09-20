import React from 'react';

import CurrencyUtils from '../../utils/CurrencyUtils';
import SubSection from './SubSection';

class Total extends React.Component {
    render() {
        return (
            <SubSection title="Total">
                <p>{CurrencyUtils.formatCurrency(this.props.total)}</p>
            </SubSection>
        );
    }
}

export default Total;
