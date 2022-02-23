const ApiRequest = require("../ApiRequest");

class News {

    options;

    constructor(options) {
        this.options = options;
    }

    static get(tag = "") {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/news",{},{tag})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                resolve(result.response.news);
            });
        });
    }
}

module.exports = News;
