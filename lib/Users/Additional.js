class Additional {

    result;

    constructor() {
        this.result = "";
    }

    mine_nick() {
        if(this.result.length !== 0) { this.result+= ","; }
        this.result+="mine_nick";
        return this;
    }

    avatar() {
        if(this.result.length !== 0) { this.result+= ","; }
        this.result+="avatar";
        return this;
    }

    background() {
        if(this.result.length !== 0) { this.result+= ","; }
        this.result+="background";
        return this;
    }

    getResult() {
        return this.result;
    }
}

module.exports = Additional;