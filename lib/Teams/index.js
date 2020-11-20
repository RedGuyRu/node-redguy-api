const ApiRequest = require("../ApiRequest");

class Teams {

    options;

    constructor(options) {
        this.options = options;
    }

    get(id,socNet) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("teams/users/get",this.options,{id,type:socNet})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Teams;