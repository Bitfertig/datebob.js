/**
 * CarbonJS
 * @author Aurelian Hermand (Bitfertig)
 */

class Carbon extends Date {
    constructor() {
        super(...arguments);

        let arg0 = arguments[0];

        this.date = new Date(); // default

        if (typeof arg0 == 'number') {
            this.date = new Date(arg0);
        }
        if (typeof arg0 == 'string') {
            let time = this.strtotime(arg0);
            this.date = new Date(time * 1000);
        }
        if (typeof arg0 == 'object' && arg0.constructor.name == 'Carbon') {
            return arg0;
        }

        return this;
        
    }
  
    modify(str) {
        let now = +(this.date) / 1000;
        // https://locutus.io/php/datetime/strtotime/
        let time = window.strtotime(str, now);
        let date = new Date(time * 1000);
        this.date = date;
        return this;
    }

    strtotime(str) {
        let now = +(new Date()) / 1000;
        // https://locutus.io/php/datetime/strtotime/
        let time = window.strtotime(str, now);
        return time;
    }

    format(format) {
        // https://locutus.io/php/datetime/date/
        let str = window.date(format, +this.date / 1000);
        return str;
    }
}

function carbon() { return new Carbon(...arguments); }


