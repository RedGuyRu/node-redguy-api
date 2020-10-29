const axios = require("axios");
const ApiError = require("./ApiError");

class ApiRequest {
    static main(path, options, params = {}) {
        params.token = options.token;
        params.v = options.v;
        return new Promise((resolve, reject) => {
            axios.get("https://api.redguy.ru/"+path+"/",
                {
                    params
                }).catch((error) => {
                reject(error);
            }).then((response) => {
                let result = response.data;
                if(result.code !== 1) {
                    reject(new ApiError(result.code,result.comment,response));
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = ApiRequest;