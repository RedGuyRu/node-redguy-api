class RedGuyApi {

    options = {};

    constructor(token,options = {}) {
        options.token = token;

        this.options = options;
    }

    Minecraft() {
        return new (require("./Minecraft"))(this.options);
    }

    Users() {
        return new (require("./Users"))(this.options);
    }

    Hashes() {
        return new (require("./Hashes"))(this.options);
    }

    Links() {
        return new (require("./Links"))(this.options);
    }

    Quotes() {
        return new (require("./Quotes"))(this.options);
    }

    Logs() {
        return new (require("./Logs"))(this.options);
    }

    Texts() {
        return new (require("./Texts"))(this.options);
    }

    NLP() {
        return new (require("./NLP"))(this.options);
    }

    Audience() {
        return new (require("./Audience"))(this.options);
    }

    Models() {
        return new (require("./Models"))(this.options);
    }
}

module.exports = RedGuyApi;