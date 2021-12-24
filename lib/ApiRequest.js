const axios = require("axios");
const ApiError = require("./ApiError");

class ApiRequest {
    static mainGet(path, options, params = {}) {
        params.token = options.token;
        return new Promise((resolve, reject) => {
            axios.get("https://api.redguy.ru/" + path + "/",
                {
                    params
                }).catch((error) => {
                reject(error);
            }).then((response) => {
                let result = response.data;
                if (!result) reject(undefined);
                else if (result.code !== 1) {
                    reject(new ApiError(result.code, result.comment, response));
                } else {
                    resolve(result);
                }
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
                }).catch((error) => {
                reject(error);
            }).then((response) => {
                let result = response.data;
                if (result.code !== 1) {
                    // noinspection JSUnresolvedVariable
                    reject(new ApiError(result.code, result.comment, response));
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = ApiRequest;