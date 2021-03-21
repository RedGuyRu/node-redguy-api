class Store {

    options;

    constructor(options) {
        this.options = options;
    }

    Json() {
        return new (require("./json"))(this.options);
    }
}

module.exports = Store;