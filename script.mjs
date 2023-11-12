import GDAPI from "./GDAPI.js";
import StringUtils from "./StringUtils.mjs";
//import Client from "./node_modules/gd.js/esm/index.js"; // grrrrrrrr

const api = new GDAPI();
//const client = new Client();

debugTest();
run();

async function run() {
    var args = [
        "\n %c %c %c Geometry Dash Site LOADED",
        'background: #ff66a5; padding:5px 0;',
            'background: #ff66a5; padding:5px 0;',
            'color: #ff66a5; background: #030307; padding:5px 0;'
    ];
    console.log.apply(this, args);
    if (document.URL.includes("user")) {
        let nameText = document.getElementById("nameText");
        let params = document.URL.split("?");
        let urlParams = new URLSearchParams(params[1]);
        let id = urlParams.get("id");
        
        console.log(await api.getUser(id));

        // let user = await client.users.getByAccountID(parseFloat(id));
        // console.log(user.username);
        // nameText.innerText = "Name: " + user.username;

        // let xhr = new XMLHttpRequest();
        // xhr.open("GET", "https://boomlings.com/database/getGJUserInfo20.php");
        // xhr.setRequestHeader("secret", "Wmfd2893gb7");
        // xhr.setRequestHeader("targetAccountID", id);
        // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // console.log(xhr.send());
    }
}

// Test my StringUtils, this is used to decode Geometry Dash's user information
function debugTest() {
    let test = "1:YesCool:2:Yippee";
    let stringUtils = new StringUtils();
    console.log(stringUtils.SplitNum(test, ":"));
}