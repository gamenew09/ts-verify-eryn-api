import * as request from "request-promise";

const BASE_URL = "https://verify.eryn.io/api";

export type DiscordUserId = string;
export type RobloxUserId = number;

export interface RobloxUser {
    id: RobloxUserId,
    username: string
}

export function discordUserIDToRobloxUserID(discordUserId: DiscordUserId): Promise<RobloxUser>
{
    return new Promise<RobloxUser>((resolve, reject) => {
        //https://verify.eryn.io/api/user/<Discord User ID>
        let url:string = BASE_URL + "/user/" + discordUserId;

        request({
            url: url,
            simple: false
        }).then(function (body) {
            let json = JSON.parse(body);
            if(json)
            {
                if(json.status === "ok")
                {
                    resolve({
                        id: json.robloxId,
                        username: json.robloxUsername
                    });
                }
                else
                {
                    reject({error: json.error});
                }
            }
            else
            {
                reject({error: "Body recieved was not valid JSON."});
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}

export function robloxUserIDToDiscordUserIDs(robloxUserId: RobloxUserId): Promise<DiscordUserId[]>
{
    //https://verify.eryn.io/api/roblox/<Roblox User ID>
    return new Promise<DiscordUserId[]>((resolve, reject) => {
        //https://verify.eryn.io/api/user/<Discord User ID>
        let url:string = BASE_URL + "/roblox/" + robloxUserId;

        request({
            url: url,
            simple: false
        }).then(function (body) {
            let json = JSON.parse(body);
            if(json)
            {
                if(json.status === "ok")
                {
                    resolve(json.users as Array<string>); // TODO: See if there is a better way that is less error-prone.
                }
                else
                {
                    reject({error: json.error});
                }
            }
            else
            {
                reject({error: "Body recieved was not valid JSON."});
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}