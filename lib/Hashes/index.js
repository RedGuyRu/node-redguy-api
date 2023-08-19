const ApiRequest = require("../ApiRequest");
const ApiError = require("../ApiError");

class Hashes {

    options;

    constructor(options) {
        this.options = options;
    }

    async getMD5(hash) {
        try {
            let req = await ApiRequest.get("v1/hashes/md5", this.options, {hash});
            return req.response.value;
        } catch (e) {
            if(e instanceof ApiError&& e.code === 19) {
                return null;
            } else {
                throw e;
            }
        }
    }

    async indexMD5(value) {
        let req = await ApiRequest.post("v1/hashes/md5", this.options, {},{value});
        return req.response.hash;
    }

    async getMysql(hash) {
        try {
            let req = await ApiRequest.get("v1/hashes/mysql", this.options, {hash});
            return req.response.value;
        } catch (e) {
            if(e instanceof ApiError&& e.code === 19) {
                return null;
            } else {
                throw e;
            }
        }
    }

    async indexMysql(value) {
        let req = await ApiRequest.post("v1/hashes/mysql", this.options, {},{value});
        return req.response.hash;
    }

    async getNtml(hash) {
        try {
            let req = await ApiRequest.get("v1/hashes/ntml", this.options, {hash});
            return req.response.value;
        } catch (e) {
            if(e instanceof ApiError&& e.code === 19) {
                return null;
            } else {
                throw e;
            }
        }
    }

    async indexNtml(value) {
        let req = await ApiRequest.post("v1/hashes/ntml", this.options, {}, {value});
        return req.response.hash;
    }

    async getSha1(hash) {
        try {
            let req = await ApiRequest.get("v1/hashes/sha1", this.options, {hash});
            return req.response.value;
        } catch (e) {
            if (e instanceof ApiError && e.code === 19) {
                return null;
            } else {
                throw e;
            }
        }
    }

    async indexSha1(value) {
        let req = await ApiRequest.post("v1/hashes/sha1", this.options, {}, {value});
        return req.response.hash;
    }

    async getSha256(hash) {
        try {
            let req = await ApiRequest.get("v1/hashes/sha256", this.options, {hash});
            return req.response.value;
        } catch (e) {
            if (e instanceof ApiError && e.code === 19) {
                return null;
            } else {
                throw e;
            }
        }
    }

    async indexSha256(value) {
        let req = await ApiRequest.post("v1/hashes/sha256", this.options, {}, {value});
        return req.response.hash;
    }

    async getSha512(hash) {
        try {
            let req = await ApiRequest.get("v1/hashes/sha512", this.options, {hash});
            return req.response.value;
        } catch (e) {
            if (e instanceof ApiError && e.code === 19) {
                return null;
            } else {
                throw e;
            }
        }
    }

    async indexSha512(value) {
        let req = await ApiRequest.post("v1/hashes/sha512", this.options, {}, {value});
        return req.response.hash;
    }
}

module.exports = Hashes;