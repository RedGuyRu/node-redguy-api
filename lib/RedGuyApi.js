class RedGuyApi {

    options = {};

    constructor(token,options = {}) {
        options.token = token;

        if(typeof options.v === "undefined") {
            options.v = "1.1";
        }

        this.options = options;
    }

    Minecraft() {
        return new (require("./Minecraft"))(this.options);
    }
}

module.exports = RedGuyApi;