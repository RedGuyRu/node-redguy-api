const ApiRequest = require("../ApiRequest");

class Logs {

    options;

    constructor(options) {
        this.options = options;
    }

    write(service, level, message, category = undefined, payload = undefined) {
        return new Promise((resolve, reject) => {
            ApiRequest.put("v1/logs",this.options,{
                service,
                content:message,
                level,
                payload: JSON.stringify(payload),
                category
            })
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

module.exports = Logs;