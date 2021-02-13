const ApiRequest = require("../ApiRequest");

// noinspection JSUnusedGlobalSymbols
class Wins {

    options;

    constructor(options) {
        this.options = options;
    }

    get(nick) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/wins/get",this.options,{nick})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(parseInt(result.response.tokens,10));
            });
        });
    }

    add(nick,tokens) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/wins/add",this.options,{nick,tokens})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }

    set(nick,tokens) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/wins/set",this.options,{nick,tokens})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Wins;