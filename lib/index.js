class RedGuyApi {

    options = {};

    constructor(token,options = {}) {
        options.token = token;

        if(options.v === undefined) {
            options.v = '1.1';
        }

        this.options = options;
    }

    Math() {
        return new (require('./Math'))(this.options);
    }

    Store() {
        return new (require('./Store'))(this.options);
    }
}

module.exports = RedGuyApi;