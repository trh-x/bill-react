import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
    BILL_LOAD: null,
    BILL_LOAD_SUCCESS: null
});

const Config = {
    BILL_URL: 'https://still-scrubland-9880.herokuapp.com/bill.json'
};

export { ActionTypes, Config };
