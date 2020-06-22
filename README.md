# Game Time Master
Sick of memorising time zones to convert for games and their daily reset times?  
Then this is for you!

## Features
- Automatically detects your local time zone.
- Converts all game server times to your local time zone.
- Shows the time remaining until a game server's daily reset.
- Automatically refreshes data every minute.
- All calculations take daylight savings into account where applicable.
  - This assumes the servers keep the same times (e.g. 06:00 PST-> 06:00 PDT).  
  If this causes issues then it will be adjusted in the future on a per game basis.
- Choose between 24-hour and 12-hour time formats.
- Search for specific games.
- Filter specific games and save this setting per browser.
- Dark/night mode.

Feel free to request for more games to be added by creating an issue [here](https://github.com/cicerakes/Game-Time-Master/issues).

## Feature Roadmap
- Refresh and display every second.
- Manually set time zone (for when auto detect is wrong).
- Add custom game servers.

## External Scripts
`moment.min.js` `moment-timezone-with-data-10-year-range.min.js`  
Copyright © JS Foundation and other contributors.  
Licensed under the MIT License.  
For more details see [here](https://github.com/moment/moment/blob/develop/LICENSE).

`moment-precise-range.js`  
Copyright © 2014 Rob Dawson.  
Licensed under the MIT License.  
For more details see [here](https://github.com/codebox/moment-precise-range/blob/master/LICENSE.md).
