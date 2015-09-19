import AppDispatcher from '../dispatcher/AppDispatcher';
import BillConstants from '../constants/BillConstants';

export default {
    loadBill: function() {
        AppDispatcher.dispatch({
            actionType: BillConstants.BILL_LOAD
        });
    }
};
