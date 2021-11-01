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
}

module.exports = RedGuyApi;