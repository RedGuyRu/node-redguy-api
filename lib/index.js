class RedGuyApi {

    token;
    v;

    constructor(token,options = {}) {
        this.token = token;
        if(options.v === undefined) {
            this.v = '1.1';
        } else {
            this.v = options.v;
        }
    }

    Math() {
        return new (require('./Math'))(this.token,this.v);
    }

    Store() {
        return new (require('./Store'))(this.token,this.v);
    }
}

module.exports = RedGuyApi;