const ApiRequest = require("../ApiRequest");

class Users {

    options;

    constructor(options) {
        this.options = options;
    }

    serverinfo(ip,port = 25565, type = "ping") {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("minecraft/serverinfo",this.options,{ip,port,type})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Users;