const RedGuyApi = require("../lib");
const levels = require("../lib/Math/NumberLevels");

let api = new RedGuyApi(process.env.TOKEN);

let Math = api.Math();

Math.get(levels.factorial,2).then((result) => {
   if(result === 2) {
       console.log("math.get - OK!")
   } else {
       console.error("math.get - Error! Getted"+result)
       process.exit(-1);
   }
}).catch((e) => {
    console.log("math.get - Error!")
    console.error(e);
    process.exit(-1);
});

Math.max(levels.factorial).then((result) => {
    console.log("math.max - OK! result: "+result)
}).catch((e) => {
    console.log("math.max - Error!")
    console.error(e);
    process.exit(-1);
});

let Store = api.Store();
let ts = Date.now().valueOf();

Store.Json().set("test",{time:ts}).then(data => {
    Store.Json().get("test").then(data => {
        if(data.time === ts) {
            console.log("store.json.set - OK!")
            console.log("store.json.get - OK!")
        } else {
            console.error("store.json.get - Error! Getted " + data.test)
            process.exit(-1);
        }
    }).catch(e => {
        console.log("store.json.get - Error!")
        console.error(e);
        process.exit(-1);
    })
}).catch(e => {
    console.log("store.json.set - Error!")
    console.error(e);
    process.exit(-1);
})