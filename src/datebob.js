/**
 * DateBobJS
 * @author Aurelian Hermand (Bitfertig)
 */


var datebob_strtotime = require('./strtotime.js');
var datebob_date = require('./date.js');

class DateBob extends Date {
    constructor() {
        let arg0 = arguments[0];
        let date = new Date(); // default

        if (typeof arg0 == 'number') {
            date = new Date(arg0);
        }
        if (typeof arg0 == 'string') {
            let str = arg0;
            let now = +date / 1000;
            // https://locutus.io/php/datetime/strtotime/
            let time = datebob_strtotime(str, now);
            date = new Date(time * 1000);
        }
        if (typeof arg0 == 'object' && arg0.constructor.name == 'DateBob') {
            return arg0;
        }

        super(date);

        return this;
    }

    modify(str) {
        let current = +(this) / 1000;
        // https://locutus.io/php/datetime/strtotime/
        let time = datebob_strtotime(str, current);
        this.setTime(time * 1000);
        return this;
    }

    format(format) {
        // https://locutus.io/php/datetime/date/
        let str = datebob_date(format, +this / 1000);
        return str;
    }

    // Usage: var datebob = DateBob.func; datebob();
    static func() {
        return new DateBob(...arguments);
    }
}

export { DateBob };

