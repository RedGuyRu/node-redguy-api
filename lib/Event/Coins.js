const ApiRequest = require("../ApiRequest");

class Coins {

    options;

    constructor(options) {
        this.options = options;
    }

    get(nick) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/coins/get",this.options,{nick})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(parseInt(result.response.coins,10));
            });
        });
    }
}

module.exports = Coins;