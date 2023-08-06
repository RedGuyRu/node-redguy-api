const ApiRequest = require("../ApiRequest");

class Audience {

    options;

    constructor(options) {
        this.options = options;
    }

    postUser(service_id, user_id, data = {}) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("v1/audience/user", this.options, {service_id, user_id, data})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Audience;