const RedGuyApi = require("../lib");
const levels = require("../lib/Math/NumberLevels");

let api = new RedGuyApi(process.env.TOKEN);

api.Math().get(levels.factorial,2).then((result) => {
   console.log(result);
}).catch((e) => {
    console.log(e);
});
