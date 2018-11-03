import * as verify from './library';
import { expect } from 'chai';
import 'mocha';

// You may have to change the discord user id and roblox user id being used.
describe("Discord UserID to Roblox UserID", () => {
    const DISCORD_USERID: verify.DiscordUserId = "125802100373454848";
    const ROBLOX_USERID: verify.RobloxUserId = 5762824;
    const ROBLOX_USERNAME: string = "Gamenew09";

    it('resolves and equals expected RobloxUser interface', async () => {
        const result = await verify.discordUserIDToRobloxUserID(DISCORD_USERID);
        expect(result.id).to.equal(ROBLOX_USERID);
        expect(result.username).to.equal(ROBLOX_USERNAME);
    });
});

describe("Roblox UserID To Discord UserIDs", () => {
    const DISCORD_USERIDS: verify.DiscordUserId[] = ["125802100373454848"];
    const ROBLOX_USERID: verify.RobloxUserId = 5762824;;

    it('resolves and equals expected discord user ids', async () => {
        const result = await verify.robloxUserIDToDiscordUserIDs(ROBLOX_USERID);
        expect(result).to.eql(DISCORD_USERIDS);
    });
});