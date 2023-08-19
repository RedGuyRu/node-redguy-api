const axios = require("axios");
const ApiError = require("./ApiError");

class ApiRequest {
    static checkOptions(options) {
        if(!options.requireToken) options.requireToken = true;
        return options;
    }

    static get(path, options, params = {}, requestOptions = {}) {
        requestOptions = ApiRequest.checkOptions(requestOptions);
        if(requestOptions.requireToken && !options.token) throw new Error("Token is required");
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
    static delete(path, options, params = {}, requestOptions = {}) {
        requestOptions = ApiRequest.checkOptions(requestOptions);
        if(requestOptions.requireToken && !options.token) throw new Error("Token is required");
        params.token = options.token;
        return new Promise((resolve, reject) => {
            axios.delete("https://api.redguy.ru/" + path + "/",
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

    static post(path, options, body, params = {}, requestOptions = {}) {
        requestOptions = ApiRequest.checkOptions(requestOptions);
        if(requestOptions.requireToken && !options.token) throw new Error("Token is required");
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

    static put(path, options, body, params = {}, requestOptions = {}) {
        requestOptions = ApiRequest.checkOptions(requestOptions);
        if(requestOptions.requireToken && !options.token) throw new Error("Token is required");
        params.token = options.token;
        return new Promise((resolve, reject) => {
            axios.put("https://api.redguy.ru/" + path + "/",
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