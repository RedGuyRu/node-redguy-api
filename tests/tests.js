const RedGuyApi = require("../lib").RedGuyApi;
const levels = require("../lib/Math/NumberLevels");

let api = new RedGuyApi(process.env.TOKEN);

//let Math = api.Math();

/*Math.get(levels.factorial,2).then((result) => {
   if(parseInt(result.toString(),10) === 2) {
       console.log("math.get - OK!");
   } else {
       console.error("math.get - Error! Got "+result);
       process.exit(-1);
   }
}).catch((e) => {
    console.log("math.get - Error!");
    console.error(e);
    process.exit(-1);
});

Math.max(levels.factorial).then((result) => {
    console.log("math.max - OK! result: "+result);
}).catch((e) => {
    console.log("math.max - Error!");
    console.error(e);
    process.exit(-1);
});*/

/*let Store = api.Store();
let ts = Date.now().valueOf();

Store.Json().set("test",{time:ts}).then(() => {
    Store.Json().get("test").then((data) => {
        if(data.time === ts) {
            console.log("store.json.set - OK!");
            console.log("store.json.get - OK!");
        } else {
            console.error("store.json.get - Error! Got " + data.test);
            process.exit(-1);
        }
    }).catch((e) => {
        console.log("store.json.get - Error!");
        console.error(e);
        process.exit(-1);
    });
}).catch((e) => {
    console.log("store.json.set - Error!");
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
});

Users.Balance().get(1).then((data) => {
    // noinspection JSCheckFunctionSignatures
    if(isFinite(data)) {
        console.log("users.balance.get - OK! result: "+data);
    } else {
        console.error("users.balance.get - Error! "+data);
        process.exit(-1);
    }
}).catch(e => {
    console.log("users.balance.get - Error!");
    console.error(e);
    process.exit(-1);
});*/

api.Minecraft().serverinfo("redguy.ru").then((data) => {
    if(data.description === "§cRedGuyGames §6game server!") {
        console.log("minecraft.serverinfo - OK!");
    } else {
        console.error("minecraft.serverinfo - Error! "+data.description.text);
        process.exit(-1);
    }
}).catch(e => {
    console.log("minecraft.serverinfo - Error!");
    console.error(e);
    process.exit(-1);
});
