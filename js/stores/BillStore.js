import Store from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/BillConstants';
import BillLoader from '../data/BillLoader';

let bill = null;

class BillStore extends Store {
    constructor() {
        super();
        this.registerWithDispatcher();
    }

    getBill() {
        return bill;
    }

    registerWithDispatcher() {
        this.dispatchToken = AppDispatcher.register(action => {
            switch (action.type) {
                case ActionTypes.BILL_LOAD:
                    BillLoader.loadBill();
                    break;

                case ActionTypes.BILL_LOAD_SUCCESS:
                    bill = action.bill;
                    this.emitChange();
                    break;

                default:
            }
        });
    }
}

export default new BillStore();
