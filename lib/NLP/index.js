const ApiRequest = require("../ApiRequest");

class NLP {

    options;

    constructor(options) {
        this.options = options;
    }

    getModel(model) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/nlp/model",this.options,{model})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    createModel(name) {
        return new Promise((resolve, reject) => {
            ApiRequest.post("v1/nlp/model",this.options,{name})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    deleteModel(model) {
        return new Promise((resolve, reject) => {
            ApiRequest.delete("v1/nlp/model",this.options,{model})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    getModels() {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/nlp/models",this.options)
            .catch((error) => {
                reject(error);
            }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    createIntent(model, name) {
        return new Promise((resolve, reject) => {
            ApiRequest.post("v1/nlp/intent",this.options,{model, name})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    deleteIntent(intent) {
        return new Promise((resolve, reject) => {
            ApiRequest.delete("v1/nlp/intent",this.options,{intent})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    getIntents(model) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/nlp/intents",this.options,{model})
            .catch((error) => {
                reject(error);
            }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    addIntentExample(intent, example) {
        return new Promise((resolve, reject) => {
            ApiRequest.post("v1/nlp/text",this.options,{intent, text:example})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    deleteIntentExample(exampleId) {
        return new Promise((resolve, reject) => {
            ApiRequest.delete("v1/nlp/text",this.options,{text:exampleId})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    getIntentExamples(intent) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/nlp/texts",this.options,{intent})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    getIntentExample(exampleId) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/nlp/text",this.options,{text:exampleId})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    train(model) {
        return new Promise((resolve, reject) => {
            ApiRequest.post("v1/nlp/train",this.options,{model})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                if(typeof result === "undefined") {
                    reject(null);
                } else {
                    resolve(result.response);
                }
            });
        });
    }

    getTrainingStatus(job) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/nlp/train",this.options,{job})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                    if(typeof result === "undefined") {
                        reject(null);
                    } else {
                        resolve(result.response);
                    }
            });
        });
    }

    predict(model, text) {
        return new Promise((resolve, reject) => {
            ApiRequest.get("v1/nlp/predict",this.options,{model, text})
                .catch((error) => {
                    reject(error);
                }).then((result) => {
                    if(typeof result === "undefined") {
                        reject(null);
                    } else {
                        resolve(result.response);
                    }
            });
        });
    }
}

module.exports = NLP;