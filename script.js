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

// Show local time data.
var now = moment(), 
nowZone = moment.tz.guess();
document.getElementById("currentLocalTime").textContent = now.format("HH:mm");
document.getElementById("currentLocalDate").textContent = now.format("dddd, Do MMMM, YYYY");
document.getElementById("currentLocalTimezone").textContent = nowZone + " — " + now.format("[GMT ]Z");

// Convert game times to local time zone and store results.
var gameTimes = [];
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
	gameTimes.push(
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
	gameBody.getElementsByTagName("p")[0].insertAdjacentHTML("afterend", "<p>" + gameTimes[i].dailyReset.format("HH:mm") + "</p>");
	gameBody.getElementsByTagName("p")[2].insertAdjacentHTML("afterend", "<p>" + gameTimes[i].timeToReset + "</p>");
	// Add prefix for timezone abbreviation if it's an offset.
	if (gameTimes[i].serverTime.format("z").includes("-") || gameTimes[i].serverTime.format("z").includes("+")) {
		gameBody.getElementsByTagName("p")[4].insertAdjacentHTML("afterend", "<p>" + gameData[i].dailyReset.format("HH:mm") + " UTC" + gameTimes[i].serverTime.format("Z") + "</p>");
		gameBody.getElementsByTagName("p")[6].insertAdjacentHTML("afterend", "<p>" + gameTimes[i].serverTime.format("HH:mm") + " UTC" + gameTimes[i].serverTime.format("Z") + "</p>");
	} else if (gameData[i].timezone == "America/Danmarkshavn") {
		gameBody.getElementsByTagName("p")[4].insertAdjacentHTML("afterend", "<p>" + gameData[i].dailyReset.format("HH:mm") + " UTC</p>");
		gameBody.getElementsByTagName("p")[6].insertAdjacentHTML("afterend", "<p>" + gameTimes[i].serverTime.format("HH:mm") + " UTC</p>");
	} else {
		gameBody.getElementsByTagName("p")[4].insertAdjacentHTML("afterend", "<p>" + gameData[i].dailyReset.format("HH:mm z") + "</p>");
		gameBody.getElementsByTagName("p")[6].insertAdjacentHTML("afterend", "<p>" + gameTimes[i].serverTime.format("HH:mm z") + "</p>");
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
		gameTimes[i].dailyReset = localResetTime;
		gameTimes[i].serverTime = currentServerTime;
		gameTimes[i].timeToReset = timeRemaining;
	}

	// Print refreshed values.
	document.getElementById("currentLocalTime").textContent = now.format("HH:mm");
	document.getElementById("currentLocalDate").textContent = now.format("dddd, Do MMMM, YYYY");
	for (let i = 0; i < gameData.length; i++) {
		var gameCont = document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i], 
		gameBody = gameCont.getElementsByClassName("gameTimes")[0];

		gameBody.getElementsByTagName("p")[1].textContent = gameTimes[i].dailyReset.format("HH:mm");
		gameBody.getElementsByTagName("p")[3].textContent = gameTimes[i].timeToReset;
		// Add prefix for timezone abbreviation if it's an offset.
		if (gameTimes[i].serverTime.format("z").includes("-") || gameTimes[i].serverTime.format("z").includes("+")) {
			gameBody.getElementsByTagName("p")[7].textContent = gameTimes[i].serverTime.format("HH:mm") + " UTC" + gameTimes[i].serverTime.format("Z");
		} else if (gameData[i].timezone == "America/Danmarkshavn") {
			gameBody.getElementsByTagName("p")[7].textContent = gameTimes[i].serverTime.format("HH:mm") + " UTC";
		} else {
			gameBody.getElementsByTagName("p")[7].textContent = gameTimes[i].serverTime.format("HH:mm z");
		}
	}
}

function toggleMenu(button) {
	if (document.getElementById("menu").style.marginLeft == "0px") {
		// Close.
		document.getElementById("menu").style.marginLeft = "-15em";

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
			gameCont.style.display = "inline-table";
		}
	}
}