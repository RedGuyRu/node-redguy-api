const axios = require("axios");
const ApiError = require("../ApiError");

class Math {

    token;
    v;

    constructor(token,v) {
        this.token = token;
        this.v = v;
    }

    get(level,number) {s
        return new Promise((resolve, reject) => {
            axios.get("https://api.redguy.ru/math/get/",
                {
                    params: {
                        token: this.token,
                        v: this.v,
                        level,
                        number
                    }
                }).catch((error) => {
                    reject(error);
            }).then((response) => {
                let result = response.data;
                if(result.code !== 1) {
                    reject(new ApiError(result.code,result.comment,response));
                } else {
                    resolve(parseInt(result.response.result,10));
                }
            });
        });
    }

    max(level) {
        return new Promise((resolve, reject) => {
            axios.get("https://api.redguy.ru/math/max/",
                {
                    params: {
                        token: this.token,
                        v: this.v,
                        level
                    }
                }).catch((error) => {
                reject(error);
            }).then((response) => {
                let result = response.data;
                if(result.code !== 1) {
                    reject(new ApiError(result.code,result.comment,response));
                } else {
                    resolve(result.response.max);
                }
            });
        });
    }
}

module.exports = Math;