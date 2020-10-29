const axios = require("axios");
const ApiError = require("../ApiError");

class Json {

    token;
    v;

    constructor(token,v) {
        this.token = token;
        this.v = v;
    }

    get(bukkit) {
        return new Promise((resolve, reject) => {
            axios.get("https://api.redguy.ru/store/json/get/",
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
                    resolve(JSON.parse(result.response.data));
                }
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