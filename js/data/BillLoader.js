import $ from 'jquery';

import { ActionTypes, Config } from '../constants/BillConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class BillLoader {
    loadBill() {
        $.get(Config.BILL_URL).done(data => {
            AppDispatcher.dispatch({
                type: ActionTypes.BILL_LOAD_SUCCESS,
                bill: data
            });
        })
    }
}

export default new BillLoader();
