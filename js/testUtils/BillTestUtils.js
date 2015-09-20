import fs from 'fs';

export default {
    mockBill() {
        // For some reason simply requiring the json file wasn't parsing arrays properly, leaving them empty!
        return JSON.parse(fs.readFileSync('shortBill.json'));
    }
}
