const ApiRequest = require("../ApiRequest");
const DateTime = require("luxon").DateTime;

class Token {

    _options;

    constructor(options) {
        this._options = options;
    }

    static issue(appId, secret, scopes = [], options = {}) {
        let ts = DateTime.utc().toSeconds();
        return new Promise((resolve, reject) => {
            let body = {app:appId,secret:require('crypto').createHash('md5').update(secret+ts).digest("hex"),ts,scopes:scopes.join(",")};
            if(options.name) body.name = options.name;
            ApiRequest.post("v1/token/issue",options,body,{})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Token;