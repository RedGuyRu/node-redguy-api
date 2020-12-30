const ApiRequest = require("../ApiRequest");

class Balance {

    options;

    constructor(options) {
        this.options = options;
    }

    get(id) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("users/balance/get",this.options,{id})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(parseInt(result.response.balance));
            });
        });
    }
}

module.exports = Balance;