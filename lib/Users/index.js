const ApiRequest = require("../ApiRequest");

class Users {

    options;

    constructor(options) {
        this.options = options;
    }

    get(id,additional) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/get",this.options,{id,additional:additional.getResult()})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                let res = result.response;
                res.id = parseInt(res.id,10);
                resolve(res);
            });
        });
    }

    Balance() {
        return new (require("./Balance"))(this.options);
    }
}

module.exports = Users;