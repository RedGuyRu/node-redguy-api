const ApiRequest = require("../ApiRequest");

class Math {

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
}

module.exports = Math;