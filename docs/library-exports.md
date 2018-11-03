# Library Exports
## Types
### DiscordUserId
```typescript
type DiscordUserId = string;
```
This type represents the ID of an user account on Discord.

### RobloxUserId
```typescript
type RobloxUserId = number;
```
This type represents the ID of an user account on Roblox.

## Interfaces
### RobloxUser
```typescript
interface RobloxUser {
    id: RobloxUserId,
    username: string
}
```
This interface represents a user on the Roblox platform given by the verification api.

#### id
The user ID of the Roblox user.

#### username
The username of the Roblox user.

## Functions
### discordUserIDToRobloxUserID
```typescript
function discordUserIDToRobloxUserID(discordUserId: DiscordUserId): Promise<RobloxUser>
```
Searches for the discordUserId provided that is associated with a RobloxUser.
If no RobloxUser is found, then the Promise fails.

#### discordUserId
The Discord user ID to search up.

#### Example Resolve
```
{
    id: 1,
    username: "ROBLOX"
}
```
See [RobloxUser](#robloxuser) for more info about the resolve.

### robloxUserIDToDiscordUserIDs
```typescript
function robloxUserIDToDiscordUserIDs(robloxUserId: RobloxUserId): Promise<DiscordUserId[]>
```
Looks up the Roblox user ID and returns an array of Discord user IDs that are attached to this Roblox user.

If the user has not attached a Discord account to the Roblox user then you get an empty array.

#### robloxUserId
The Roblox user ID to search up.

#### Example Resolve
``[ "12345678901234" ]``