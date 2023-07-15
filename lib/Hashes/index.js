const ApiRequest = require("../ApiRequest");

class Hashes {

    options;

    constructor(options) {
        this.options = options;
    }

    getMD5(hash) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/hashes/md5", this.options, {hash})
                .then((result) => {
                    resolve(result.response.value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    indexMD5(value) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("v1/hashes/md5", this.options, {value})
                .then((result) => {
                    resolve(result.response.hash);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getMysql(hash) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/hashes/mysql", this.options, {hash})
                .then((result) => {
                    resolve(result.response.value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    indexMysql(value) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("v1/hashes/mysql", this.options, {value})
                .then((result) => {
                    resolve(result.response.hash);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getNtml(hash) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/hashes/ntml", this.options, {hash})
                .then((result) => {
                    resolve(result.response.value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    indexNtml(value) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("v1/hashes/ntml", this.options, {value})
                .then((result) => {
                    resolve(result.response.hash);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getSha1(hash) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/hashes/sha1", this.options, {hash})
                .then((result) => {
                    resolve(result.response.value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    indexSha1(value) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("v1/hashes/sha1", this.options, {value})
                .then((result) => {
                    resolve(result.response.hash);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getSha256(hash) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/hashes/sha256", this.options, {hash})
                .then((result) => {
                    resolve(result.response.value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    indexSha256(value) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("v1/hashes/sha256", this.options, {value})
                .then((result) => {
                    resolve(result.response.hash);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getSha512(hash) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainGet("v1/hashes/sha512", this.options, {hash})
                .then((result) => {
                    resolve(result.response.value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    indexSha512(value) {
        return new Promise((resolve, reject) => {
            ApiRequest.mainPost("v1/hashes/sha512", this.options, {value})
                .then((result) => {
                    resolve(result.response.hash);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

module.exports = Hashes;