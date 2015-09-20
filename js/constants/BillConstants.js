import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
    BILL_LOAD: null,
    BILL_LOAD_SUCCESS: null
});

const Config = require('../../config.json');

export { ActionTypes, Config };
