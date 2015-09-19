import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/BillConstants';

export default {
    loadBill: function() {
        AppDispatcher.dispatch({
            type: ActionTypes.BILL_LOAD
        });
    }
};
