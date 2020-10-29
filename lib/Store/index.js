class Store {

    token;
    v;

    constructor(token,v) {
        this.token = token;
        this.v = v;
    }

    Json() {
        return new (require('./json'))(this.token,this.v);
    }
}

module.exports = Store;