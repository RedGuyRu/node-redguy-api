const RedGuy = require("../lib");

let api = new RedGuy.RedGuyApi(process.env.TOKEN);


/*api.Minecraft().serverinfo("redguy.ru").then((data) => {
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
*/