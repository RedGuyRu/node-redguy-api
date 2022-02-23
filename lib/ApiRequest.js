const axios = require("axios");
const ApiError = require("./ApiError");

class ApiRequest {
    static mainGet(path, options, params = {}) {
        params.token = options.token;
        return new Promise((resolve, reject) => {
            axios.get("https://api.redguy.ru/" + path + "/",
                {
                    params
                }).then((response) => {
                let result = response.data;
                if (!result) reject(undefined);
                else if (result.code !== 1) {
                    reject(new ApiError(result.code, result.comment, response));
                } else {
                    resolve(result);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }

    static mainPost(path, options, body, params = {}) {
        params.token = options.token;
        return new Promise((resolve, reject) => {
            axios.post("https://api.redguy.ru/" + path + "/",
                body,
                {
                    params
                }).then((response) => {
                let result = response.data;
                if (result.code !== 1) {
                    // noinspection JSUnresolvedVariable
                    reject(new ApiError(result.code, result.comment, response));
                } else {
                    resolve(result);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

module.exports = ApiRequest;