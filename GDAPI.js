import StringUtils from "./StringUtils.mjs";

/**
 * Geometry Dash API, unusable as of now
 * @requires StringUtils to parse the user data when running `parseUser`
 */
export default class GDAPI {
    /**
     * Gets the raw data for a user
     * @param {string} id The ID of the user
     * @returns The raw user data, recommend to split by every second `:` (if possible)
     */
    async getUser(id) {
        // Old code, renovated it, still gives CORS error
        // let xhr = new XMLHttpRequest();
        // xhr.open("GET", "http://boomlings.com/database/getGJUserInfo20.php");
        // xhr.setRequestHeader("secret", "Wmfd2893gb7");
        // xhr.setRequestHeader("targetAccountID", id);
        // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.send();

        let response = await fetch("http://www.boomlings.com/database/getGJUserInfo20.php/", {
            method: "POST",
            mode: "cors",
            "redirect": "follow",
            "User-Agent": "",
            "Content-Type": "application/x-www-form-urlencoded",
            headers: {
                secret: "Wmfd2893gb7",
                targetAccountID: id
            }
        });
        //response.headers.set("Access-Control-Allow-Origin", "*"); // This for some reason doesn't work
        return response.text();
    }

    /**
     * Parse raw user data
     * @param {string} data The user data
     * @returns {User}
     */
    parseUser(data) {
        const stringUtils = new StringUtils();
        let dat = stringUtils.SplitNum(data, ":");

        let name;
        let iconID = null;

        dat.forEach(function(value) {
            let entry = value.split(":");
            if (entry[0] == "1") {
                name = entry[1];
            }
        });

        return new User(name, iconID);
    }
}

export class User {
    /**
     * 
     * @param {string} name 
     * @param {string?} iconID 
     */
    constructor(name, iconID) {
        this.name = name;
        if (iconID != null && iconID != undefined) {
            this.iconID = iconID;
        }
    }
}