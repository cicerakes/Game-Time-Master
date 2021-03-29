// Initialise list of filtered/hidden games using gameData.
var gameFilter = [];

for (let i = 0; i < gameData.length; i++) {
	gameFilter.push(
		{
			game: gameData[i].game,
			server: gameData[i].server,
			shown: "true"
		}
	);
}

// Check saved settings.
var timeFormat = "HH:mm",
resetTimeFormat = "HH:mm",
twelveHourFormat = false,
showServerDate = false,
showSeconds = false,
showHidden = false;

if (localStorage.getItem('12HrTimeSwitch') == "true") {
	twelveHourFormat = true;

	document.getElementById("12HrTimeSwitch").checked = true;
	
	setTimeFormat();
}
if (localStorage.getItem('showServerDateSwitch') == "true") {
	showServerDate = true;

	document.getElementById("showServerDateSwitch").checked = true;
}
if (localStorage.getItem('showSecondsSwitch') == "true") {
	showSeconds = true;

	document.getElementById("showSecondsSwitch").checked = true;

	setTimeFormat();
}
if (localStorage.getItem('showHideButtonsSwitch') == "false") {
	document.body.classList.add("hideButtonsHidden");
	document.getElementById("showHideButtonsSwitch").checked = false;
}
if (localStorage.getItem('showHiddenInSearchSwitch') == "true") {
	showHidden = true;

	document.getElementById("showHiddenInSearchSwitch").checked = true;
}
if (localStorage.getItem('compactModeSwitch') == "true") {
	document.body.classList.add("compact");
	document.getElementById("compactModeSwitch").checked = true;
}
// If there's no saved dark theme setting, check for OS theme and apply that.
// OS theme is used until user manually changes this setting.
if (localStorage.getItem('darkThemeSwitch') == "true") {
	document.body.classList.add("dark");
	document.getElementById("darkThemeSwitch").checked = true;
} else if (localStorage.getItem('darkThemeSwitch') == "false") {
	// Do nothing and load default theme.
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	document.body.classList.add("dark");
	document.getElementById("darkThemeSwitch").checked = true;
}

// Hide game containers.
if (localStorage.getItem('gameFilterList') != null) {
	const gameFilterSaved = getLocalStorageObject('gameFilterList');

	for (let i = 0; i < gameFilterSaved.length; i++) {
		if (gameFilterSaved[i].shown == "false") {
			let serverCount = 0, 
			skippedParent = false, 
			containerPosition = 0;

			for (let y = 4; y < document.getElementById("gameFilterSettings").childElementCount; y+=2, containerPosition++) {
				const gameLabel = document.getElementById("gameFilterSettings").children[y], 
				gameName = gameData[containerPosition].game;

				if (gameLabel.className.includes("gameParent")) {
					skippedParent = true;

					for (let x = 0; x < gameFilter.length; x++) {
						if (gameFilter[x].game == gameData[containerPosition].game) {
							serverCount++;
						}
					}
				} else if (gameFilterSaved[i].game == gameName) {
					gameLabel.previousElementSibling.checked = false;
					toggleGameServerHide(document.getElementsByClassName("gameServerToggle")[containerPosition]);
				}

				// Look at next div for the children.
				if (skippedParent) {
					y++;
					for (let z = 0; z < serverCount; z++, containerPosition++) {
						const childInput = document.getElementById("gameFilterSettings").children[y].getElementsByTagName("input")[z];

						// Compare current child with server in saved filter to see if there's a match.
						if (gameFilterSaved[i].game == gameFilter[containerPosition].game && gameFilterSaved[i].server == gameFilter[containerPosition].server) {
							childInput.checked = false;
							toggleGameServerHide(document.getElementsByClassName("gameServerToggle")[containerPosition], true);
						}
					}
					containerPosition--;
					skippedParent = false;
					serverCount = 0;
				}
			}
		}
	}
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
	let gameTimezone = gameData[i].timezone, 
	currentServerTime = now.clone().tz(gameTimezone);
	
	// If daily reset changes during daylight savings, convert using UTC first.
	if (gameData[i].utcDailyReset) {
		gameData[i].dailyReset = moment.tz(gameData[i].dailyReset, "HH:mm", "Etc/UTC");
		// Convert to server time.
		gameData[i].dailyReset = gameData[i].dailyReset.clone().tz(gameTimezone);
	} else {
		gameData[i].dailyReset = moment.tz(gameData[i].dailyReset, "HH:mm", gameTimezone);
	}
	
	// Convert to local.
	let localResetTime = gameData[i].dailyReset.clone().tz(nowZone);

	// Change local reset time to tomorrow if it has already passed.
	const todayResetPassed = (now.preciseDiff(localResetTime, true)).firstDateWasLater;
	if (todayResetPassed) {
		if (gameData[i].dailyReset.hours() == 0) {
			// Add 48 hours to fix midnight reset using previous day.
			localResetTime.add(48, "h");
		} else {
			localResetTime.add(24, "h");
		}
	}

	// Calculate time left until daily reset.
	let timeRemaining = now.preciseDiff(localResetTime, true);
	// Display seconds if the setting is on.
	if (showSeconds) {
		timeRemaining = timeRemaining.hours + " hours " + timeRemaining.minutes + " minutes " + timeRemaining.seconds + " seconds "
	} else {
		timeRemaining = timeRemaining.hours + " hours " + timeRemaining.minutes + " minutes";
	}

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
	const gameCont = document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i], 
	gameHead = gameCont.getElementsByClassName("gameHeader")[0], 
	gameBody = gameCont.getElementsByClassName("gameTimes")[0];

	gameHead.insertAdjacentHTML("beforeend", "<h4>" + gameData[i].server + "</h4>");
	gameBody.getElementsByTagName("p")[0].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].dailyReset.format(resetTimeFormat) + "</p>");
	gameBody.getElementsByTagName("p")[2].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].timeToReset + "</p>");
	// Add prefix for timezone abbreviation if it's an offset.
	if (gameDataConverted[i].serverTime.format("z").includes("-") || gameDataConverted[i].serverTime.format("z").includes("+")) {
		gameBody.getElementsByTagName("p")[4].insertAdjacentHTML("afterend", "<p>" + gameData[i].dailyReset.format(resetTimeFormat) + " UTC" + gameDataConverted[i].serverTime.format("z") + "</p>");
		gameBody.getElementsByTagName("p")[6].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].serverTime.format(timeFormat) + " UTC" + gameDataConverted[i].serverTime.format("z") + "</p>");
	} else {
		gameBody.getElementsByTagName("p")[4].insertAdjacentHTML("afterend", "<p>" + gameData[i].dailyReset.format(resetTimeFormat + " z") + "</p>");
		gameBody.getElementsByTagName("p")[6].insertAdjacentHTML("afterend", "<p>" + gameDataConverted[i].serverTime.format(timeFormat + " z") + "</p>");
	}
	// Add date to curent server time if the setting is on.
	if (showServerDate) {
		gameBody.getElementsByTagName("p")[7].insertAdjacentHTML("beforeend", "<br>" + gameDataConverted[i].serverTime.format("Do MMMM"));
	}
}

// Refresh time values every minute/second.
var refresh;

setRefresh();

function setRefresh() {
	// Clear previous interval if it exists.
	if (typeof refresh !== 'undefined') {
		clearInterval(refresh);
	}
	
	// Set interval based on saved setting.
	if (showSeconds) {
		refresh = setInterval(timeCalc, 1000);
	} else {
		refresh = setInterval(timeCalc, 60000);
	}
}

// Figure out the time format.
function setTimeFormat() {
	if (twelveHourFormat) {
		resetTimeFormat = "h:mm A";
		if (showSeconds) {
			timeFormat = "h:mm:ss A";
		} else {
			timeFormat = "h:mm A";
		}
	} else {
		resetTimeFormat = "HH:mm";
		if (showSeconds) {
			timeFormat = "HH:mm:ss";
		} else {
			timeFormat = "HH:mm";
		}
	}
}

function timeCalc() {
	// Refresh time.
	now = moment();

	// Refresh converted times.
	for (let i = 0; i < gameData.length; i++) {
		let gameTimezone = gameData[i].timezone, 
		currentServerTime = now.clone().tz(gameTimezone);

		// Convert to local.
		let localResetTime = gameData[i].dailyReset.clone().tz(nowZone);

		// Change local reset time to tomorrow if it has already passed.
		const todayResetPassed = (now.preciseDiff(localResetTime, true)).firstDateWasLater;
		if (todayResetPassed) {
			if (gameData[i].dailyReset.hours() == 0) {
				// Add 48 hours to fix midnight reset using previous day.
				localResetTime.add(48, "h");
			} else {
				localResetTime.add(24, "h");
			}
		}

		// Calculate time left until daily reset.
		let timeRemaining = now.preciseDiff(localResetTime, true);
		// Display seconds if the setting is on.
		if (showSeconds) {
			timeRemaining = timeRemaining.hours + " hours " + timeRemaining.minutes + " minutes " + timeRemaining.seconds + " seconds "
		} else {
			timeRemaining = timeRemaining.hours + " hours " + timeRemaining.minutes + " minutes";
		}

		// Replace converted times.
		gameDataConverted[i].dailyReset = localResetTime;
		gameDataConverted[i].serverTime = currentServerTime;
		gameDataConverted[i].timeToReset = timeRemaining;
	}

	// Print refreshed values.
	document.getElementById("currentLocalTime").textContent = now.format(timeFormat);
	document.getElementById("currentLocalDate").textContent = now.format("dddd, Do MMMM, YYYY");
	for (let i = 0; i < gameData.length; i++) {
		const gameCont = document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i], 
		gameBody = gameCont.getElementsByClassName("gameTimes")[0];

		gameBody.getElementsByTagName("p")[1].textContent = gameDataConverted[i].dailyReset.format(resetTimeFormat);
		gameBody.getElementsByTagName("p")[3].textContent = gameDataConverted[i].timeToReset;
		// Add prefix for timezone abbreviation if it's an offset.
		if (gameDataConverted[i].serverTime.format("z").includes("-") || gameDataConverted[i].serverTime.format("z").includes("+")) {
			gameBody.getElementsByTagName("p")[5].textContent = gameData[i].dailyReset.format(resetTimeFormat) + " UTC" + gameDataConverted[i].serverTime.format("z");
			gameBody.getElementsByTagName("p")[7].textContent = gameDataConverted[i].serverTime.format(timeFormat) + " UTC" + gameDataConverted[i].serverTime.format("z");
		} else {
			gameBody.getElementsByTagName("p")[5].textContent = gameData[i].dailyReset.format(resetTimeFormat + " z");
			gameBody.getElementsByTagName("p")[7].textContent = gameDataConverted[i].serverTime.format(timeFormat + " z");
		}
		// Add date to curent server time if the setting is on.
		if (showServerDate) {
			gameBody.getElementsByTagName("p")[7].insertAdjacentHTML("beforeend", "<br>" + gameDataConverted[i].serverTime.format("Do MMMM"));
		}
	}
}

function toggleMenu() {
	const menuButton = document.getElementById("mainMenuButt");

	if (document.getElementById("menu").style.marginLeft == "0px") {
		// Close.
		document.getElementById("menu").removeAttribute("style");

		menuButton.textContent = "☰";

		document.getElementById("outsideMenu").removeAttribute("style");
	} else {
		// Open.
		document.getElementById("menu").style.marginLeft = "0px";

		menuButton.textContent = "✖";

		document.getElementById("outsideMenu").style.width = "100%";
		document.getElementById("outsideMenu").style.height = "100%";
	}
}

function searchFilter () {
	// Convert search term to uppercase and remove accent marks.
	const searchTerm = document.getElementById("filterSearchBox").value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

	// If empty, reset search display results.
	if (searchTerm == undefined || searchTerm == "") {
		for (let i = 0; i < gameData.length; i++) {
			const gameCont = document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i];
			gameCont.removeAttribute("style");
		}
	} else {
		for (let i = 0; i < gameData.length; i++) {
			// Find game name for each container, convert to uppercase, and remove accent marks.
			const gameCont = document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i], 
			gameHead = gameCont.getElementsByClassName("gameHeader")[0], 
			gameName = gameHead.getElementsByTagName("h3")[0].textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
	
			if (!gameName.includes(searchTerm)) {
				// Hide.
				gameCont.style.display = "none";
			} else {
				// Show, if server isn't hidden (depending on showHidden setting).
				// Don't show hidden servers if there's no search term(s).
				if (showHidden && (searchTerm != undefined || searchTerm != "")) {
					gameCont.style.display = "block";
				} else if (gameFilter[i].shown == "true") {
					gameCont.style.display = "block";
				} else {
					// Hide.
					// Needed for when showHidden was on, but switched off later.
					gameCont.style.display = "none";
				}
			}
		}
	}
}

function settingToggle(setting) {
	const settingId = setting.id;
	localStorage.setItem([settingId], setting.checked);

	if (settingId == "12HrTimeSwitch") {
		if (setting.checked) {
			twelveHourFormat = true;
		} else {
			twelveHourFormat = false;
		}
		setTimeFormat()
		timeCalc();
	} else if (settingId == "showServerDateSwitch") {
		if (setting.checked) {
			showServerDate = true;
		} else {
			showServerDate = false;
		}
		timeCalc();
	} else if (settingId == "showSecondsSwitch") {
		if (setting.checked) {
			showSeconds = true;
		} else {
			showSeconds = false;
		}
		setTimeFormat();
		timeCalc();
		setRefresh();
	} else if (settingId == "showHideButtonsSwitch") {
		if (setting.checked) {
			document.body.classList.remove("hideButtonsHidden");
		} else {
			document.body.classList.add("hideButtonsHidden");
		}
	} else if (settingId == "showHiddenInSearchSwitch") {
		if (setting.checked) {
			showHidden = true;
		} else {
			showHidden = false;
		}
		searchFilter();
	} else if (settingId == "compactModeSwitch") {
		if (setting.checked) {
			document.body.classList.add("compact");
		} else {
			document.body.classList.remove("compact");
		}
	} else if (settingId == "darkThemeSwitch") {
		if (setting.checked) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}
}

function showSearch(button) {
	const searchBox = document.getElementById("filterSearchBox");

	button.style.display = "none";
	document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].style.display = "none";
	searchBox.style.display = "block";
	searchBox.style.width = null;
	searchBox.focus();
}

function searchHide(searchBox) {
	const searchButton = document.getElementById("filterSearchOpen");

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

function getLocalStorageObject(ObjectName) {
	const parsedObject = JSON.parse(localStorage.getItem(ObjectName));

	return parsedObject;
}

// Store the original height of the games section in menu, for later usage when hiding/showing.
var gamesMenuSectionHeight = document.getElementById("gameFilterSettings").offsetHeight;
// Set the section height to a value (instead of auto) to enable initial transistion animation.
document.getElementById("gameFilterSettings").style.height = gamesMenuSectionHeight + "px";
// Collapse the games section on page load.
gamesMenuSectionToggle(document.getElementById("gamesMenuSection"));

function gamesMenuSectionToggle(dropArrow) {
	const menuSection = dropArrow.parentElement;

	if (menuSection.style.height == "36px") {
		// Open.
		dropArrow.removeAttribute("style");
		menuSection.style.height = gamesMenuSectionHeight + "px";
	} else {
		// Close.
		dropArrow.style.transform = "rotate(45deg)";
		dropArrow.style.top = "-15px";
		menuSection.style.height = "36px";
	}
}

function menuChildrenToggle(dropArrow) {
	const gameChild = dropArrow.parentElement.nextElementSibling, 
	gameChildHeight = gameChild.childElementCount * 20.5;

	if (gameChild.style.height == gameChildHeight + "px") {
		// Close.
		dropArrow.removeAttribute("style");
		gameChild.removeAttribute("style");

		// Re-calculate games section height.
		gamesMenuSectionHeight = gamesMenuSectionHeight - gameChildHeight;
	} else {
		// Open.
		dropArrow.style.transform = "rotate(225deg)";
		dropArrow.style.top = "10px";
		gameChild.style.height = gameChildHeight + "px";

		// Re-calculate games section height.
		gamesMenuSectionHeight = gamesMenuSectionHeight + gameChildHeight;
	}

	// Set new games section height.
	document.getElementById("gameFilterSettings").style.height = gamesMenuSectionHeight + "px";
}

function toggleGameServerHide(toggle, child) {
	// Find the server's position in gameData.
	let position = 0;
	for (; position < gameData.length; position++) {
		if (document.getElementsByClassName("gameServerToggle")[position] == toggle) {
			break;
		}
	}

	if (gameFilter[position].shown == "true") {
		// Hide.
		gameFilter[position].shown = "false";
		document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[position].classList.add("hidden");
		// Update button text.
		document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[position].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "SHOW";
		document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[position].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Show this game server";

		// Check if other children are hidden.
		if (child) {
			const parent = toggle.parentElement.previousElementSibling.previousElementSibling, 
			gameName = gameData[position].game;
			let allHidden = true;

			for (let i = 0; i < gameFilter.length; i++) {
				if (gameFilter[i].game == gameName) {
					if (gameFilter[i].shown == "true") {
						allHidden = false;
					}
				}
			}
			if (allHidden) {
				parent.checked = false;
				parent.indeterminate = false;
			} else {
				parent.checked = true;
				parent.indeterminate = true;
			}
		}
	} else {
		// Show.
		gameFilter[position].shown = "true";
		document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[position].classList.remove("hidden");
		// Update button text.
		document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[position].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "HIDE";
		document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[position].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Hide this game server";

		// Check if other children are shown.
		if (child) {
			const parent = toggle.parentElement.previousElementSibling.previousElementSibling, 
			gameName = gameData[position].game;
			let allShown = true;

			for (let i = 0; i < gameFilter.length; i++) {
				if (gameFilter[i].game == gameName) {
					if (gameFilter[i].shown == "false") {
						allShown = false;
					}
				}
			}
			if (allShown) {
				parent.checked = true;
				parent.indeterminate = false;
			} else {
				parent.checked = true;
				parent.indeterminate = true;
			}
		}
	}
	
	// Refresh search results.
	searchFilter();

	// Store.
	localStorage.setItem("gameFilterList", JSON.stringify(gameFilter));
}

function toggleGameParentHide(gameSwitch) {
	const gameName = gameSwitch.nextElementSibling.textContent.trim(), 
	parentSwitchStatus = gameSwitch.checked, 
	childrenHolder = gameSwitch.nextElementSibling.nextElementSibling;
	let serverCount = 0;

	if (parentSwitchStatus == false) {
		// Hide servers.
		for (let i = 0; i < gameFilter.length; i++) {
			if (gameFilter[i].game == gameName) {
				serverCount++;

				gameFilter[i].shown = "false";
				document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i].classList.add("hidden");
				// Update button text.
				document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "SHOW";
				document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Show this game server";
			}
		}
		// Toggle switch off.
		for (let i = 0; i < serverCount; i++) {
			childrenHolder.getElementsByTagName("input")[i].checked = false;
		}
		gameSwitch.checked = false;
		gameSwitch.indeterminate = false;
	} else {
		// Show servers.
		for (let i = 0; i < gameFilter.length; i++) {
			if (gameFilter[i].game == gameName) {
				serverCount++;

				gameFilter[i].shown = "true";
				document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i].classList.remove("hidden");
				// Update button text.
				document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "HIDE";
				document.getElementById("resultsContainer").getElementsByClassName("gameContainer")[i].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Hide this game server";
			}
		}
		// Toggle switch on.
		for (let i = 0; i < serverCount; i++) {
			childrenHolder.getElementsByTagName("input")[i].checked = true;
		}
		gameSwitch.checked = true;
	}
	
	// Refresh search results.
	searchFilter();
	
	// Store.
	localStorage.setItem("gameFilterList", JSON.stringify(gameFilter));
}

function hideGameServerButton(button) {
	// Get game name (removed accents) and server region.
	const gameHeader = button.parentElement.parentElement.children[0], 
	gameName = gameHeader.children[1].textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 
	server = gameHeader.children[2].textContent;

	// Find position in gameData.
	let position = 0;
	for (; position < gameData.length; position++) {
		if (gameData[position].game == gameName && gameData[position].server == server) {
			break;
		}
	}

	// Use position to find switch.
	const gameSwitch = document.getElementsByClassName("gameServerToggle")[position];

	// Toggle switch.
	if (gameSwitch.checked == false) {
		gameSwitch.checked = true;
	} else {
		gameSwitch.checked = false;
	}
	// Trigger onchange to hide/show the game.
	gameSwitch.onchange();
}