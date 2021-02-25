const ApiRequest = require("../ApiRequest");
const Coins = require("./Coins");
const Tokens = require("./Tokens");
const Wins = require("./Wins");
const Kills = require("./Kills");

// noinspection JSUnusedGlobalSymbols
class Event {

    options;

    constructor(options) {
        this.options = options;
    }

    getStats(nick) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("event/stats/get",this.options,{nick})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(result.response);
            });
        });
    }

    Coins() {
        return new Coins(this.options);
    }

    Tokens() {
        return new Tokens(this.options);
    }

    Wins() {
        return new Wins(this.options);
    }

    Kills() {
        return new Kills(this.options);
    }
}

module.exports = Event;