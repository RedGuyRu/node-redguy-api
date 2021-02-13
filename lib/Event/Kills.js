const ApiRequest = require("../ApiRequest");

// noinspection JSUnusedGlobalSymbols
class Kills {

    options;

    constructor(options) {
        this.options = options;
    }

    get(nick) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/kills/get",this.options,{nick})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(parseInt(result.response.kills,10));
            });
        });
    }

    add(nick,kills) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/kills/add",this.options,{nick,kills})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }

    set(nick,kills) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/kills/set",this.options,{nick,kills})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Kills;