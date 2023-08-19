const ApiRequest = require("../ApiRequest");

class Quotes {

    options;

    constructor(options) {
        this.options = options;
    }

    get(id = undefined) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/quotes/quote",this.options,id===undefined?{}:{id})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Quotes;