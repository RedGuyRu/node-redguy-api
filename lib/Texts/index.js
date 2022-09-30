const ApiRequest = require("../ApiRequest");

class Texts {

    options;

    constructor(options) {
        this.options = options;
    }

    parse(text, lang = "ru_ru") {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("v1/text/parse",this.options,{
                text, lang
            }).catch((error) => {
                reject(error);
            }).then((result) => {
                resolve(result.response);
            });
        });
    }
}

module.exports = Texts;