jest.dontMock('../CurrencyUtils');
jest.dontMock('../../constants/BillConstants');
//jest.dontMock('keymirror');

const CurrencyUtils = require('../CurrencyUtils');

describe('CurrencyUtils', function() {
    it('formats a value with the configured currency prefix', function() {
        expect(CurrencyUtils.formatCurrency(12.5)).toBe('£12.50');
    });
});
