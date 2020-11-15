const ApiRequest = require("../ApiRequest");

class Coins {

    options;

    constructor(options) {
        this.options = options;
    }

    get(nick) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/tokens/get",this.options,{nick})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(parseInt(result.response.tokens,10));
            });
        });
    }

    add(nick,tokens) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/tokens/add",this.options,{nick,tokens})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }

    set(nick,tokens) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/tokens/set",this.options,{nick,tokens})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Coins;