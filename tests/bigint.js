const RedGuyApi = require("../lib");
const levels = require("../lib/Math/NumberLevels");

let api = new RedGuyApi(process.env.TOKEN);

let Math = api.Math();

Math.get(levels.factorial,50448).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log("math.get - Error!");
    console.error(e);
    process.exit(-1);
});