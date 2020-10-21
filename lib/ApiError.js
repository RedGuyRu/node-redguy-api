module.exports = class ApiError extends Error {
    constructor(code, message, response) {
        super();

        this.message = message;
        this.response = response;
        this.code = code;
    }
};