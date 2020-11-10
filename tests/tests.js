const RedGuyApi = require("../lib");
const levels = require("../lib/Math/NumberLevels");
const additional = require("../lib/Users/Additional");

let api = new RedGuyApi(process.env.TOKEN);

let Math = api.Math();

Math.get(levels.factorial,2).then((result) => {
   if(parseInt(result.toString(),10) === 2) {
       console.log("math.get - OK!")
   } else {
       console.error("math.get - Error! Getted "+result)
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

Store.Json().set("test",{time:ts}).then((data) => {
    Store.Json().get("test").then((data) => {
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
});

let Users = api.Users();

Users.get(1,new additional().avatar().mine_nick().background()).then((data) => {
    if(data.id === 1) {
        console.log("users.get - OK!");
    } else {
        console.error("users.get - Error! "+JSON.stringify(data));
        process.exit(-1);
    }
}).catch(e => {
    console.log("uses.get - Error!");
    console.error(e);
    process.exit(-1);
})

let Event = api.Event();

Event.getStats("b12").then((data) => {
    if(isFinite(data.wins)) {
        console.log("event.stats.get - OK!");
    } else {
        console.error("event.stats.get - Error! "+JSON.stringify(data));
        process.exit(-1);
    }
}).catch(e => {
    console.log("event.stats.get - Error!");
    console.error(e);
    process.exit(-1);
})

Event.Coins().get("b12").then((data) => {
    if(isFinite(data)) {
        console.log("event.coins.get - OK!");
    } else {
        console.error("event.coins.get - Error! "+data);
        process.exit(-1);
    }
}).catch(e => {
    console.log("event.coins.get - Error!");
    console.error(e);
    process.exit(-1);
})