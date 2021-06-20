const ApiRequest = require("../ApiRequest");

class Json {

    options;

    constructor(options) {
        this.options = options;
    }

    get(bukkit) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("store/json/get",this.options,{bukkitname:bukkit})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(JSON.parse(result.response.data));
            });
        });
    }

    set(bukkit, data) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("store/json/set",this.options,JSON.stringify(data),{bukkitname:bukkit})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response.data);
            });
        });
    }
}

module.exports = Json;