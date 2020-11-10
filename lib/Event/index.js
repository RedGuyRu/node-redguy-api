const ApiRequest = require("../ApiRequest");
const Coins = require("./Coins");

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
}

module.exports = Event;