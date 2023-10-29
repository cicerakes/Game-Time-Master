const gameData = [
	{
		game: "A3!",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "a3"
	},
	{
		game: "Aether Gazer",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "05:00",
		icon: "aether-gazer"
	},
	{
		game: "AFK Arena",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "afk-arena"
	},
	{
		game: "Age of Ishtaria",
		server: "Global",
		timezone: "Etc/GMT+8",
		dailyReset: "16:00",
		icon: "age-of-ishtaria"
	},
	{
		game: "Alchemia Story",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "alchemia-story"
	},
	{
		game: "Alchemy Stars",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "05:00",
		icon: "alchemy-stars"
	},
	{
		game: "Alchemy Stars",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "10:00",
		icon: "alchemy-stars"
	},
	{
		game: "Alchemy Stars",
		server: "LATAM",
		timezone: "Etc/GMT+3",
		dailyReset: "05:00",
		icon: "alchemy-stars"
	},
	{
		game: "Alchemy Stars",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00",
		icon: "alchemy-stars"
	},
	{
		game: "Alchemy Stars",
		server: "US",
		timezone: "America/Chicago",
		dailyReset: "10:00",
		icon: "alchemy-stars",
		utcDailyReset: true
	},
	{
		game: "Alice Closet: Anime Dress Up",
		server: "EN",
		timezone: "Etc/GMT+4",
		dailyReset: "12:00",
		icon: "alice-closet-anime-dress-up"
	},
	{
		game: "ALICE Fiction",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "alice-fiction"
	},
	{
		game: "Another Eden",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "15:00",
		icon: "another-eden"
	},
	{
		game: "Aotu World",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "05:00",
		icon: "aotu-world"
	},
	{
		game: "Archeland",
		server: "KR",
		timezone: "Asia/Seoul",
		dailyReset: "05:00",
		icon: "archeland"
	},
	{
		game: "Arknights",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "04:00",
		icon: "arknights"
	},
	{
		game: "Arknights",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00",
		icon: "arknights"
	},
	{
		game: "Arknights",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "arknights"
	},
	{
		game: "Artery Gear: Fusion",
		server: "America",
		timezone: "Etc/GMT+5",
		dailyReset: "05:00",
		icon: "artery-gear"
	},
	{
		game: "Artery Gear: Fusion",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "05:00",
		icon: "artery-gear"
	},
	{
		game: "Artery Gear: Fusion",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "artery-gear"
	},
	{
		game: "Artery Gear: Fusion",
		server: "Pacific",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00",
		icon: "artery-gear"
	},
	{
		game: "Ash Arms",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "ash-arms"
	},
	{
		game: "Assault Lily: Last Bullet",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "assault-lily-last-bullet"
	},
	{
		game: "Atelier Online: Alchemist of Bressisle",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "04:00",
		icon: "atelier-online-alchemist-of-bressisle"
	},
	{
		game: "Attack on Time:Kaisen of girls",
		server: "EN",
		timezone: "America/New_York",
		dailyReset: "02:00",
		icon: "attack-on-time-kog"
	},
	{
		game: "Auto Heroes",
		server: "NA",
		timezone: "America/New_York",
		dailyReset: "08:00",
		icon: "auto-heroes"
	},
	{
		game: "Azur Lane",
		server: "CN",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00",
		icon: "azur-lane-cn-jp"
	},
	{
		game: "Azur Lane",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "00:00",
		icon: "azur-lane-en"
	},
	{
		game: "Azur Lane",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "azur-lane-cn-jp"
	},
	{
		game: "BanG Dream! Girls Band Party!",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "08:00",
		icon: "bang-dream-gbp-en"
	},
	{
		game: "BanG Dream! Girls Band Party!",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "bang-dream-gbp-jp"
	},
	{
		game: "Bleach: Brave Souls",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "bleach-brave-souls"
	},
	{
		game: "Blue Archive",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "19:00",
		icon: "blue-archive"
	},
	{
		game: "Blue Archive",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "blue-archive"
	},
	{
		game: "Brave Nine",
		server: "Global & Europe",
		timezone: "Etc/UTC",
		dailyReset: "20:00",
		icon: "brave-nine"
	},
	{
		game: "Captain Tsubasa: Dream Team",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "09:00",
		icon: "captain-tsubasa-dream-team"
	},
	{
		game: "Cloud Song: Saga of Skywalkers",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "06:00",
		icon: "cloud-song-saga-of-skywalkers"
	},
	{
		game: "Cookie Run: Kingdom",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "00:00",
		icon: "cookie-run-kingdom"
	},
	{
		game: "Counter:Side",
		server: "Global",
		timezone: "Etc/GMT-9",
		dailyReset: "04:00",
		icon: "counter-side-global"
	},
	{
		game: "Counter:Side",
		server: "SEA",
		timezone: "Etc/GMT-7",
		dailyReset: "04:00",
		icon: "counter-side-sea"
	},
	{
		game: "Crash Fever",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "06:00",
		icon: "crash-fever"
	},
	{
		game: "Crusaders Quest",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "crusaders-quest"
	},
	{
		game: "D4DJ Groovy Mix",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "08:00",
		icon: "d4-dj-groovy-mix"
	},
	{
		game: "D4DJ Groovy Mix",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "d4-dj-groovy-mix"
	},
	{
		game: "DanMachi - MEMORIA FREESE",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "22:00",
		icon: "dan-machi-memoria-freese"
	},
	{
		game: "Darkness Rises",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "darkness-rises"
	},
	{
		game: "Date A Live: Spirit Pledge",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "00:00",
		icon: "date-a-live-spirit-pledge"
	},
	{
		game: "DEAD OR ALIVE Xtreme Venus Vacation",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "19:00",
		icon: "dead-or-alive-xvv"
	},
	{
		game: "Demon God",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00",
		icon: "demon-god"
	},
	{
		game: "Dengeki Bunko: Crossing Void",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "12:00",
		icon: "dengeki-bunko-crossing-void"
	},
	{
		game: "Destiny 2",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "17:00",
		icon: "destiny-2",
		utcDailyReset: true
	},
	{
		game: "Destiny Child",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "04:00",
		icon: "destiny-child"
	},
	{
		game: "Diablo Immortal",
		server: "East Asia",
		timezone: "Etc/GMT-9",
		dailyReset: "03:00",
		icon: "diablo-immortal"
	},
	{
		game: "Diablo Immortal",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "03:00",
		icon: "diablo-immortal"
	},
	{
		game: "Diablo Immortal",
		server: "North America (UTC-4)",
		timezone: "Etc/GMT+4",
		dailyReset: "03:00",
		icon: "diablo-immortal"
	},
	{
		game: "Diablo Immortal",
		server: "North America (UTC-7)",
		timezone: "Etc/GMT+7",
		dailyReset: "03:00",
		icon: "diablo-immortal"
	},
	{
		game: "Diablo Immortal",
		server: "Oceania",
		timezone: "Etc/GMT-10",
		dailyReset: "03:00",
		icon: "diablo-immortal"
	},
	{
		game: "Diablo Immortal",
		server: "South America",
		timezone: "Etc/GMT+3",
		dailyReset: "03:00",
		icon: "diablo-immortal"
	},
	{
		game: "Disgaea RPG",
		server: "Global",
		timezone: "Etc/GMT+4",
		dailyReset: "00:00",
		icon: "disgaea-rpg"
	},
	{
		game: "Dislyte",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "dislyte"
	},
	{
		game: "Disney Twisted-Wonderland",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "disney-twisted-wonderland"
	},
	{
		game: "Disney Twisted-Wonderland",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "disney-twisted-wonderland"
	},
	{
		game: "DISSIDIA FINAL FANTASY OPERA OMNIA",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "08:00",
		icon: "dissidia-ffoo"
	},
	{
		game: "DRAGON BALL LEGENDS",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "06:00",
		icon: "dragon-ball-legends"
	},
	{
		game: "DRAGON BALL Z DOKKAN BATTLE",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "dragon-ball-z-dokkan-battle-global",
		utcDailyReset: true
	},
	{
		game: "DRAGON BALL Z DOKKAN BATTLE",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "dragon-ball-z-dokkan-battle-jp"
	},
	{
		game: "DRAGON QUEST TACT",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "12:00",
		icon: "dragon-quest-tact"
	},
	{
		game: "Dream Girlfriend",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "23:00",
		icon: "dream-girlfriend"
	},
	{
		game: "Dream Meister and the Recollected Black Fairy",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "dream-meister-atrbf"
	},
	{
		game: "Echocalypse",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00",
		icon: "echocalypse"
	},
	{
		game: "ECHOES of MANA",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "04:00",
		icon: "echoes-of-mana"
	},
	{
		game: "Eiyuu Senki WWX",
		server: "EN",
		timezone: "America/Atikokan",
		dailyReset: "04:00",
		icon: "eiyu-senki-wwx"
	},
	{
		game: "Elune",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "elune"
	},
	{
		game: "Ensemble Stars!! Basic",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "ensemble-stars-basic"
	},
	{
		game: "Ensemble Stars!! Music",
		server: "EN",
		timezone: "Etc/GMT+5",
		dailyReset: "00:00",
		icon: "ensemble-stars-music"
	},
	{
		game: "Ensemble Stars!! Music",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "ensemble-stars-music"
	},
	{
		game: "Epic Seven",
		server: "Asia",
		timezone: "Etc/UTC",
		dailyReset: "18:00",
		icon: "epic-seven"
	},
	{
		game: "Epic Seven",
		server: "Europe",
		timezone: "Europe/Paris",
		dailyReset: "05:00",
		icon: "epic-seven"
	},
	{
		game: "Epic Seven",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "10:00",
		icon: "epic-seven"
	},
	{
		game: "Epic Seven",
		server: "Korea",
		timezone: "Asia/Seoul",
		dailyReset: "03:00",
		icon: "epic-seven"
	},
	{
		game: "Eternal Tree",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "20:00",
		icon: "eternal-tree"
	},
	{
		game: "Eversoul",
		server: "Asia & NA/EU",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "eversoul"
	},
	{
		game: "Evertale",
		server: "Asia",
		timezone: "Etc/GMT-9",
		dailyReset: "10:00",
		icon: "evertale"
	},
	{
		game: "Exos Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "20:00",
		icon: "exos-heroes"
	},
	{
		game: "Fate/Grand Order",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "fate-grand-order"
	},
	{
		game: "Fate/Grand Order",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "04:00",
		icon: "fate-grand-order",
		utcDailyReset: true
	},
	{
		game: "Figure Fantasy",
		server: "America",
		timezone: "Etc/GMT+4",
		dailyReset: "08:00",
		icon: "figure-fantasy"
	},
	{
		game: "Figure Fantasy",
		server: "Europe",
		timezone: "Etc/GMT-2",
		dailyReset: "06:00",
		icon: "figure-fantasy"
	},
	{
		game: "FINAL FANTASY BRAVE EXVIUS",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "ff-brave-exvius"
	},
	{
		game: "FINAL FANTASY Record Keeper",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "08:00",
		icon: "ff-record-keeper"
	},
	{
		game: "FINAL FANTASY XIV",
		server: "Global",
		timezone: "Etc/GMT",
		dailyReset: "15:00",
		icon: "ff-xiv",
		utcDailyReset: true
	},
	{
		game: "Final Gear",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "00:00",
		icon: "final-gear"
	},
	{
		game: "Fire Emblem Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "07:00",
		icon: "fire-emblem-heroes"
	},
	{
		game: "Food Fantasy",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "food-fantasy"
	},
	{
		game: "Genshin Impact",
		server: "America",
		timezone: "Etc/GMT+5",
		dailyReset: "04:00",
		icon: "genshin-impact"
	},
	{
		game: "Genshin Impact",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00",
		icon: "genshin-impact"
	},
	{
		game: "Genshin Impact",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00",
		icon: "genshin-impact"
	},
	{
		game: "Girl Cafe Gun",
		server: "Global",
		timezone: "Etc/GMT+4",
		dailyReset: "04:00",
		icon: "girl-cafe-gun"
	},
	{
		game: "Girls' Frontline",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "00:00",
		icon: "girls-frontline"
	},
	{
		game: "GODDESS OF VICTORY: NIKKE",
		server: "Global",
		timezone: "Etc/GMT-9",
		dailyReset: "05:00",
		icon: "goddess-of-victory-nikke"
	},
	{
		game: "GODDESS OF VICTORY: NIKKE",
		server: "JP",
		timezone: "Etc/GMT-9",
		dailyReset: "05:00",
		icon: "goddess-of-victory-nikke"
	},
	{
		game: "GODDESS OF VICTORY: NIKKE",
		server: "NA",
		timezone: "Etc/GMT-9",
		dailyReset: "05:00",
		icon: "goddess-of-victory-nikke"
	},
	{
		game: "GODDESS OF VICTORY: NIKKE",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00",
		icon: "goddess-of-victory-nikke"
	},
	{
		game: "Granblue Fantasy",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "granblue-fantasy"
	},
	{
		game: "Grand Chase: Dimensional Chaser",
		server: "Asia",
		timezone: "Etc/GMT-9",
		dailyReset: "00:00",
		icon: "grand-chase-dimensional-chaser"
	},
	{
		game: "Grand Chase: Dimensional Chaser",
		server: "West",
		timezone: "America/Panama",
		dailyReset: "05:00",
		icon: "grand-chase-dimensional-chaser",
		utcDailyReset: true
	},
	{
		game: "Grand Summoners",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "21:00",
		icon: "grand-summoners"
	},
	{
		game: "Grimlight",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "04:00",
		icon: "grimlight"
	},
	{
		game: "Guardian Tales",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00",
		icon: "guardian-tales"
	},
	{
		game: "Guardian Tales",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "08:00",
		icon: "guardian-tales",
		utcDailyReset: true
	},
	{
		game: "Guardian Tales",
		server: "EU",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "guardian-tales"
	},
	{
		game: "Guardian Tales",
		server: "LA",
		timezone: "America/Maceio",
		dailyReset: "00:00",
		icon: "guardian-tales"
	},
	{
		game: "Guardian Tales",
		server: "OC",
		timezone: "Australia/Brisbane",
		dailyReset: "00:00",
		icon: "guardian-tales"
	},
	{
		game: "Guild Wars 2",
		server: "EU & NA",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "guild-wars-2"
	},
	{
		game: "GUNDAM BREAKER MOBILE",
		server: "JP & NA",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "gundam-breaker-mobile"
	},
	{
		game: "GYEE",
		server: "NA",
		timezone: "Etc/GMT+4",
		dailyReset: "04:00",
		icon: "gyee"
	},
	{
		game: "GYEE",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00",
		icon: "gyee"
	},
	{
		game: "HATSUNE MIKU: COLORFUL STAGE!",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "04:00",
		icon: "hatsune-miku-colorful-stage"
	},
	{
		game: "Heaven Burns Red",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "heaven-burns-red"
	},
	{
		game: "HELIOS Rising Heroes",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "helios-rising-heroes"
	},
	{
		game: "Hero Cantare",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "hero-cantare"
	},
	{
		game: "Higan: Eruthyll",
		server: "Global",
		timezone: "Etc/GMT+8",
		dailyReset: "05:00",
		icon: "higan-eruthyll"
	},
	{
		game: "HoneyWorks Premium Live",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "honey-works-premium-live"
	},
	{
		game: "Honkai Impact 3rd",
		server: "Americas",
		timezone: "Etc/GMT+5",
		dailyReset: "04:00",
		icon: "honkai-impact-3rd"
	},
	{
		game: "Honkai Impact 3rd",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00",
		icon: "honkai-impact-3rd"
	},
	{
		game: "Honkai Impact 3rd",
		server: "China",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00",
		icon: "honkai-impact-3rd"
	},
	{
		game: "Honkai Impact 3rd",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00",
		icon: "honkai-impact-3rd"
	},
	{
		game: "Honkai: Star Rail",
		server: "America",
		timezone: "Etc/GMT+5",
		dailyReset: "04:00",
		icon: "honkai-star-rail"
	},
	{
		game: "Honkai: Star Rail",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00",
		icon: "honkai-star-rail"
	},
	{
		game: "Honkai: Star Rail",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00",
		icon: "honkai-star-rail"
	},
	{
		game: "Hypnosis Mic -Alternative Rap Battle-",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "hypnosis-mic-arb"
	},
	{
		game: "Identity V",
		server: "NA and EU",
		timezone: "Etc/GMT+6",
		dailyReset: "05:00",
		icon: "identity-v"
	},
	{
		game: "Idle Angels",
		server: "America",
		timezone: "America/Argentina/Buenos_Aires",
		dailyReset: "00:00",
		icon: "idle-angels"
	},
	{
		game: "Idle Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "idle-heroes"
	},
	{
		game: "Idle Huntress",
		server: "Global",
		timezone: "Etc/GMT+5",
		dailyReset: "05:00",
		icon: "idle-huntress"
	},
	{
		game: "IDOLiSH7",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "idolish7"
	},
	{
		game: "IRUNA Online",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "22:00",
		icon: "iruna-online"
	},
	{
		game: "Kemono Friends 3",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "kemono-friends-3"
	},
	{
		game: "King's Raid",
		server: "America",
		timezone: "America/New_York",
		dailyReset: "00:00",
		icon: "kings-raid"
	},
	{
		game: "King's Raid",
		server: "Asia",
		timezone: "Etc/GMT+7",
		dailyReset: "21:00",
		icon: "kings-raid"
	},
	{
		game: "KonoSuba: Fantastic Days",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "kono-suba-fantastic-days"
	},
	{
		game: "Langrisser",
		server: "Global",
		timezone: "America/Chicago",
		dailyReset: "00:00",
		icon: "langrisser"
	},
	{
		game: "LAST CLOUDIA",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "05:00",
		icon: "last-cloudia"
	},
	{
		game: "Last Origin",
		server: "Korea",
		timezone: "Asia/Seoul",
		dailyReset: "09:00",
		icon: "last-origin"
	},
	{
		game: "Legend Clover",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "legend-clover"
	},
	{
		game: "Legends of Runeterra",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "03:00",
		icon: "legends-of-runeterra"
	},
	{
		game: "Life Makeover",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "05:00",
		icon: "life-makeover"
	},
	{
		game: "Limbus Company",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "06:00",
		icon: "limbus-company"
	},
	{
		game: "Looney Tunes World of Mayhem",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "18:00",
		icon: "looney-tunes-wom"
	},
	{
		game: "Lost Ark",
		server: "EU Central",
		timezone: "Europe/Paris",
		dailyReset: "10:00",
		icon: "lost-ark",
		utcDailyReset: true
	},
	{
		game: "Lost Ark",
		server: "EU West",
		timezone: "Etc/GMT",
		dailyReset: "10:00",
		icon: "lost-ark",
		utcDailyReset: true
	},
	{
		game: "Lost Ark",
		server: "NA East",
		timezone: "America/New_York",
		dailyReset: "10:00",
		icon: "lost-ark",
		utcDailyReset: true
	},
	{
		game: "Lost Ark",
		server: "NA West",
		timezone: "America/Los_Angeles",
		dailyReset: "10:00",
		icon: "lost-ark",
		utcDailyReset: true
	},
	{
		game: "Lost Ark",
		server: "South America",
		timezone: "America/Sao_Paulo",
		dailyReset: "10:00",
		icon: "lost-ark",
		utcDailyReset: true
	},
	{
		game: "Love Live! School Idol Festival 2 MIRACLE LIVE!",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "love-live-sif-2",
		menuName: "Love Live! SIF2"
	},
	{
		game: "Love Nikki",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "05:00",
		icon: "love-nikki"
	},
	{
		game: "Magia Record",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "magia-record"
	},
	{
		game: "Magic: The Gathering Arena",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "09:00",
		icon: "magic-the-gathering-arena"
	},
	{
		game: "Magicami",
		server: "EN",
		timezone: "America/New_York",
		dailyReset: "00:00",
		icon: "magicami"
	},
	{
		game: "Mahjong Soul",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "14:00",
		icon: "mahjong-soul"
	},
	{
		game: "MapleStory M",
		server: "America",
		timezone: "Etc/GMT+8",
		dailyReset: "00:00",
		icon: "maplestory-m"
	},
	{
		game: "MapleStory M",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00",
		icon: "maplestory-m"
	},
	{
		game: "MapleStory M",
		server: "Europe",
		timezone: "Etc/GMT-2",
		dailyReset: "00:00",
		icon: "maplestory-m"
	},
	{
		game: "MementoMori",
		server: "EU/Global",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00",
		icon: "memento-mori"
	},
	{
		game: "MementoMori",
		server: "US",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00",
		icon: "memento-mori"
	},
	{
		game: "Millennium War Aigis",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "millennium-war-aigis"
	},
	{
		game: "Mobile Legends: Adventure",
		server: "Global",
		timezone: "Etc/GMT+8",
		dailyReset: "00:00",
		icon: "mobile-legends-adventure"
	},
	{
		game: "My Hero Academia: The Strongest Hero",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "13:00",
		icon: "mha-the-strongest-hero",
		utcDailyReset: true
	},
	{
		game: "MY HERO ULTRA IMPACT",
		server: "EN",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "my-hero-ultra-impact"
	},
	{
		game: "Mythic Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "mythic-heroes"
	},
	{
		game: "NARUTO X BORUTO NINJA VOLTAGE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "09:00",
		icon: "naruto-boruto-ninja-voltage"
	},
	{
		game: "Neural Cloud",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "05:00",
		icon: "neural-cloud"
	},
	{
		game: "Neural Cloud",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "05:00",
		icon: "neural-cloud"
	},
	{
		game: "Ni no Kuni: Cross Worlds",
		server: "Global",
		timezone: "Etc/GMT",
		dailyReset: "06:00",
		icon: "ni-no-kuni-cross-worlds"
	},
	{
		game: "NieR Re[in]carnation",
		server: "Global",
		timezone: "Pacific/Pitcairn",
		dailyReset: "00:00",
		icon: "nier-reincarnation"
	},
	{
		game: "NieR Re[in]carnation",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "nier-reincarnation"
	},
	{
		game: "NieR Re[in]carnation",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00",
		icon: "nier-reincarnation"
	},
	{
		game: "Noah's Heart",
		server: "Global",
		timezone: "Etc/GMT+5",
		dailyReset: "00:00",
		icon: "noahs-heart"
	},
	{
		game: "NU: carnival",
		server: "EN",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00",
		icon: "nu-carnival"
	},
	{
		game: "Obey Me!",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "obey-me"
	},
	{
		game: "OCTOPATH TRAVELER: Champions of the Continent",
		server: "EN",
		timezone: "ETC/UTC",
		dailyReset: "09:00",
		icon: "octopath-traveler-cotc"
	},
	{
		game: "ONE PIECE TREASURE CRUISE",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "07:00",
		icon: "one-piece-treasure-cruise"
	},
	{
		game: "Onmyoji",
		server: "EN",
		timezone: "America/Panama",
		dailyReset: "00:00",
		icon: "onmyoji"
	},
	{
		game: "Oshiro Project:RE Castle Defense",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "oshiro-project-re"
	},
	{
		game: "OUTERPLANE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "outerplane"
	},
	{
		game: "Paladins",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "01:00",
		icon: "paladins"
	},
	{
		game: "Path to Nowhere",
		server: "America",
		timezone: "Etc/GMT+7",
		dailyReset: "05:00",
		icon: "path-to-nowhere"
	},
	{
		game: "Path to Nowhere",
		server: "Asia-Pacific",
		timezone: "Etc/GMT-7",
		dailyReset: "05:00",
		icon: "path-to-nowhere"
	},
	{
		game: "Path to Nowhere",
		server: "Europe",
		timezone: "Etc/GMT-2",
		dailyReset: "05:00",
		icon: "path-to-nowhere"
	},
	{
		game: "Phantasy Star Online 2: New Genesis",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "07:00",
		icon: "phantasy-star-online-2-ng"
	},
	{
		game: "Pokémon Masters EX",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "06:00",
		icon: "pokemon-masters-ex"
	},
	{
		game: "Pokémon UNITE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "pokemon-unite"
	},
	{
		game: "Princess Connect! Re:Dive",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "princess-connect-re-dive-jp"
	},
	{
		game: "Princess Connect! Re:Dive",
		server: "TW",
		timezone: "Asia/Taipei",
		dailyReset: "05:00",
		icon: "princess-connect-re-dive-jp"
	},
	{
		game: "Project SEKAI COLORFUL STAGE! feat. Hatsune Miku",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "project-sekai-colorful-stage-jp"
	},
	{
		game: "Project SEKAI COLORFUL STAGE! feat. Hatsune Miku",
		server: "KR",
		timezone: "Asia/Seoul",
		dailyReset: "04:00",
		icon: "project-sekai-colorful-stage"
	},
	{
		game: "Project SEKAI COLORFUL STAGE! feat. Hatsune Miku",
		server: "TW",
		timezone: "Asia/Taipei",
		dailyReset: "04:00",
		icon: "project-sekai-colorful-stage"
	},
	{
		game: "Psychic Idle",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "00:00",
		icon: "psychic-idle"
	},
	{
		game: "PUBG MOBILE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "pubg-mobile"
	},
	{
		game: "Punishing: Gray Raven",
		server: "China & Taiwain",
		timezone: "Asia/Shanghai",
		dailyReset: "04:00",
		icon: "punishing-gray-raven"
	},
	{
		game: "Punishing: Gray Raven",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "07:00",
		icon: "punishing-gray-raven"
	},
	{
		game: "Punishing: Gray Raven",
		server: "Japan",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "punishing-gray-raven"
	},
	{
		game: "Ragnarok M: Eternal Love",
		server: "Global",
		timezone: "Etc/GMT+6",
		dailyReset: "06:00",
		icon: "ragnarok-m-eternal-love"
	},
	{
		game: "Ragnarok X: Next Generation",
		server: "SEA",
		timezone: "Etc/GMT-7",
		dailyReset: "05:00",
		icon: "ragnarok-x-next-generation"
	},
	{
		game: "RAID: Shadow Legends",
		server: "EU",
		timezone: "Etc/GMT-1",
		dailyReset: "00:00",
		icon: "raid-shadow-legends"
	},
	{
		game: "RED: Pride of Eden",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "red-pride-of-eden"
	},
	{
		game: "Reverse: 1999",
		server: "Global",
		timezone: "Etc/GMT+5",
		dailyReset: "05:00",
		icon: "reverse-1999"
	},
	{
		game: "Revived Witch",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00",
		icon: "revived-witch"
	},
	{
		game: "Revue Starlight Re LIVE",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "revue-starlight-rl"
	},
	{
		game: "Rhythm Hive",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "00:00",
		icon: "rhythm-hive"
	},
	{
		game: "Rise of Eros",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "11:00",
		icon: "rise-of-eros"
	},
	{
		game: "ROCKMAN X DiVE",
		server: "Taiwan",
		timezone: "Etc/GMT-8",
		dailyReset: "20:00",
		icon: "rockman-x-dive"
	},
	{
		game: "Romancing SaGa Re;univerSe",
		server: "Global",
		timezone: "Etc/GMT-7",
		dailyReset: "08:00",
		icon: "romancing-saga-re-universe"
	},
	{
		game: "Saint Seiya: Awakening",
		server: "Global",
		timezone: "Etc/GMT+4",
		dailyReset: "05:00",
		icon: "saint-seiya-awakening-global"
	},
	{
		game: "Saint Seiya: Awakening",
		server: "SEA",
		timezone: "Asia/Jakarta",
		dailyReset: "05:00",
		icon: "saint-seiya-awakening-sea"
	},
	{
		game: "Sdorica",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "21:00",
		icon: "sdorica"
	},
	{
		game: "Senki Zesshou Symphogear XD Unlimited",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "senki-zesshou-symphogear-xd-unlimited"
	},
	{
		game: "SEOUL Apocalypse",
		server: "EN",
		timezone: "Etc/GMT-8",
		dailyReset: "07:00",
		icon: "seoul-apocalypse"
	},
	{
		game: "Seven Knights 2",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "05:00",
		icon: "seven-knights-2"
	},
	{
		game: "Seven Mortal Sins X-TASY",
		server: "EN",
		timezone: "Etc/GMT+4",
		dailyReset: "04:00",
		icon: "seven-mortal-sins-x-tasy"
	},
	{
		game: "Shadowverse",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "12:00",
		icon: "shadowverse"
	},
	{
		game: "Shadowverse",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "shadowverse"
	},
	{
		game: "SHIN MEGAMI TENSEI Liberation Dx2",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "18:00",
		icon: "smt-l-dx2",
		menuName: "SMT Liberation Dx2"
	},
	{
		game: "Shining Beyond",
		server: "Global",
		timezone: "Asia/Singapore",
		dailyReset: "00:00",
		icon: "shining-beyond"
	},
	{
		game: "Shining Nikki",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "05:00",
		icon: "shining-nikki"
	},
	{
		game: "SINoALICE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "05:00",
		icon: "sinoalice"
	},
	{
		game: "SINoALICE",
		server: "Japan",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "sinoalice"
	},
	{
		game: "Skullgirls",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "12:00",
		icon: "skullgirls"
	},
	{
		game: "Sky: Children of the Light",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "08:00",
		icon: "sky-children-of-the-light",
		utcDailyReset: true
	},
	{
		game: "SLIME - ISEKAI Memories",
		server: "Americas",
		timezone: "America/Chicago",
		dailyReset: "06:00",
		icon: "slime-isekai-memories"
	},
	{
		game: "SLIME - ISEKAI Memories",
		server: "Europe",
		timezone: "Europe/Paris",
		dailyReset: "06:00",
		icon: "slime-isekai-memories"
	},
	{
		game: "Snowbreak: Containment Zone",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00",
		icon: "snowbreak-containment-zone"
	},
	{
		game: "Soul Tide",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00",
		icon: "soul-tide"
	},
	{
		game: "SoulWorker",
		server: "EN",
		timezone: "Etc/GMT",
		dailyReset: "01:00",
		icon: "soulworker"
	},
	{
		game: "Summoners War",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "summoners-war"
	},
	{
		game: "Tears of Themis",
		server: "Global",
		timezone: "Etc/GMT-9",
		dailyReset: "04:00",
		icon: "tears-of-themis"
	},
	{
		game: "Tears of Themis",
		server: "Taiwan",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00",
		icon: "tears-of-themis"
	},
	{
		game: "TenkafuMA!",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00",
		icon: "tenkafuma"
	},
	{
		game: "The Ants: Underground Kingdom",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "the-ants-underground-kingdom"
	},
	{
		game: "The Eminence in Shadow: Master of Garden",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "19:00",
		icon: "the-eminence-in-shadow-rpg"
	},
	{
		game: "THE iDOLM@STER CINDERELLA GIRLS: STARLIGHT STAGE",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "the-idolmaster-cgss",
		menuName: "THE iDOLM@STER CG:SS"
	},
	{
		game: "THE iDOLM@STER MILLION LIVE! THEATER DAYS",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "the-idolmaster-million-live-theater-days",
		menuName: "THE iDOLM@STER ML! TD"
	},
	{
		game: "The Seven Deadly Sins: Grand Cross",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "00:00",
		icon: "tsds-gc-global"
	},
	{
		game: "The Seven Deadly Sins: Grand Cross",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "tsds-gc-jp"
	},
	{
		game: "Time Princess",
		server: "Global",
		timezone: "Etc/GMT+5",
		dailyReset: "01:00",
		icon: "time-princess"
	},
	{
		game: "Tokyo 7th Sisters",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "tokyo-7th-sisters"
	},
	{
		game: "Tokyo Afterschool Summoners",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00",
		icon: "tokyo-afterschool-summoners"
	},
	{
		game: "Tokyo NECRO: SUICIDE MISSION",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00",
		icon: "tokyo-necro-suicide-mission"
	},
	{
		game: "Toontown Rewritten",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "toontown-rewritten"
	},
	{
		game: "Toram Online",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "toram-online"
	},
	{
		game: "Touhou LostWord",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00",
		icon: "touhou-lost-word"
	},
	{
		game: "Tower of Fantasy",
		server: "Global",
		timezone: "America/New_York",
		dailyReset: "05:00",
		icon: "tower-of-fantasy"
	},
	{
		game: "Tower of God: New World",
		server: "America (East)",
		timezone: "Etc/GMT+5",
		dailyReset: "19:00",
		icon: "tower-of-god-new-world"
	},
	{
		game: "Tower of God: New World",
		server: "America (West)",
		timezone: "Etc/GMT+8",
		dailyReset: "16:00",
		icon: "tower-of-god-new-world"
	},
	{
		game: "Tower of God: New World",
		server: "Asia & Southeast Asia",
		timezone: "Etc/GMT-9",
		dailyReset: "09:00",
		icon: "tower-of-god-new-world"
	},
	{
		game: "Tower of God: New World",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "01:00",
		icon: "tower-of-god-new-world"
	},
	{
		game: "Tower of God: The Great Journey",
		server: "KR",
		timezone: "Asia/Seoul",
		dailyReset: "00:00",
		icon: "tower-of-god-tgj"
	},
	{
		game: "Tower of Saviors",
		server: "CN & EN",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00",
		icon: "tower-of-saviors"
	},
	{
		game: "Ulala: Idle Adventure",
		server: "NA",
		timezone: "America/New_York",
		dailyReset: "05:00",
		icon: "ulala-idle-adventure"
	},
	{
		game: "Uma Musume Pretty Derby",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "uma-musume-pretty-derby"
	},
	{
		game: "Valkyrie Connect",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "06:00",
		icon: "valkyrie-connect"
	},
	{
		game: "Vanguard ZERO",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "vanguard-zero"
	},
	{
		game: "Vikingard",
		server: "America",
		timezone: "Etc/GMT+6",
		dailyReset: "00:00",
		icon: "vikingard"
	},
	{
		game: "WAR OF THE VISIONS FINAL FANTASY BRAVE EXVIUS",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		icon: "war-of-the-visions-ffbe"
	},
	{
		game: "War Thunder",
		server: "Global",
		timezone: "Etc/GMT",
		dailyReset: "00:00",
		icon: "war-thunder"
	},
	{
		game: "Warframe",
		server: "Global",
		timezone: "Etc/GMT",
		dailyReset: "00:00",
		icon: "warframe"
	},
	{
		game: "What in Hell is Bad?",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "00:00",
		icon: "what-in-hell-is-bad"
	},
	{
		game: "World Flipper",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "20:00",
		icon: "world-flipper"
	},
	{
		game: "World Flipper",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "world-flipper"
	},
	{
		game: "Yu-Gi-Oh! Duel Links",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00",
		icon: "yu-gi-oh-duel-links"
	},
];