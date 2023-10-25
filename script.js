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

	document.getElementById("12-hr-time-switch").checked = true;
	
	setTimeFormat();
}
if (localStorage.getItem('showServerDateSwitch') == "true") {
	showServerDate = true;

	document.getElementById("show-server-date-switch").checked = true;
}
if (localStorage.getItem('showSecondsSwitch') == "true") {
	showSeconds = true;

	document.getElementById("show-seconds-switch").checked = true;

	setTimeFormat();
}
if (localStorage.getItem('showHideButtonsSwitch') == "false") {
	document.body.classList.add("hide-buttons-hidden");
	document.getElementById("show-hide-buttons-switch").checked = false;
}
if (localStorage.getItem('showHiddenInSearchSwitch') == "true") {
	showHidden = true;

	document.getElementById("show-hidden-in-search-switch").checked = true;
}
if (localStorage.getItem('compactModeSwitch') == "true") {
	document.body.classList.add("compact");
	document.getElementById("compact-mode-switch").checked = true;
}
// If there's no saved dark theme setting, check for OS theme and apply that.
// OS theme is used until user manually changes this setting.
if (localStorage.getItem('darkThemeSwitch') == "true") {
	document.body.classList.add("dark");
	document.getElementById("dark-theme-switch").checked = true;
} else if (localStorage.getItem('darkThemeSwitch') == "false") {
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
	let gameTimezone = gameData[i].timezone, 
	currentServerTime = now.clone().tz(gameTimezone), 
	todaysDailyReset = gameData[i].dailyReset;
	
	// If daily reset changes during daylight savings, convert using UTC first.
	if (gameData[i].utcDailyReset) {
		todaysDailyReset = moment.tz(todaysDailyReset, "HH:mm", "Etc/UTC");
		// Convert to server time.
		todaysDailyReset = todaysDailyReset.clone().tz(gameTimezone);
	} else {
		todaysDailyReset = moment.tz(todaysDailyReset, "HH:mm", gameTimezone);
	}
	
	// Convert to local.
	let localResetTime = todaysDailyReset.clone().tz(nowZone);

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
	let timeRemaining = moment.preciseDiff(now, localResetTime, true);
	// Display seconds if the setting is on.
	if (showSeconds) {
		timeRemaining = timeRemaining.hours + " hours " + timeRemaining.minutes + " minutes " + timeRemaining.seconds + " seconds "
	} else {
		timeRemaining = timeRemaining.hours + " hours " + timeRemaining.minutes + " minutes";
	}

	// Store.
	// Server timezone todaysDailyReset is stored for printing below.
	gameDataConverted.push(
		{
			dailyReset: localResetTime,
			serverTime: currentServerTime,
			timeToReset: timeRemaining,
			todaysServerReset: todaysDailyReset
		}
	);
}

// Create divs for each game server using template.
// If browser doesn't support templates, use innerHTML instead.
if ("content" in document.createElement("template")) {
	// Create and append results-container for displaying results.
	let gameResults = document.createElement("div");
	gameResults.id = "results-container";
	document.body.appendChild(gameResults);

	// For each game server, clone the template, add game info, then append to results-container.
	for (let i = 0; i < gameData.length; i++) {
		const gameCont = document.getElementById("results-container"),
		template = document.getElementById("game-cont"),
		clone = template.content.cloneNode(true);

		// Add game info.
		clone.querySelectorAll("img")[0].src = "game-icons/" + gameData[i].icon + ".gif";
		clone.querySelectorAll("h3")[0].textContent = gameData[i].game;
		clone.querySelectorAll("h4")[0].textContent = gameData[i].server;

		gameCont.appendChild(clone);
	}
} else {
	// Create divs for each game server and store them in results-container before appending.
	let gameResults = document.createElement("div");
	gameResults.id = "results-container";

	for (let i = 0; i < gameData.length; i++) {
		// Add current game server to results-container.
		gameResults.innerHTML += `
		<div class="game-container">
			<div class="game-header">
				<div class="game-icon">
					<img src="game-icons/${gameData[i].icon}.gif">
				</div>
				<h3>${gameData[i].game}</h3>
				<h4>${gameData[i].server}</h4></div>
			<div class="game-times">
				<div class="local-times">
					<p>Local Reset Time: </p><p></p>
					<p>Time Until Reset: </p><p></p>
				</div>
				<div class="server-times">
					<p>Server Reset Time: </p><p></p>
					<p>Current Server Time: </p><p></p>
				</div>
			</div>
			<div class="buttons">
				<button title="Hide this game server" onclick="hideGameServerButton(this)">HIDE</button>
			</div>
		</div>`;
	}
	// Display results-container.
	document.body.appendChild(gameResults);
}

// Load game time data.
timeCalc();

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

	// Use template depending on if game has more than 1 region.
	if (gameData[i].game === currentGameParent) {
		// If game has multiple servers and is NOT first server detected.
		// Create child menu entry.
		const template = document.getElementById("game-menu-children"),
		clone = template.content.cloneNode(true),
		input = clone.querySelectorAll("input")[0],
		label = clone.querySelectorAll("label")[0];

		input.id = gameData[i].icon + "-" + gameData[i].server.toLowerCase();
		label.htmlFor = gameData[i].icon + "-" + gameData[i].server.toLowerCase();
		label.textContent = " " + gameData[i].server;

		gameFilterCont.querySelectorAll(".game-children:last-child")[0].appendChild(clone);
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

		inputs[0].id = gameData[i].icon;
		labels[0].htmlFor = gameData[i].icon;
		labels[0].title = gameData[i].game;
		span.textContent = gameName;
		button.id = gameData[i].icon + "-children";
		labels[1].htmlFor = gameData[i].icon + "-children";
		// Also add the game as first child.
		inputs[1].id = gameData[i].icon + "-" + gameData[i].server.toLowerCase();
		labels[2].htmlFor = gameData[i].icon + "-" + gameData[i].server.toLowerCase();
		labels[2].textContent = " " + gameData[i].server;

		gameFilterCont.appendChild(clone);
	} else {
		// If the game has only 1 region/server.
		const template = document.getElementById("game-menu-entry"),
		clone = template.content.cloneNode(true),
		input = clone.querySelectorAll("input")[0],
		label = clone.querySelectorAll("label")[0];

		input.id = gameData[i].icon;
		label.htmlFor = gameData[i].icon;
		label.textContent = gameName;
		label.title = gameData[i].game;

		gameFilterCont.appendChild(clone);
	}
}

// Hide game containers.
if (localStorage.getItem('gameFilterList') != null) {
	const gameFilterSaved = getLocalStorageObject('gameFilterList');

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
		currentServerTime = now.clone().tz(gameTimezone), 
		todaysDailyReset = gameData[i].dailyReset;

		// If daily reset changes during daylight savings, convert using UTC first.
		if (gameData[i].utcDailyReset) {
			todaysDailyReset = moment.tz(todaysDailyReset, "HH:mm", "Etc/UTC");
			// Convert to server time.
			todaysDailyReset = todaysDailyReset.clone().tz(gameTimezone);
		} else {
			todaysDailyReset = moment.tz(todaysDailyReset, "HH:mm", gameTimezone);
		}

		// Convert to local.
		let localResetTime = todaysDailyReset.clone().tz(nowZone);

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
		let timeRemaining = moment.preciseDiff(now, localResetTime, true);
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
		gameDataConverted[i].todaysServerReset = todaysDailyReset;
	}

	// Print refreshed values.
	document.getElementById("current-local-time").textContent = now.format(timeFormat);
	document.getElementById("current-local-date").textContent = now.format("dddd, Do MMMM, YYYY");
	for (let i = 0; i < gameData.length; i++) {
		const gameCont = document.getElementById("results-container").getElementsByClassName("game-container")[i], 
		gameBody = gameCont.getElementsByClassName("game-times")[0];

		gameBody.getElementsByTagName("p")[1].textContent = gameDataConverted[i].dailyReset.format(resetTimeFormat);
		gameBody.getElementsByTagName("p")[3].textContent = gameDataConverted[i].timeToReset;
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
	const searchTerm = document.getElementById("filter-search-box").value.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toUpperCase();

	// If empty, reset search display results.
	if (searchTerm == undefined || searchTerm == "") {
		for (let i = 0; i < gameData.length; i++) {
			const gameCont = document.getElementById("results-container").getElementsByClassName("game-container")[i];
			gameCont.removeAttribute("style");
		}
	} else {
		for (let i = 0; i < gameData.length; i++) {
			// Find game name for each container, convert to uppercase, and remove accent marks.
			const gameCont = document.getElementById("results-container").getElementsByClassName("game-container")[i], 
			gameHead = gameCont.getElementsByClassName("game-header")[0], 
			gameName = gameHead.getElementsByTagName("h3")[0].textContent.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toUpperCase();
	
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
	// Find the server's position in gameData.
	let position = 0;
	for (; position < gameData.length; position++) {
		if (document.getElementsByClassName("game-server-toggle")[position] == toggle) {
			break;
		}
	}

	if (gameFilter[position].shown == "true") {
		// Hide.
		gameFilter[position].shown = "false";
		document.getElementById("results-container").getElementsByClassName("game-container")[position].classList.add("hidden");
		// Update button text.
		document.getElementById("results-container").getElementsByClassName("game-container")[position].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "SHOW";
		document.getElementById("results-container").getElementsByClassName("game-container")[position].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Show this game server";

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
		document.getElementById("results-container").getElementsByClassName("game-container")[position].classList.remove("hidden");
		// Update button text.
		document.getElementById("results-container").getElementsByClassName("game-container")[position].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "HIDE";
		document.getElementById("results-container").getElementsByClassName("game-container")[position].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Hide this game server";

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
				document.getElementById("results-container").getElementsByClassName("game-container")[i].classList.add("hidden");
				// Update button text.
				document.getElementById("results-container").getElementsByClassName("game-container")[i].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "SHOW";
				document.getElementById("results-container").getElementsByClassName("game-container")[i].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Show this game server";
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
				document.getElementById("results-container").getElementsByClassName("game-container")[i].classList.remove("hidden");
				// Update button text.
				document.getElementById("results-container").getElementsByClassName("game-container")[i].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].textContent = "HIDE";
				document.getElementById("results-container").getElementsByClassName("game-container")[i].getElementsByClassName("buttons")[0].getElementsByTagName("button")[0].title = "Hide this game server";
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
	const gameSwitch = document.getElementsByClassName("game-server-toggle")[position];

	// Toggle switch.
	if (gameSwitch.checked == false) {
		gameSwitch.checked = true;
	} else {
		gameSwitch.checked = false;
	}
	// Trigger onchange to hide/show the game.
	gameSwitch.onchange();
}