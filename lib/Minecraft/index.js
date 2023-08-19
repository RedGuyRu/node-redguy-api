const ApiRequest = require("../ApiRequest");

class Minecraft {

    options;

    constructor(options) {
        this.options = options;
    }

    serverinfo(host) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/minecraft/serverinfo",this.options,{host})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Minecraft;