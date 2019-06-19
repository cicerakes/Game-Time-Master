var gameData = [
	{
		game: "Azur Lane",
		server: "English",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "Brown Dust",
		server: "Global & Europe",
		timezone: "America/Danmarkshavn",
		dailyReset: "20:00"
	},
	{
		game: "Dragalia Lost",
		server: "Global",
		timezone: "America/Danmarkshavn",
		dailyReset: "06:00"
	},
	{
		game: "Epic Seven",
		server: "Global",
		timezone: "America/Danmarkshavn",
		dailyReset: "10:00"
	},
	{
		game: "Fate/Grand Order",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Fate/Grand Order",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "21:00"
	},
	{
		game: "Fire Emblem Heroes",
		server: "Global",
		timezone: "America/Danmarkshavn",
		dailyReset: "06:00"
	},
	{
		game: "Girls Frontline",
		server: "EN",
		timezone: "Pacific/Pitcairn",
		dailyReset: "05:00"
	},
	{
		game: "Granblue Fantasy",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "King's Raid",
		server: "America",
		timezone: "America/New_York",
		dailyReset: "00:00"
	},
	{
		game: "Langrisser",
		server: "Global",
		timezone: "America/Regina",
		dailyReset: "00:00"
	},
	{
		game: "Revue Starlight Re LIVE",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Sdorica",
		server: "Global",
		timezone: "America/Danmarkshavn",
		dailyReset: "21:00"
	}
];

// Check saved settings.
var timeFormat = "HH:mm";

if (localStorage.getItem('12HrTimeSwitch') == "true") {
	timeFormat = "h:mm A";

	document.getElementById("12HrTimeSwitch").checked = true;
}

// Show local time data.
var now = moment(), 
nowZone = moment.tz.guess();
document.getElementById("currentLocalTime").textContent = now.format(timeFormat);
document.getElementById("currentLocalDate").textContent = now.format("dddd, Do MMMM, YYYY");
document.getElementById("currentLocalTimezone").textContent = nowZone + " — " + now.format("[GMT ]Z");

// Convert game times to local time zone and store results.
var gameDataConverted = [];
for (let i = 0; i < gameData.length; i++) {
	var gameTimezone = gameData[i].timezone, 
	currentServerTime = now.clone().tz(gameTimezone);
	gameData[i].dailyReset = moment.tz(gameData[i].dailyReset, "HH:mm", gameTimezone);

	// Calculate time left until daily reset.
	var sameDayReset = currentServerTime.to(gameData[i].dailyReset);
	if (sameDayReset.includes("ago")) {
		var timeRemaining = currentServerTime.preciseDiff(gameData[i].dailyReset.clone().add(1, "d"), true);
	} else {
		var timeRemaining = currentServerTime.preciseDiff(gameData[i].dailyReset, true);
	}
	timeRemaining = timeRemaining.hours + " hours " + timeRemaining.minutes + " minutes";

	// Convert to local.
	var localResetTime = gameData[i].dailyReset.clone().tz(nowZone);

	// Store.
	gameDataConverted.push(
		{
			dailyReset: localResetTime,
			serverTime: currentServerTime,
			timeToReset: timeRemaining
		}
	);
}

// Loop print the results as divs into #resultsContainer.
for (let i = 0; i < gameData.length; i++) {
	var gameCont = document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i], 
	gameHead = gameCont.getElementsByClassName("gameHeader")[0], 
	gameBody = gameCont.getElementsByClassName("gameTimes")[0];

	gameHead.insertAdjacentHTML("beforeend", "<h4>" + gameData[i].server + "</h4>");
	gameBody.getElementsByTagName("p")[0].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].dailyReset.format(timeFormat) + "</p>");
	gameBody.getElementsByTagName("p")[2].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].timeToReset + "</p>");
	// Add prefix for timezone abbreviation if it's an offset.
	if (gameDataConverted[i].serverTime.format("z").includes("-") || gameDataConverted[i].serverTime.format("z").includes("+")) {
		gameBody.getElementsByTagName("p")[4].insertAdjacentHTML("afterend", "<p>" + gameData[i].dailyReset.format(timeFormat) + " UTC" + gameDataConverted[i].serverTime.format("Z") + "</p>");
		gameBody.getElementsByTagName("p")[6].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].serverTime.format(timeFormat) + " UTC" + gameDataConverted[i].serverTime.format("Z") + "</p>");
	} else if (gameData[i].timezone == "America/Danmarkshavn") {
		gameBody.getElementsByTagName("p")[4].insertAdjacentHTML("afterend", "<p>" + gameData[i].dailyReset.format(timeFormat) + " UTC</p>");
		gameBody.getElementsByTagName("p")[6].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].serverTime.format(timeFormat) + " UTC</p>");
	} else {
		gameBody.getElementsByTagName("p")[4].insertAdjacentHTML("afterend", "<p>" + gameData[i].dailyReset.format(timeFormat + " z") + "</p>");
		gameBody.getElementsByTagName("p")[6].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].serverTime.format(timeFormat + " z") + "</p>");
	}
}

// Refresh time values every minute.
setInterval(timeCalc, 60000);

function timeCalc() {
	// Refresh time.
	now = moment();

	// Refresh converted times.
	for (let i = 0; i < gameData.length; i++) {
		var gameTimezone = gameData[i].timezone, 
		currentServerTime = now.clone().tz(gameTimezone);
	
		// Calculate time left until daily reset.
		var sameDayReset = currentServerTime.to(gameData[i].dailyReset);
		if (sameDayReset.includes("ago")) {
			var timeRemaining = currentServerTime.preciseDiff(gameData[i].dailyReset.clone().add(1, "d"), true);
		} else {
			var timeRemaining = currentServerTime.preciseDiff(gameData[i].dailyReset, true);
		}
		timeRemaining = timeRemaining.hours + " hours " + timeRemaining.minutes + " minutes";
	
		// Convert to local.
		var localResetTime = gameData[i].dailyReset.clone().tz(nowZone);
	
		// Replace converted times.
		gameDataConverted[i].dailyReset = localResetTime;
		gameDataConverted[i].serverTime = currentServerTime;
		gameDataConverted[i].timeToReset = timeRemaining;
	}

	// Print refreshed values.
	document.getElementById("currentLocalTime").textContent = now.format(timeFormat);
	document.getElementById("currentLocalDate").textContent = now.format("dddd, Do MMMM, YYYY");
	for (let i = 0; i < gameData.length; i++) {
		var gameCont = document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i], 
		gameBody = gameCont.getElementsByClassName("gameTimes")[0];

		gameBody.getElementsByTagName("p")[1].textContent = gameDataConverted[i].dailyReset.format(timeFormat);
		gameBody.getElementsByTagName("p")[3].textContent = gameDataConverted[i].timeToReset;
		// Add prefix for timezone abbreviation if it's an offset.
		if (gameDataConverted[i].serverTime.format("z").includes("-") || gameDataConverted[i].serverTime.format("z").includes("+")) {
			gameBody.getElementsByTagName("p")[5].textContent = gameData[i].dailyReset.format(timeFormat) + " UTC" + gameDataConverted[i].serverTime.format("Z");
			gameBody.getElementsByTagName("p")[7].textContent = gameDataConverted[i].serverTime.format(timeFormat) + " UTC" + gameDataConverted[i].serverTime.format("Z");
		} else if (gameData[i].timezone == "America/Danmarkshavn") {
			gameBody.getElementsByTagName("p")[5].textContent = gameData[i].dailyReset.format(timeFormat) + " UTC";
			gameBody.getElementsByTagName("p")[7].textContent = gameDataConverted[i].serverTime.format(timeFormat) + " UTC";
		} else {
			gameBody.getElementsByTagName("p")[5].textContent = gameData[i].dailyReset.format(timeFormat + " z");
			gameBody.getElementsByTagName("p")[7].textContent = gameDataConverted[i].serverTime.format(timeFormat + " z");
		}
	}
}

function toggleMenu(button) {
	if (document.getElementById("menu").style.marginLeft == "0px") {
		// Close.
		document.getElementById("menu").removeAttribute("style");

		button.textContent = "☰";
	} else {
		// Open.
		document.getElementById("menu").style.marginLeft = "0px";

		button.textContent = "✖";
	}
}

function searchFilter () {
	var searchTerm = document.getElementById("filterSearchBox").value;

	for (let i = 0; i < gameData.length; i++) {
		var gameCont = document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i], 
		gameHead = gameCont.getElementsByClassName("gameHeader")[0];

		if (!gameHead.getElementsByTagName("h3")[0].textContent.toUpperCase().includes(searchTerm.toUpperCase())) {
			// Hide.
			gameCont.style.display = "none";
		} else {
			// Show.
			gameCont.removeAttribute("style");
		}
	}
}

function settingToggle(setting) {
	var settingId = setting.id;
	localStorage.setItem([settingId], setting.checked);

	if (settingId == "12HrTimeSwitch") {
		if (setting.checked) {
			timeFormat = "h:mm A";
		} else {
			timeFormat = "HH:mm";
		}
		timeCalc();
	}
}

function showSearch(button) {
	var searchBox = document.getElementById("filterSearchBox");

	button.style.display = "none";
	document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].style.display = "none";
	searchBox.style.display = "block";
	searchBox.style.width = null;
	searchBox.focus();
}

function searchHide(searchBox) {
	var searchButton = document.getElementById("filterSearchOpen");

	if (searchButton.style.display == "none") {
		searchBox.style.width = 0;
		// Wait for animation before changing display.
		setTimeout(
			function () {
				document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].removeAttribute("style");
				searchBox.removeAttribute("style");
				searchButton.style.display = null;
			},
			200
		);
	}
}