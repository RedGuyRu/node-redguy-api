const ApiRequest = require("../ApiRequest");

class Users {

    options;

    constructor(options) {
        this.options = options;
    }

    serverinfo(host) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/minecraft/serverinfo",this.options,{host})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Users;