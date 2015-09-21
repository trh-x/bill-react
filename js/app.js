import 'babel/polyfill';
import React from 'react';
import BillApp from './components/BillApp';

React.render(
    <BillApp />,
    document.getElementById('bill-app')
);
