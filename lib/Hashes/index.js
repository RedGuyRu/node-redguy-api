const ApiRequest = require("../ApiRequest");

class Hashes {

    options;

    constructor(options) {
        this.options = options;
    }

    getMD5(hash) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/hashes/md5", this.options, {hash})
                .then((result) => {
                    resolve(result.response.value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

module.exports = Hashes;