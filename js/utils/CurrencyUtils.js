import { Config } from '../constants/BillConstants';

export default {
    formatCurrency(value) {
        return `${Config.CURRENCY_PREFIX}${value.toFixed(2)}`;
    }
}
