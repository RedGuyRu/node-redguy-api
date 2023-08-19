const ApiRequest = require("../ApiRequest");

class Audience {

    options;

    constructor(options) {
        this.options = options;
    }

    async postUser(service_id, user_id, data = {}) {
        let req = await ApiRequest.post("v1/audience/user", this.options, {service_id, user_id, data});
        return req.response;
    }
}

module.exports = Audience;