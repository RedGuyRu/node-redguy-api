const axios = require("axios");
const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Math {

    options;

    constructor(options) {
        this.options = options;
    }

    get(level,number) {
        return new Promise((resolve, reject) => {
            ApiRequest.main("math/get",this.options,{level,number})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(parseInt(result.response.result,10));
            });
        });
    }

    max(level) {
        return new Promise((resolve, reject) => {
            ApiRequest.main("math/max", this.options, {level})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response.max);
            });
        });
    }
}

module.exports = Math;