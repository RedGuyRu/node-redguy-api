const ApiRequest = require("../ApiRequest");

class Users {

    options;

    constructor(options) {
        this.options = options;
    }

    get() {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/users/get",this.options,{})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Users;