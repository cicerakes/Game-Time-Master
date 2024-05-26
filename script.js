// Load saved custom game data.
var customGameData = [],
customGameDupes = [];

if (localStorage.getItem('custom-game-data') != null) {
	customGameData = getLocalStorageObject('custom-game-data');
	gameData = gameData.concat(customGameData);
	// Check for duplicates in custom in case it is added later in game-data.js.
	gameData.forEach(serv => {
		if (serv.customGameServer) {
			// Remove current (if any) increment while searching for dupes.
			let serverToSearch;
			const serverRegEx = new RegExp("^[a-zA-Z0-9]+-[0-9]+$"),
			incrementedServ = serverRegEx.test(serv.server);
			if (incrementedServ) {
				serverToSearch = serv.server.slice(-3);
			} else {
				serverToSearch = serv.server;
			}

			let numbered = findIncrementDupeGameServer(serv.game, serverToSearch, true);

			if (numbered) {
				// Store any duplicates to notify user.
				let dupeServ = {
					game: serv.game,
					oldServer: serv.server,
					newServer: numbered
				}
				customGameDupes.push(dupeServ);
				// Save new server name.
				serv.server = numbered;

				// Find matching server in customGameData and update.
				customGameData.forEach(custServ => {
					if (custServ.game == serv.game && custServ.server == serv.server) {
						custServ.server = numbered;
					}
				});

				// Save changes to localStorage.
				localStorage.setItem("custom-game-data", JSON.stringify(customGameData));
			}
		}
	});
}

// Notify user about duplicates that have been updated.
if (customGameDupes.length > 0) {
	const dupesTable = document.getElementById("dupe-notif-table").getElementsByTagName("tbody")[0];
	customGameDupes.forEach(serv => {
		let row = document.createElement("tr"),
		gameCell = document.createElement("td"),
		oldServCell = document.createElement("td"),
		newServCell = document.createElement("td");

		gameCell.innerText = serv.game;
		oldServCell.innerText = serv.oldServer;
		newServCell.innerText = serv.newServer;
		row.appendChild(gameCell);
		row.appendChild(oldServCell);
		row.appendChild(newServCell);
		dupesTable.appendChild(row);
	});

	// Display notification.
	openDupeUpdateNotif();
}

// Ensure gameData is sorted.
gameData.sort(function (a, b) {
	return a.game.localeCompare(b.game) || a.server.localeCompare(b.server);
});

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
sortByTimeRemaining = false,
showHidden = true;

if (localStorage.getItem('12-hr-time-switch') == "true") {
	twelveHourFormat = true;

	document.getElementById("12-hr-time-switch").checked = true;

	setTimeFormat();
}
if (localStorage.getItem('show-server-date-switch') == "true") {
	showServerDate = true;

	document.getElementById("show-server-date-switch").checked = true;
}
if (localStorage.getItem('show-seconds-switch') == "true") {
	showSeconds = true;

	document.getElementById("show-seconds-switch").checked = true;

	setTimeFormat();
}
if (localStorage.getItem("sort-by-time-remaining-switch") == "true") {
	sortByTimeRemaining = true;

	document.getElementById("sort-by-time-remaining-switch").checked = true;
}
if (localStorage.getItem('show-hide-buttons-switch') == "false") {
	document.body.classList.add("hide-buttons-hidden");
	document.getElementById("show-hide-buttons-switch").checked = false;
}
if (localStorage.getItem('show-hidden-in-search-switch') == "false") {
	showHidden = false;

	document.getElementById("show-hidden-in-search-switch").checked = false;
}
if (localStorage.getItem('compact-mode-switch') == "true") {
	document.body.classList.add("compact");
	document.getElementById("compact-mode-switch").checked = true;
}
// If there's no saved dark theme setting, check for OS theme and apply that.
// OS theme is used until user manually changes this setting.
if (localStorage.getItem('dark-theme-switch') == "true") {
	document.body.classList.add("dark");
	document.getElementById("dark-theme-switch").checked = true;
} else if (localStorage.getItem('dark-theme-switch') == "false") {
	// Do nothing and load default theme.
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	document.body.classList.add("dark");
	document.getElementById("dark-theme-switch").checked = true;
}

// Show local time data.
var now = moment(),
nowZone = moment.tz.guess();
document.getElementById("current-local-time").textContent = now.format(timeFormat);
document.getElementById("current-local-date").textContent = now.format("dddd, Do MMMM, YYYY");
document.getElementById("current-local-timezone").textContent = nowZone + " — " + now.format("[GMT ]Z");

// Convert game times to local time zone and store results.
var gameDataConverted = [];
for (let i = 0; i < gameData.length; i++) {
	const gameTimezone = gameData[i].timezone,
	currentServerTime = now.clone().tz(gameTimezone);
	let todaysDailyReset = gameData[i].dailyReset;

	// If daily reset changes during daylight savings, convert using UTC first.
	if (gameData[i].utcDailyReset) {
		todaysDailyReset = moment.tz(todaysDailyReset, "HH:mm", "Etc/UTC");
		// Convert to server time.
		todaysDailyReset = todaysDailyReset.clone().tz(gameTimezone);
	} else {
		todaysDailyReset = moment.tz(todaysDailyReset, "HH:mm", gameTimezone);
	}

	// Convert to local.
	const localResetTime = todaysDailyReset.clone().tz(nowZone);

	// Change local reset time to tomorrow if it has already passed.
	const todayResetPassed = (moment.preciseDiff(now, localResetTime, true)).firstDateWasLater;
	if (todayResetPassed) {
		if (todaysDailyReset.hours() == 0) {
			// Add 48 hours to fix midnight reset using previous day.
			localResetTime.add(48, "h");
		} else {
			localResetTime.add(24, "h");
		}
	}

	// Calculate time left until daily reset.
	const timeRemaining = moment.preciseDiff(now, localResetTime, true);

	// Store.
	// Server timezone todaysDailyReset is stored for printing below.
	gameDataConverted.push(
		{
			game: gameData[i].game,
			server: gameData[i].server,
			timezone: gameData[i].timezone,
			dailyReset: gameData[i].dailyReset,
			icon: gameData[i].icon,
			customGameServer: gameData[i].customGameServer,
			utcDailyReset: gameData[i].utcDailyReset,
			localDailyReset: localResetTime,
			serverTime: currentServerTime,
			hoursTilReset: timeRemaining.hours,
			minutesTilReset: timeRemaining.minutes,
			secondsTilReset: timeRemaining.seconds,
			todaysServerReset: todaysDailyReset
		}
	);
}

// Create divs for each game server.
createGameResults();

// Load game time data.
timeCalc();

createGameFilterMenu();

// Initial hiding of all filtered games.
hideFilteredGames();

// Refresh time values every minute/second.
var refresh;

setRefresh();

// Generate list of timezones for custom game form.
initialiseTimezoneList();

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

function createGameResults() {
	// Create divs for each game server using template.
	// Create and append results-container for displaying results.
	const gameResults = document.createElement("div");
	gameResults.id = "results-container";
	document.body.appendChild(gameResults);

	if (sortByTimeRemaining) {
		sortDataByTimeRemaining();
	} else {
		sortDataByGameName();
	}

	// For each game server, clone the template, add game info, then append to results-container.
	for (let i = 0; i < gameData.length; i++) {
		const gameCont = document.getElementById("results-container");
		let template;
		// Custom game servers use their own template.
		if (gameDataConverted[i].customGameServer) {
			template = document.getElementById("custom-game-cont");
		} else {
			template = document.getElementById("game-cont");
		}
		const clone = template.content.cloneNode(true);

		// Add game info.
		// No icon needed for custom game servers.
		if (!gameDataConverted[i].customGameServer) {
			clone.querySelectorAll("img")[0].src = "game-icons/" + gameDataConverted[i].icon + ".gif";
		}
		clone.querySelectorAll("h3")[0].textContent = gameDataConverted[i].game;
		clone.querySelectorAll("h4")[0].textContent = gameDataConverted[i].server;

		gameCont.appendChild(clone);
	}
}

function timeCalc() {
	// Refresh time.
	now = moment();

	// Refresh converted times.
	for (let i = 0; i < gameData.length; i++) {
		const gameTimezone = gameDataConverted[i].timezone,
		currentServerTime = now.clone().tz(gameTimezone);
		let todaysDailyReset = gameDataConverted[i].dailyReset;

		// If daily reset changes during daylight savings, convert using UTC first.
		if (gameDataConverted[i].utcDailyReset) {
			todaysDailyReset = moment.tz(todaysDailyReset, "HH:mm", "Etc/UTC");
			// Convert to server time.
			todaysDailyReset = todaysDailyReset.clone().tz(gameTimezone);
		} else {
			todaysDailyReset = moment.tz(todaysDailyReset, "HH:mm", gameTimezone);
		}

		// Convert to local.
		const localResetTime = todaysDailyReset.clone().tz(nowZone);

		// Change local reset time to tomorrow if it has already passed.
		const todayResetPassed = (moment.preciseDiff(now, localResetTime, true)).firstDateWasLater;
		if (todayResetPassed) {
			if (todaysDailyReset.hours() == 0) {
				// Add 48 hours to fix midnight reset using previous day.
				localResetTime.add(48, "h");
			} else {
				localResetTime.add(24, "h");
			}
		}

		// Calculate time left until daily reset.
		const timeRemaining = moment.preciseDiff(now, localResetTime, true);

		// Replace converted times.
		gameDataConverted[i].localDailyReset = localResetTime;
		gameDataConverted[i].serverTime = currentServerTime;
		gameDataConverted[i].hoursTilReset = timeRemaining.hours,
		gameDataConverted[i].minutesTilReset = timeRemaining.minutes,
		gameDataConverted[i].secondsTilReset = timeRemaining.seconds,
		gameDataConverted[i].todaysServerReset = todaysDailyReset;
	}

	// If sorting by time remaining, refresh the sort order every hour.
	// Currently no game has a reset time outside of x:00, so any more frequent is unnecessary.
	if (sortByTimeRemaining && now.minutes() == 0 && (!showSeconds || now.seconds() == 1)) {
		sortDataByTimeRemaining();
		clearGameResults();
		createGameResults();
		refreshFilteredGames();
		// Refresh search results in case search is being used during refresh.
		searchFilter();
	}

	// Print refreshed values.
	document.getElementById("current-local-time").textContent = now.format(timeFormat);
	document.getElementById("current-local-date").textContent = now.format("dddd, Do MMMM, YYYY");
	for (let i = 0; i < gameData.length; i++) {
		const gameCont = document.getElementById("results-container").getElementsByClassName("game-container")[i],
		gameBody = gameCont.getElementsByClassName("game-times")[0];

		let timeTilReset;
		// Display seconds if the setting is on.
		if (showSeconds) {
			timeTilReset = gameDataConverted[i].hoursTilReset + " hours " + gameDataConverted[i].minutesTilReset + " minutes " + gameDataConverted[i].secondsTilReset + " seconds "
		} else {
			timeTilReset = gameDataConverted[i].hoursTilReset + " hours " + gameDataConverted[i].minutesTilReset + " minutes";
		}

		gameBody.getElementsByTagName("p")[1].textContent = gameDataConverted[i].localDailyReset.format(resetTimeFormat);
		gameBody.getElementsByTagName("p")[3].textContent = timeTilReset;
		// Add prefix for timezone abbreviation if it's an offset.
		if (gameDataConverted[i].serverTime.format("z").includes("-") || gameDataConverted[i].serverTime.format("z").includes("+")) {
			gameBody.getElementsByTagName("p")[5].textContent = gameDataConverted[i].todaysServerReset.format(resetTimeFormat) + " UTC" + gameDataConverted[i].serverTime.format("z");
			gameBody.getElementsByTagName("p")[7].textContent = gameDataConverted[i].serverTime.format(timeFormat) + " UTC" + gameDataConverted[i].serverTime.format("z");
		} else {
			gameBody.getElementsByTagName("p")[5].textContent = gameDataConverted[i].todaysServerReset.format(resetTimeFormat + " z");
			gameBody.getElementsByTagName("p")[7].textContent = gameDataConverted[i].serverTime.format(timeFormat + " z");
		}
		// Add date to curent server time if the setting is on.
		if (showServerDate) {
			gameBody.getElementsByTagName("p")[7].insertAdjacentHTML("beforeend", "<br>" + gameDataConverted[i].serverTime.format("Do MMMM"));
		}
	}
}

function createGameFilterMenu() {
	// Create game server menu entries.
	let currentGameParent;
	for (let i = 0; i < gameData.length; i++) {
		const gameFilterCont = document.getElementById("game-filter-settings");
		// Use custom menu name if it exists.
		let gameName = gameData[i].game;
		// Prefix with a space for padding.
		if (gameData[i].menuName) {
			gameName = " " + gameData[i].menuName;
		} else {
			gameName = " " + gameName;
		}
		// Generate id based on game name with (most) punctuation and accents removed.
		const gameId = gameData[i].game.normalize().replace(/[&!:<>"'`=\/\s]/g, "-").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();

		// Use template depending on if game has more than 1 region.
		if (gameData[i].game === currentGameParent) {
			// If game has multiple servers and is NOT first server detected.
			// Create child menu entry.
			const template = document.getElementById("game-menu-children"),
			clone = template.content.cloneNode(true),
			input = clone.querySelectorAll("input")[0],
			label = clone.querySelectorAll("label")[0];

			input.id = gameId + "-" + gameData[i].server.toLowerCase();
			label.htmlFor = gameId + "-" + gameData[i].server.toLowerCase();
			label.textContent = " " + gameData[i].server;

			gameFilterCont.querySelectorAll(".game-children:last-child")[0].appendChild(clone);
		} else if (i == (gameData.length - 1)) {
			// If the game is last in the menu and not a child, it cannot be a parent.
			const template = document.getElementById("game-menu-entry"),
			clone = template.content.cloneNode(true),
			input = clone.querySelectorAll("input")[0],
			label = clone.querySelectorAll("label")[0];

			input.id = gameId;
			label.htmlFor = gameId;
			label.textContent = gameName;
			label.title = gameData[i].game;

			gameFilterCont.appendChild(clone);
		} else if (gameData[i].game === gameData[i+1].game) {
			// If game has multiple servers and is first server detected.
			// Save name for checking children.
			currentGameParent = gameData[i].game;

			// Create parent menu entry.
			const template = document.getElementById("game-menu-parent"),
			clone = template.content.cloneNode(true),
			inputs = clone.querySelectorAll("input"),
			labels = clone.querySelectorAll("label"),
			button = clone.querySelectorAll("button")[0],
			span = clone.querySelectorAll("span")[0];

			inputs[0].id = gameId;
			labels[0].htmlFor = gameId;
			labels[0].title = gameData[i].game;
			span.textContent = gameName;
			button.id = gameId + "-children";
			labels[1].htmlFor = gameId + "-children";
			// Also add the game as first child.
			inputs[1].id = gameId + "-" + gameData[i].server.toLowerCase();
			labels[2].htmlFor = gameId + "-" + gameData[i].server.toLowerCase();
			labels[2].textContent = " " + gameData[i].server;

			gameFilterCont.appendChild(clone);
		} else {
			// If the game has only 1 region/server.
			const template = document.getElementById("game-menu-entry"),
			clone = template.content.cloneNode(true),
			input = clone.querySelectorAll("input")[0],
			label = clone.querySelectorAll("label")[0];

			input.id = gameId;
			label.htmlFor = gameId;
			label.textContent = gameName;
			label.title = gameData[i].game;

			gameFilterCont.appendChild(clone);
		}
	}
}

function clearGameFilterMenu() {
	const gameFilterCont = document.getElementById("game-filter-settings");
	gameFilterCont.innerHTML = '<h2 class="section-heading">Games</h2><button id="games-menu-section" class="section-toggle-arrow" onclick="gamesMenuSectionToggle(this)"></button><label for="games-menu-section"></label>';
}

// Trigger onchange to hide/show games and update gameFilter to match what's saved.
function hideFilteredGames() {
	// Hide game containers.
	if (localStorage.getItem("gameFilterList") != null) {
		const gameFilterSaved = getLocalStorageObject("gameFilterList");

		for (let i = 0; i < gameFilterSaved.length; i++) {
			if (gameFilterSaved[i].shown == "false") {
				let serverCount = 0,
				skippedParent = false,
				containerPosition = 0;

				for (let y = 4; y < document.getElementById("game-filter-settings").childElementCount; y+=2, containerPosition++) {
					const gameLabel = document.getElementById("game-filter-settings").children[y],
					gameName = gameData[containerPosition].game;

					if (gameLabel.className.includes("game-parent")) {
						skippedParent = true;

						for (let x = 0; x < gameFilter.length; x++) {
							if (gameFilter[x].game == gameData[containerPosition].game) {
								serverCount++;
							}
						}
					} else if (gameFilterSaved[i].game == gameName) {
						gameLabel.previousElementSibling.checked = false;
						toggleGameServerHide(document.getElementsByClassName("game-server-toggle")[containerPosition]);
					}

					// Look at next div for the children.
					if (skippedParent) {
						y++;
						for (let z = 0; z < serverCount; z++, containerPosition++) {
							const childInput = document.getElementById("game-filter-settings").children[y].getElementsByTagName("input")[z];

							// Compare current child with server in saved filter to see if there's a match.
							if (gameFilterSaved[i].game == gameFilter[containerPosition].game && gameFilterSaved[i].server == gameFilter[containerPosition].server) {
								childInput.checked = false;
								toggleGameServerHide(document.getElementsByClassName("game-server-toggle")[containerPosition], true);
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
}

function toggleMenu() {
	const menuButton = document.getElementById("main-menu-btn");

	if (document.getElementById("menu").style.marginLeft == "0px") {
		// Close.
		document.getElementById("menu").removeAttribute("style");

		menuButton.textContent = "☰";

		document.getElementById("outside-menu").removeAttribute("style");
	} else {
		// Open.
		document.getElementById("menu").style.marginLeft = "0px";

		menuButton.textContent = "✖";

		document.getElementById("outside-menu").style.width = "100%";
		document.getElementById("outside-menu").style.height = "100%";
	}
}

function searchFilter () {
	// Convert search term to uppercase and remove accent marks.
	const searchTerm = document.getElementById("filter-search-box").value.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toUpperCase(),
	gameCont = document.getElementById("results-container"),
	gameServers = gameCont.getElementsByClassName("game-container");

	// If empty, reset search display results.
	if (searchTerm == undefined || searchTerm == "") {
		for (let i = 0; i < gameServers.length; i++) {
			const gameCont = gameServers[i];
			gameCont.removeAttribute("style");
		}
	} else {
		for (let i = 0; i < gameServers.length; i++) {
			// Find game name for each container, convert to uppercase, and remove accent marks and spaces.
			const gameCont = gameServers[i],
			gameName = gameCont.getElementsByClassName("game-header")[0].getElementsByTagName("h3")[0].textContent,
			gameNameConverted = gameName.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toUpperCase();

			if (!gameNameConverted.includes(searchTerm)) {
				// Hide.
				gameCont.style.display = "none";
			} else {
				// Show, if server isn't hidden (depending on showHidden setting).
				// Don't show hidden servers if there's no search term(s).
				if (showHidden && (searchTerm != undefined || searchTerm != "")) {
					gameCont.style.display = "block";
				} else {
					const gameRegion = gameCont.getElementsByClassName("game-header")[0].getElementsByTagName("h4")[0].textContent;

					for (let x = 0; x < gameFilter.length; x++) {
						if (gameFilter[x].game == gameName && gameFilter[x].server == gameRegion && gameFilter[x].shown == "true") {
							gameCont.style.display = "block";

							break;
						} else {
							// Hide.
							// Needed for when showHidden was on, but switched off later.
							gameCont.style.display = "none";
						}
					}
				}
			}
		}
	}
}

function settingToggle(setting) {
	const settingId = setting.id;
	localStorage.setItem([settingId], setting.checked);

	if (settingId == "12-hr-time-switch") {
		if (setting.checked) {
			twelveHourFormat = true;
		} else {
			twelveHourFormat = false;
		}
		setTimeFormat()
		timeCalc();
	} else if (settingId == "show-server-date-switch") {
		if (setting.checked) {
			showServerDate = true;
		} else {
			showServerDate = false;
		}
		timeCalc();
	} else if (settingId == "show-seconds-switch") {
		if (setting.checked) {
			showSeconds = true;
		} else {
			showSeconds = false;
		}
		setTimeFormat();
		timeCalc();
		setRefresh();
	} else if (settingId == "sort-by-time-remaining-switch") {
		if (setting.checked) {
			sortByTimeRemaining = true;
		} else {
			sortByTimeRemaining = false;
		}
		clearGameResults();
		createGameResults();
		timeCalc();
		refreshFilteredGames();
		// Refresh search results in case search is being used during toggle.
		searchFilter();
	} else if (settingId == "show-hide-buttons-switch") {
		if (setting.checked) {
			document.body.classList.remove("hide-buttons-hidden");
		} else {
			document.body.classList.add("hide-buttons-hidden");
		}
	} else if (settingId == "show-hidden-in-search-switch") {
		if (setting.checked) {
			showHidden = true;
		} else {
			showHidden = false;
		}
		searchFilter();
	} else if (settingId == "compact-mode-switch") {
		if (setting.checked) {
			document.body.classList.add("compact");
		} else {
			document.body.classList.remove("compact");
		}
	} else if (settingId == "dark-theme-switch") {
		if (setting.checked) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}
}

function showSearch(button) {
	const searchBox = document.getElementById("filter-search-box");

	button.style.display = "none";
	document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].style.display = "none";
	searchBox.style.display = "block";
	searchBox.style.width = null;
	searchBox.focus();
}

function searchHide(searchBox) {
	const searchButton = document.getElementById("filter-search-open");

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
var gamesMenuSectionHeight = document.getElementById("game-filter-settings").offsetHeight;
// Set the section height to a value (instead of auto) to enable initial transistion animation.
document.getElementById("game-filter-settings").style.height = gamesMenuSectionHeight + "px";
// Collapse the games section on page load.
gamesMenuSectionToggle(document.getElementById("games-menu-section"));

function gamesMenuSectionToggle(dropArrow) {
	const menuSection = dropArrow.parentElement;

	if (menuSection.style.height == "36px") {
		// Open.
		dropArrow.removeAttribute("style");
		menuSection.style.height = gamesMenuSectionHeight + "px";
		menuSection.classList.remove("collapsed");
	} else {
		// Close.
		dropArrow.style.transform = "rotate(45deg)";
		dropArrow.style.top = "-15px";
		menuSection.style.height = "36px";
		menuSection.classList.add("collapsed");
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
	document.getElementById("game-filter-settings").style.height = gamesMenuSectionHeight + "px";
}

function toggleGameServerHide(toggle, child) {
	const label = toggle.nextElementSibling,
	gameCont = document.getElementById("results-container"),
	gameServers = gameCont.getElementsByClassName("game-container");
	let parentLabel,
	gameName,
	gameRegion,
	beingShown,
	position = 0;

	if (!child) {
		// If game with one server.
		gameName = label.title;
		// Region is retrieved later.
	} else {
		// If game with multiple servers.
		// Find game name from parent.
		parentLabel = toggle.parentElement.previousElementSibling;
		gameName = parentLabel.title;
		// Game region is taken from label, with leading space removed.
		gameRegion = label.innerText.trim();
	}

	// Find game in filter list.
	for (; position < gameFilter.length; position++) {
		// Must match both game name and region, unless there's only one.
		if (gameFilter[position].game == gameName && (gameFilter[position].server == gameRegion || !child)) {
			if (gameFilter[position].shown == "false") {
				// Show.
				gameFilter[position].shown = "true";
				beingShown = true;

				break;
			} else {
				// Hide.
				gameFilter[position].shown = "false";
				beingShown = false;

				break;
			}
		}
	}

	// Find game div.
	for (let i = 0; i < gameServers.length; i++) {
		const gameServer = gameServers[i];

		if (gameServer.getElementsByTagName("h3")[0].innerText == gameFilter[position].game && gameServer.getElementsByTagName("h4")[0].innerText == gameFilter[position].server) {
			if (beingShown) {
				gameServer.classList.remove("hidden");
				// Update button text.
				gameServer.getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "HIDE";
				gameServer.getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Hide this game server";
			} else {
				gameServer.classList.add("hidden");
				// Update button text.
				gameServer.getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "SHOW";
				gameServer.getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Show this game server";
			}

			break;
		}
	}

	if (child) {
		const parentCheck = parentLabel.previousElementSibling;

		if (beingShown) {
			// Check if other children are shown.
			let allChildrenShown = true;

			for (let i = 0; i < gameFilter.length; i++) {
				if (gameFilter[i].game == gameName) {
					if (gameFilter[i].shown == "false") {
						allChildrenShown = false;
					}
				}
			}
			if (allChildrenShown) {
				parentCheck.checked = true;
				parentCheck.indeterminate = false;
			} else {
				parentCheck.checked = true;
				parentCheck.indeterminate = true;
			}
		
		} else {
			// Check if other children are hidden.
			let allChildrenHidden = true;

			for (let i = 0; i < gameFilter.length; i++) {
				if (gameFilter[i].game == gameName) {
					if (gameFilter[i].shown == "true") {
						allChildrenHidden = false;

						break;
					}
				}
			}

			if (allChildrenHidden) {
				parentCheck.checked = false;
				parentCheck.indeterminate = false;
			} else {
				parentCheck.checked = true;
				parentCheck.indeterminate = true;
			}
		}
	}

	// Refresh search results.
	searchFilter();

	// Store.
	localStorage.setItem("gameFilterList", JSON.stringify(gameFilter));
}

function toggleGameParentHide(gameSwitch) {
	const parentSwitchStatus = gameSwitch.checked,
	childrenSwitches = gameSwitch.nextElementSibling.nextElementSibling.getElementsByTagName("input");

	if (parentSwitchStatus == false) {
		// Hide child servers.
		for (let i = 0; i < childrenSwitches.length; i++) {
			if (childrenSwitches[i].checked == true) {
				childrenSwitches[i].checked = false;
				toggleGameServerHide(childrenSwitches[i], true);
			}
			
		}
	} else {
		// Show child servers.
		for (let i = 0; i < childrenSwitches.length; i++) {
			if (childrenSwitches[i].checked == false) {
				childrenSwitches[i].checked = true;
				toggleGameServerHide(childrenSwitches[i], true);
			}
		}
	}
}

function hideGameServerButton(button) {
	// Get game name (removed accents) and server region.
	const gameHeader = button.parentElement.parentElement.children[0],
	gameName = gameHeader.children[1].textContent,
	server = gameHeader.children[2].textContent;

	// Find position in gameData.
	let position = 0;
	for (; position < gameData.length; position++) {
		if (gameData[position].game == gameName && gameData[position].server == server) {
			break;
		}
	}

	// Use position to find switch.
	const gameSwitch = document.getElementsByClassName("game-server-toggle")[position];

	// Toggle switch.
	if (gameSwitch.checked == false) {
		gameSwitch.checked = true;
	} else {
		gameSwitch.checked = false;
	}

	// Trigger onchange to hide/show the game.
	if (gameSwitch.parentElement.className == "game-children") {
		toggleGameServerHide(gameSwitch, true);
	} else {
		toggleGameServerHide(gameSwitch);
	}
}

function sortDataByTimeRemaining() {
	gameDataConverted.sort(function (a, b) {
		return a.hoursTilReset - b.hoursTilReset || a.minutesTilReset - b.minutesTilReset;
	});
}

function sortDataByGameName() {
	gameDataConverted.sort(function (a, b) {
		return a.game.localeCompare(b.game) || a.server.localeCompare(b.server);
	});
}

function clearGameResults() {
	document.getElementById("results-container").remove();
}

// Re-hide filtered games when refreshing #results-container (due to sorting by time).
// This will not edit gameFilter[].
function refreshFilteredGames() {
	const gameCont = document.getElementById("results-container"),
	gameServers = gameCont.getElementsByClassName("game-container");

	// For every game that's hidden in the filter, find it in #results-container and hide it.
	for (let i = 0; i < gameFilter.length; i++) {
		if (gameFilter[i].shown == "false") {
			for (let x = 0; x < gameServers.length; x++) {
				const gameServer = gameServers[x];
		
				if (gameServer.getElementsByTagName("h3")[0].innerText == gameFilter[i].game && gameServer.getElementsByTagName("h4")[0].innerText == gameFilter[i].server) {
					gameServer.classList.add("hidden");
					// Update button text.
					gameServer.getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "SHOW";
					gameServer.getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Show this game server";

					break;
				}
			}
		}
		
	}
}

function initialiseTimezoneList() {
	const timezones = moment.tz.names(),
	tzSelect = document.getElementById("custom-timezone-input");

	timezones.forEach(tz => {
		let tzOption = document.createElement('option'),
		tzValue = tz;
		tzOption.innerText = tz;
		// Reverse the value of offsets so they functionally match display.
		if (tzValue.includes("GMT") || tzValue.includes("UTC")) {
			if (tzValue.includes("+")) {
				tzValue = tzValue.replace("+", "-");
			} else if (tzValue.includes("-")) {
				tzValue = tzValue.replace("-", "+");
			}
		}
		tzOption.value = tzValue;

		tzSelect.appendChild(tzOption);
	});
}

function toggleFormInfo(btn) {
	const formInfo = btn.nextElementSibling.nextElementSibling;

	if (btn.innerText == "SHOW MORE INFO") {
		btn.innerText = "SHOW LESS INFO"
		formInfo.classList.remove("hidden");
	} else {
		btn.innerText = "SHOW MORE INFO"
		formInfo.classList.add("hidden");
	}
}

function openCustomGameForm() {
	// If confirmation is open, close it.
	if (!document.getElementById("add-custom-form-confirmation").classList.contains("hidden")) {
		closeCustomGameConfirm();
	}
	if (!document.getElementById("del-custom-form-confirmation").classList.contains("hidden")) {
		closeDeleteCustomGameConfirm();
	}
	if (!document.getElementById("dupe-custom-notif").classList.contains("hidden")) {
		closeDupeUpdateNotif();
	}

	document.getElementById("dialog-holder-bg").style.display = "flex";
	document.getElementById("add-custom-form").classList.remove("hidden");
}

function closeCustomGameForm() {
	const formInfoBtns = document.getElementsByClassName("more-info-btn");

	// Clear fields.
	document.getElementById("add-custom-form").reset();

	// Hide more info.
	for (let i = 0; i < formInfoBtns.length; i++) {
		if (!formInfoBtns[i].nextElementSibling.nextElementSibling.classList.contains("hidden")) {
			formInfoBtns[i].innerText = "SHOW MORE INFO"
			formInfoBtns[i].nextElementSibling.nextElementSibling.classList.add("hidden");
		}
	}

	// Close form.
	document.getElementById("add-custom-form").classList.add("hidden");
	// Close dialog holder.
	document.getElementById("dialog-holder-bg").style.display = "none";
}

function submitCustomGameForm() {
	if (document.forms["add-custom-form"].reportValidity()) {
		const formData = new FormData(document.getElementById("add-custom-form"));
		// Convert daylight savings from string to boolean.
		let daylightSavings = (formData.get("daylight-savings") === "true");

		// If duplicate of existing, add number to server.
		let server = formData.get("server");
		const numbered = findIncrementDupeGameServer(formData.get("game-name"), server);
		
		if (numbered) {
			server = numbered;
		}

		let customGameServerObj = {};
		customGameServerObj.game = formData.get("game-name");
		customGameServerObj.server = server;
		customGameServerObj.timezone = formData.get("timezone");
		customGameServerObj.dailyReset = formData.get("daily-reset");
		customGameServerObj.utcDailyReset = daylightSavings;
		customGameServerObj.customGameServer = true;

		// Save to localStorage.
		customGameData.push(customGameServerObj);
		localStorage.setItem("custom-game-data", JSON.stringify(customGameData));

		// Update game list.
		gameData.push(customGameServerObj);
		// Ensure gameData is always alphabetical.
		gameData.sort(function (a, b) {
			return a.game.localeCompare(b.game) || a.server.localeCompare(b.server);
		});

		// Update filter list.
		gameFilter.push(
			{
				game: customGameServerObj.game,
				server: customGameServerObj.server,
				shown: "true"
			}
		);
		// Ensure gameFilter is always alphabetical.
		gameFilter.sort(function (a, b) {
			return a.game.localeCompare(b.game) || a.server.localeCompare(b.server);
		});

		// Update converted list.
		gameDataConverted.push(customGameServerObj);

		// Update filter menu.
		clearGameFilterMenu();
		createGameFilterMenu();

		// Refresh game results.
		clearGameResults();
		createGameResults();
		timeCalc();
		refreshFilteredGames();
		// Refresh search results in case search is being used during submission.
		searchFilter();

		closeCustomGameForm();
		// Show confirmation.
		if (numbered) {
			openCustomGameConfirm(server);
		} else {
			openCustomGameConfirm();
		}
	}
}

// Return incremented server number if duplicate found, else false.
function findIncrementDupeGameServer(gameName, server, customOnLoad) {
	// Find matching game servers.
	const matchingGameName = gameData.filter((serv) => serv.game.toLowerCase() == gameName.toLowerCase()),
	serverRegEx = new RegExp("^" + server.toLowerCase() + "$|^" + server.toLowerCase() + "-[0-9]+$"),
	matchingServers = matchingGameName.filter((serv) => serverRegEx.test(serv.server.toLowerCase()));

	// Prevent matching with itself if checking custom game on start up, as it was assumed the checked game had not been added to gameData yet.
	if (matchingServers.length == 1 && customOnLoad) {
		return false;
	} else if (matchingServers.length > 0) {
		// Find current highest increment, if any.
		let currentIncr = matchingServers[matchingServers.length - 1].server.match(/-[0-9]+$/);

		if (currentIncr != null) {
			// Remove hyphen.
			const currentNum = currentIncr[0].slice(-2);
			// Increment number.
			let newNum = parseInt(currentNum) + 1;
			// Add leading zero to ensure proper sorting.
			// Only 1 zero as it is assumed users won't be adding more than 99 duplicate game servers.
			if (newNum < 10) {
				server = server + "-0" + newNum;
			} else {
				server = server + "-" + newNum;
			}
		} else {
			// Add number.
			server = server + "-01";
		}

		return server;
	} else {
		return false;
	}
}

function openCustomGameConfirm(numberedServer) {
	if (numberedServer) {
		document.getElementById("duplicate-notice").classList.remove("hidden");
		document.getElementById("dupe-cust-game").innerHTML = numberedServer;
	}

	document.getElementById("dialog-holder-bg").style.display = "flex";
	document.getElementById("add-custom-form-confirmation").classList.remove("hidden");
}

function closeCustomGameConfirm() {
	// Reset message.
	if (!document.getElementById("duplicate-notice").classList.contains("hidden")) {
		document.getElementById("duplicate-notice").classList.add("hidden");
	}
	document.getElementById("dupe-cust-game").innerHTML = "";

	// Close.
	document.getElementById("dialog-holder-bg").style.display = "none";
	document.getElementById("add-custom-form-confirmation").classList.add("hidden");
}

function openDeleteCustomGameConfirm(button) {
	// Get game name and server region.
	const gameHeader = button.parentElement.parentElement.children[0],
	gameName = gameHeader.children[1].textContent,
	server = gameHeader.children[2].textContent;

	// Display confirmation.
	document.getElementById("del-cust-game").innerText = gameName + " - " + server;
	document.getElementById("dialog-holder-bg").style.display = "flex";
	document.getElementById("del-custom-form-confirmation").classList.remove("hidden");

	// Prepare to delete.
	document.getElementById("del-custom-confirm-btn").dataset.gameName = gameName;
	document.getElementById("del-custom-confirm-btn").dataset.server = server;
}

function closeDeleteCustomGameConfirm() {
	// Reset message and button dataset.
	document.getElementById("del-cust-game").innerText = "";
	document.getElementById("del-custom-confirm-btn").dataset.gameName = "";
	document.getElementById("del-custom-confirm-btn").dataset.server = "";

	// Close.
	document.getElementById("dialog-holder-bg").style.display = "none";
	document.getElementById("del-custom-form-confirmation").classList.add("hidden");
}

function delGameServer(button) {
	// Get game data from button dataset.
	const gameName = button.dataset.gameName,
	server = button.dataset.server,
	// Find position in gameData, customGameData, and converted.
	gameDataIndex = gameData.findIndex((serv) => serv.game == gameName && serv.server == server),
	customGameDataIndex = customGameData.findIndex((serv) => serv.game == gameName && serv.server == server),
	convertedGameDataIndex = gameDataConverted.findIndex((serv) => serv.game == gameName && serv.server == server);

	// Delete.
	customGameData.splice(customGameDataIndex, 1);
	gameData.splice(gameDataIndex, 1);
	gameDataConverted.splice(convertedGameDataIndex, 1);
	// Assumes sorting in filters is same as gameData.
	gameFilter.splice(gameDataIndex, 1);

	// Update local storage.
	localStorage.setItem("custom-game-data", JSON.stringify(customGameData));
	localStorage.setItem("gameFilterList", JSON.stringify(gameFilter));

	// Refresh display.
	// Update filter menu.
	clearGameFilterMenu();
	createGameFilterMenu();
	// Refresh game results.
	clearGameResults();
	createGameResults();
	timeCalc();
	refreshFilteredGames();
	// Refresh search results in case search is being used during deletion.
	searchFilter();

	// Close.
	closeDeleteCustomGameConfirm();
}

function openDupeUpdateNotif() {
	document.getElementById("dialog-holder-bg").style.display = "flex";
	document.getElementById("dupe-custom-notif").classList.remove("hidden");
}

function closeDupeUpdateNotif() {
	// Reset table contents.
	document.getElementById("dupe-notif-table").getElementsByTagName("tbody")[0].innerHTML = "";

	// Close.
	document.getElementById("dialog-holder-bg").style.display = "none";
	document.getElementById("dupe-custom-notif").classList.add("hidden");
}