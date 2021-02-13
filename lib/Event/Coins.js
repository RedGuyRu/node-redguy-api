const ApiRequest = require("../ApiRequest");

// noinspection JSUnusedGlobalSymbols
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

    add(nick,coins) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/coins/add",this.options,{nick,coins})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }

    set(nick,coins) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/coins/set",this.options,{nick,coins})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Coins;