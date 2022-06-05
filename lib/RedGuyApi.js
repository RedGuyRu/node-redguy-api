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
}

module.exports = RedGuyApi;