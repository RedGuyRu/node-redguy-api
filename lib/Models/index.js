const ApiRequest = require("../ApiRequest");

class NLP {

    options;

    constructor(options) {
        this.options = options;
    }

    predict(name) {
        return new Promise((resolve, reject) => {
            ApiRequest.post("v1/models/predict",this.options,{name},{})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                    if(typeof result === "undefined") {
                        reject(null);
                    } else {
                        resolve(result.response);
                    }
            });
        });
    }

    get(job) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/models/predict",this.options,{job},{})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                    if(typeof result === "undefined") {
                        reject(null);
                    } else {
                        resolve(result.response);
                    }
            });
        });
    }
}

module.exports = NLP;