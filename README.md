# Game Time Master
Sick of memorising time zones to convert for games and their daily reset times?  
Then this is for you!

## Features
- Automatically detects your local time zone.
- Converts all game server times to your local time zone.
- Shows the time remaining until a game server's daily reset.
- Automatically refreshes data every minute.
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

## External Scripts
`moment.min.js` `moment-timezone-with-data-10-year-range.min.js`  
Copyright © JS Foundation and other contributors.  
Licensed under the MIT License.  
For more details see [here](https://github.com/moment/moment/blob/develop/LICENSE).

`moment-precise-range.js`  
Copyright © 2014 Rob Dawson.  
Licensed under the MIT License.  
For more details see [here](https://github.com/codebox/moment-precise-range/blob/master/LICENSE.md).
