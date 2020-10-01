const { openSync, writeSync, closeSync } = require('fs');
const { resolve } = require('path');

// OPTIMIZE: Rewrite using async methods
module.exports = {

    csv: function(options) {
        let path = this.parse(options.path);
        let data = this.parse(options.data);
        let header = this.parse(options.header);
        let delimiter = this.parse(options.delimiter);
        let overwrite = this.parse(options.overwrite);
        
        if (typeof path != 'string') throw new Error('export.csv: path is required.');
        if (!Array.isArray(data) || !data.length) throw new Error ('export.csv: data is required.');
        
        delimiter = typeof delimiter == 'string' ? delimiter : ',';

        if (delimiter == '\\t') delimiter = '\t';

        path = resolve('public', path);

        if (!overwrite) {
            // get unique file
        }

        const fd = openSync(path, 'w');

        if (header) {
            putcsv(fd, Object.keys(data[0]), delimiter);
        }

        for (let row of data) {
            putcsv(fd, row, delimiter);
        }

        closeSync(fd);

        return path;
    },

    xml: function(options) {
        let path = this.parse(options.path);
        let data = this.parse(options.data);
        let root = this.parse(options.root);
        let item = this.parse(options.item);
        let overwrite = this.parse(options.overwrite);

        if (typeof path != 'string') throw new Error('export.xml: path is required.');
        if (!Array.isArray(data) || !data.length) throw new Error('export.xml: data is required.');

        root = typeof root == 'string' ? root : 'export';
        item = typeof item == 'string' ? item : 'item';
        path = resolve('public', path);

        const fd = openSync(path, 'w');
        writeSync(fd, `<?xml version="1.0" encoding="UTF-8" ?>`);
        writeSync(fd, `<${root}>`);
        for (let row of data) {
            writeSync(fd, `<${item}>`);
            for (let prop in row) {
                writeSync(fd, `<${prop}><![CDATA[${row[prop]}]]></${prop}>`);
            }
            writeSync(fd, `</${item}>`);
        }
        writeSync(fd, `</${root}>`);
        closeSync(fd);

        return path;
    },

};

function putcsv(fd, data, delimiter) {
    let str = '';

    if (typeof data != 'object') {
        throw new Error('putcsv: Invalid data.');
    }

    for (let prop in data) {
        if (data.hasOwnProperty(prop)) {
            let value = String(data[prop]);

            if (/["\n\r\t\s]/.test(value) || value.includes(delimiter)) {
                let escaped = false;
                
                str += '"';

                for (let i = 0; i < value.length; i++) {
                    if (value.charAt(i) == '\\') {
                        escaped = true;
                    } else if (!escaped && value.charAt(i) == '"') {
                        str += '"';
                    } else {
                        escaped = false;
                    }

                    str += value.charAt(i);
                }

                str += '"';
            } else {
                str += value;
            }

            str += delimiter;
        }
    }

    if (!str) {
        throw new Error('putcsv: No data.');
    }

    writeSync(fd, str.substr(0, str.length - delimiter.length) + '\r\n');
}