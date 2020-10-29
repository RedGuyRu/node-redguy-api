const axios = require("axios");
const ApiError = require("../ApiError");
const ApiRequest = require("../ApiRequest");

class Json {

    options;

    constructor(options) {
        this.options = options;
    }

    get(bukkit) {
        return new Promise((resolve, reject) => {
            ApiRequest.main("store/json/get",this.options,{bukkit})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(JSON.parse(result.response.data));
            });
        });
    }

    set(bukkit, data) {
        return new Promise((resolve, reject) => {
            axios.post("https://api.redguy.ru/store/json/set/",
                JSON.stringify(data),
                {
                    params: {
                        token: this.token,
                        v: this.v,
                        bukkitname:bukkit
                    }
                }).catch((error) => {
                reject(error);
            }).then((response) => {
                let result = response.data;
                if(result.code !== 1) {
                    reject(new ApiError(result.code,result.comment,response));
                } else {
                    resolve(result.response);
                }
            });
        });
    }
}

module.exports = Json;