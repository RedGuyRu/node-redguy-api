const ApiRequest = require("../ApiRequest");

class Links {

    options;

    constructor(options) {
        this.options = options;
    }

    isSafe(link) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/links/safe",this.options,{link})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response.domains);
            });
        });
    }
}

module.exports = Links;
