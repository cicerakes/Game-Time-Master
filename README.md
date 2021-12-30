# Game Time Master
Sick of memorising time zones to convert for games and their daily reset times?  
Then this is for you!

## Features
- Automatically detects your local time zone.
- Converts all game server times to your local time zone.
- Shows the time remaining until a game server's daily reset.
- Automatically refreshes times every minute.
	- Option to refresh and display every second.
- All calculations take daylight savings into account where applicable.
	- By default, this assumes that servers keep the same times (e.g. 06:00 PST -> 06:00 PDT).  
	If a game doesn't (e.g. 05:00 PST -> 06:00 PDT), then it will be adjusted for that game.
- Choose between 24-hour and 12-hour time formats.
- Search for specific games.
- Filter specific games and save this setting per browser.
- Dark/night mode, which is automatically enabled based on system preferences.

Feel free to request for more games to be added by creating an issue [here](https://github.com/cicerakes/Game-Time-Master/issues), or by filling out [this form](https://docs.google.com/forms/d/e/1FAIpQLSc0T_8Smk0vnp-VtR3eJSnSu3uLa3nFlWbCq9-jMqujmU1qcA/viewform).

## Feature Roadmap
- Manually set time zone (for when auto detect is wrong).
- Add custom game servers.

## Contributing
### Adding Game Servers
#### Summary:
- Add game server details to `game-data.js`.
- Add game icon to `game-icons` folder.
- Add a menu entry to `#gameFilterSettings` of `index.html`.
- Add a `.gameContainer` entry to `index.html`.

See below for more in-depth details.

---

Required data when adding a game: 
- Game name
	- If the game did not initially release in an English speaking region: 
		- Prioritise using its official English translation name when available, otherwise  
		- Use the official translation for its other franchise media (e.g. if an anime exists for it with an official English translation), otherwise  
		- Use a romanised version of the name.  
		Example: `赤いリンゴ` -> `Akai Ringo`.
- Game server region or language
	- If a game's region/language is further split into multiple servers with multiple timezones, these are added as seperate servers.  
	An example of this is a `Global` game with multiple servers such as `Americas`, `Asia`, and `Europe`.
- Game server timezone
	- This can be a region/language or offset. 
	- You will need to find it in the tz database.  
		- You can use [this Wikipedia page](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
			- Ensure its `Type` is `Canonical`, and if not, find what it links to which should be `Canonical`.
			- You will want to use what is in the `TZ database name` column.
			- Note that if using an offset, it will be inverted.
				- Example: `UTC+6` or `GMT+6` will have a `TZ database name` of `Etc/GMT-6`.
- Game server daily reset time
	- Ensure this is the daily reset time for the **server's** timezone.
	- This is usually the time when a player receives (daily) login rewards.
	- If a game has multiple reset times, prioritise what is used for login rewards. 
	- If no login reward system exists, use the time that majority of content resets.
- Game icon
	- This can be taken from an official source such as the Google Play store.
	- Resize this to 90x90 pixels.
		- If the original icon is not a square, avoid stretching the image and instead add empty padding as needed.
	- GIF file format.
	- Pascal case filename.  
	Example: `GameName.gif`.
	- If an icon already exists for the game in a different region/language, but looks different, simply append the region/language to the filename.  
	Examples: `GameNameGlobal.gif` and `GameNameJP.gif`.
	- Saved to the `game-icons` folder.

#### game-data.js
All games in this array are sorted alphabetically by name, including any starting with "The".  
If a game has multiple servers in the array, it is then further sorted alphabetically by region/language (`server`).

A game server can be added with the following object template:
```js
{
	game: "GAME_NAME",
	server: "GAME_SERVER_REGION_OR_LANGUAGE",
	timezone: "GAME_SERVER_TIMEZONE",
	dailyReset: "GAME_SERVER_DAILY_RESET_TIME"
},
```

An additional property can be added to the object: `utcDailyReset`.  

`utcDailyReset` is a boolen which decides if the `dailyReset` is interpretated as having `Etc/UTC` as its timezone first, before converting and displaying it to the user as its appropriate `timezone` property.

This only needs to be set to `true` if the game server's reset time changes during the server's daylight savings.  
Example where it is set to `true`: If the reset time is 05:00 during PST, and changed to 06:00 during PDT.

If set to `true`, the `dailyReset` **must** use UTC/GMT.  
`timezone` does not require any specific changes.

For most games this is does not apply, and can be omitted from the object.

#### index.html
Elements containing game data are sorted in the same order as `game-data.js`: alphabetically by name.

There are two main elements to update, with templates provided:
##### div id="gameFilterSettings" class="menuSection"
###### Game with one server
```html
<input type="checkbox" id="GAME_NAME_IN_CAMEL_CASE" class="gameServerToggle" onchange="toggleGameServerHide(this)" checked>
<label class="optionName" for="GAME_NAME_IN_CAMEL_CASE">
	GAME_NAME
</label>
```
Examples of values to change: 
- `GAME_NAME`: `Game Name`
- `GAME_NAME_IN_CAMEL_CASE`: `gameName`

###### Game with multiple servers
```html
<input type="checkbox" id="GAME_NAME_IN_CAMEL_CASE" onchange="toggleGameParentHide(this)" checked>
<label class="optionName gameParent" for="GAME_NAME_IN_CAMEL_CASE">
	<span>GAME_NAME</span>
	<button id="GAME_NAME_CHILDREN" class="sectionToggleArrow" onclick="menuChildrenToggle(this)"></button>
	<label for="GAME_NAME_CHILDREN"></label>
</label>
<div class="gameChildren">
	<input type="checkbox" id="GAME_NAME_REGION/LANGUAGE" class="gameServerToggle" onchange="toggleGameServerHide(this, true)" checked>
	<label class="optionName" for="GAME_NAME_REGION/LANGUAGE">
		REGION/LANGUAGE
	</label>
	<input type="checkbox" id="GAME_NAME_REGION/LANGUAGE_2" class="gameServerToggle" onchange="toggleGameServerHide(this, true)" checked>
	<label class="optionName" for="GAME_NAME_REGION/LANGUAGE_2">
		REGION/LANGUAGE_2
	</label>
</div>
```
Examples of values to change: 
- `GAME_NAME`: `Game Name`
- `GAME_NAME_IN_CAMEL_CASE`: `gameName`
- `GAME_NAME_CHILDREN`: `gameNameChildren`
	- Just append `Children` to `GAME_NAME_IN_CAMEL_CASE`.
- `REGION/LANGUAGE`: `server` in [`game-data.js`](#game-data.js).
- `GAME_NAME_REGION/LANGUAGE`: `gameNameEN`, `gameNameGlobal`, `gameNameJP`, etc.
- `REGION/LANGUAGE_2` and `GAME_NAME_REGION/LANGUAGE_2`: The same as above, but for the second region/language. Add more as necessary.

##### div id="resultsContainer"
```html
<div class="gameContainer">
	<div class="gameHeader">
		<div class="gameIcon">
			<img src="game-icons/GAME_ICON.gif">
		</div>
		<h3>GAME_NAME</h3>
	</div>
	<div class="gameTimes">
		<div class="localTimes">
			<p>Local Reset Time: </p>
			<p>Time Until Reset: </p>
		</div>
		<div class="serverTimes">
			<p>Server Reset Time: </p>
			<p>Current Server Time: </p>
		</div>
	</div>
	<div class="buttons">
		<button title="Hide this game server" onclick="hideGameServerButton(this)">HIDE</button>
	</div>
</div>
```
Examples of values to change: 
- `GAME_NAME`: `Game Name`
- `GAME_ICON`: `GameName.gif`
	- Filename of the game's icon.

## License
This project is licensed under the [GNU General Public License v3.0](https://github.com/cicerakes/Game-Time-Master/blob/master/LICENSE).

## External Scripts
`moment.min.js` `moment-timezone-with-data-10-year-range.min.js`  
Copyright © JS Foundation and other contributors.  
Licensed under the MIT License.  
For more details see [here](https://github.com/moment/moment/blob/develop/LICENSE).

`moment-precise-range.js`  
Copyright © 2014 Rob Dawson.  
Licensed under the MIT License.  
For more details see [here](https://github.com/codebox/moment-precise-range/blob/master/LICENSE.md).
