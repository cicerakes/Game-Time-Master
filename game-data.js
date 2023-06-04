const gameData = [
	{
		game: "A3!",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Aether Gazer",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "05:00"
	},
	{
		game: "AFK Arena",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Age of Ishtaria",
		server: "Global",
		timezone: "Etc/GMT+8",
		dailyReset: "16:00"
	},
	{
		game: "Alchemia Story",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Alchemy Stars",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "05:00"
	},
	{
		game: "Alchemy Stars",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "10:00"
	},
	{
		game: "Alchemy Stars",
		server: "LATAM",
		timezone: "Etc/GMT+3",
		dailyReset: "05:00"
	},
	{
		game: "Alchemy Stars",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00"
	},
	{
		game: "Alchemy Stars",
		server: "US",
		timezone: "America/Chicago",
		dailyReset: "10:00",
		utcDailyReset: true
	},
	{
		game: "Alice Closet: Anime Dress Up",
		server: "EN",
		timezone: "Etc/GMT+4",
		dailyReset: "12:00"
	},
	{
		game: "ALICE Fiction",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Another Eden",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "15:00"
	},
	{
		game: "Aotu World",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "05:00"
	},
	{
		game: "Archeland",
		server: "KR",
		timezone: "Asia/Seoul",
		dailyReset: "05:00"
	},
	{
		game: "Arknights",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "04:00"
	},
	{
		game: "Arknights",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00"
	},
	{
		game: "Arknights",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Artery Gear: Fusion",
		server: "America",
		timezone: "Etc/GMT+5",
		dailyReset: "05:00"
	},
	{
		game: "Artery Gear: Fusion",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "05:00"
	},
	{
		game: "Artery Gear: Fusion",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Artery Gear: Fusion",
		server: "Pacific",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00"
	},
	{
		game: "Ash Arms",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Assault Lily: Last Bullet",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Atelier Online: Alchemist of Bressisle",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "04:00"
	},
	{
		game: "Attack on Time:Kaisen of girls",
		server: "EN",
		timezone: "America/New_York",
		dailyReset: "02:00"
	},
	{
		game: "Auto Heroes",
		server: "NA",
		timezone: "America/New_York",
		dailyReset: "08:00"
	},
	{
		game: "Azur Lane",
		server: "CN",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00"
	},
	{
		game: "Azur Lane",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "00:00"
	},
	{
		game: "Azur Lane",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "BanG Dream! Girls Band Party!",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "08:00"
	},
	{
		game: "BanG Dream! Girls Band Party!",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Bleach: Brave Souls",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Blue Archive",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "19:00"
	},
	{
		game: "Blue Archive",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Brave Nine",
		server: "Global & Europe",
		timezone: "Etc/UTC",
		dailyReset: "20:00"
	},
	{
		game: "Captain Tsubasa: Dream Team",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "09:00"
	},
	{
		game: "Cloud Song: Saga of Skywalkers",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "06:00"
	},
	{
		game: "Cookie Run: Kingdom",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "00:00"
	},
	{
		game: "Counter:Side",
		server: "Global",
		timezone: "Etc/GMT-9",
		dailyReset: "04:00"
	},
	{
		game: "Counter:Side",
		server: "SEA",
		timezone: "Etc/GMT-7",
		dailyReset: "04:00"
	},
	{
		game: "Crash Fever",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "06:00"
	},
	{
		game: "Crusaders Quest",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "D4DJ Groovy Mix",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "08:00"
	},
	{
		game: "D4DJ Groovy Mix",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "DanMachi - MEMORIA FREESE",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "22:00"
	},
	{
		game: "Darkness Rises",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "Date A Live: Spirit Pledge",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "00:00"
	},
	{
		game: "DEAD OR ALIVE Xtreme Venus Vacation",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "19:00"
	},
	{
		game: "Demon God",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00"
	},
	{
		game: "Dengeki Bunko: Crossing Void",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "12:00"
	},
	{
		game: "Destiny 2",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "17:00",
		utcDailyReset: true
	},
	{
		game: "Destiny Child",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "04:00"
	},
	{
		game: "Diablo Immortal",
		server: "East Asia",
		timezone: "Etc/GMT-9",
		dailyReset: "03:00"
	},
	{
		game: "Diablo Immortal",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "03:00"
	},
	{
		game: "Diablo Immortal",
		server: "North America (UTC-4)",
		timezone: "Etc/GMT+4",
		dailyReset: "03:00"
	},
	{
		game: "Diablo Immortal",
		server: "North America (UTC-7)",
		timezone: "Etc/GMT+7",
		dailyReset: "03:00"
	},
	{
		game: "Diablo Immortal",
		server: "Oceania",
		timezone: "Etc/GMT-10",
		dailyReset: "03:00"
	},
	{
		game: "Diablo Immortal",
		server: "South America",
		timezone: "Etc/GMT+3",
		dailyReset: "03:00"
	},
	{
		game: "Disgaea RPG",
		server: "Global",
		timezone: "Etc/GMT+4",
		dailyReset: "00:00"
	},
	{
		game: "Dislyte",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Disney Twisted-Wonderland",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "Disney Twisted-Wonderland",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "DISSIDIA FINAL FANTASY OPERA OMNIA",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "08:00"
	},
	{
		game: "DRAGON BALL LEGENDS",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "06:00"
	},
	{
		game: "DRAGON BALL Z DOKKAN BATTLE",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00",
		utcDailyReset: true
	},
	{
		game: "DRAGON BALL Z DOKKAN BATTLE",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "DRAGON QUEST TACT",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "12:00"
	},
	{
		game: "Dream Girlfriend",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "23:00"
	},
	{
		game: "Dream Meister and the Recollected Black Fairy",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Echocalypse",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00"
	},
	{
		game: "ECHOES of MANA",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "04:00"
	},
	{
		game: "Eiyuu Senki WWX",
		server: "EN",
		timezone: "America/Atikokan",
		dailyReset: "04:00"
	},
	{
		game: "Elune",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Ensemble Stars!! Basic",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Ensemble Stars!! Music",
		server: "EN",
		timezone: "Etc/GMT+5",
		dailyReset: "00:00"
	},
	{
		game: "Ensemble Stars!! Music",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Epic Seven",
		server: "Asia",
		timezone: "Etc/UTC",
		dailyReset: "18:00"
	},
	{
		game: "Epic Seven",
		server: "Europe",
		timezone: "Europe/Paris",
		dailyReset: "05:00"
	},
	{
		game: "Epic Seven",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "10:00"
	},
	{
		game: "Epic Seven",
		server: "Korea",
		timezone: "Asia/Seoul",
		dailyReset: "03:00"
	},
	{
		game: "Eternal Tree",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "20:00"
	},
	{
		game: "Eversoul",
		server: "Asia & NA/EU",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Evertale",
		server: "Asia",
		timezone: "Etc/GMT-9",
		dailyReset: "10:00"
	},
	{
		game: "Exos Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "20:00"
	},
	{
		game: "Fate/Grand Order",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Fate/Grand Order",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "04:00",
		utcDailyReset: true
	},
	{
		game: "Figure Fantasy",
		server: "America",
		timezone: "Etc/GMT+4",
		dailyReset: "08:00"
	},
	{
		game: "Figure Fantasy",
		server: "Europe",
		timezone: "Etc/GMT-2",
		dailyReset: "06:00"
	},
	{
		game: "FINAL FANTASY BRAVE EXVIUS",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "FINAL FANTASY Record Keeper",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "08:00"
	},
	{
		game: "FINAL FANTASY XIV",
		server: "Global",
		timezone: "Etc/GMT",
		dailyReset: "15:00",
		utcDailyReset: true
	},
	{
		game: "Final Gear",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "00:00"
	},
	{
		game: "Fire Emblem Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "07:00"
	},
	{
		game: "Food Fantasy",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Genshin Impact",
		server: "America",
		timezone: "Etc/GMT+5",
		dailyReset: "04:00"
	},
	{
		game: "Genshin Impact",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00"
	},
	{
		game: "Genshin Impact",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00"
	},
	{
		game: "Girl Cafe Gun",
		server: "Global",
		timezone: "Etc/GMT+4",
		dailyReset: "04:00"
	},
	{
		game: "Girls' Frontline",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "00:00"
	},
	{
		game: "GODDESS OF VICTORY: NIKKE",
		server: "Global",
		timezone: "Etc/GMT-9",
		dailyReset: "05:00"
	},
	{
		game: "GODDESS OF VICTORY: NIKKE",
		server: "NA",
		timezone: "Etc/GMT-9",
		dailyReset: "05:00"
	},
	{
		game: "GODDESS OF VICTORY: NIKKE",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00"
	},
	{
		game: "Granblue Fantasy",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Grand Chase: Dimensional Chaser",
		server: "Asia",
		timezone: "Etc/GMT-9",
		dailyReset: "00:00"
	},
	{
		game: "Grand Chase: Dimensional Chaser",
		server: "West",
		timezone: "America/Panama",
		dailyReset: "05:00",
		utcDailyReset: true
	},
	{
		game: "Grand Summoners",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "21:00"
	},
	{
		game: "Grimlight",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "04:00"
	},
	{
		game: "Guardian Tales",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00"
	},
	{
		game: "Guardian Tales",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "08:00",
		utcDailyReset: true
	},
	{
		game: "Guardian Tales",
		server: "EU",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Guardian Tales",
		server: "LA",
		timezone: "America/Maceio",
		dailyReset: "00:00"
	},
	{
		game: "Guardian Tales",
		server: "OC",
		timezone: "Australia/Brisbane",
		dailyReset: "00:00"
	},
	{
		game: "Guild Wars 2",
		server: "EU & NA",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "GUNDAM BREAKER MOBILE",
		server: "JP & NA",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "GYEE",
		server: "NA",
		timezone: "Etc/GMT+4",
		dailyReset: "04:00"
	},
	{
		game: "GYEE",
		server: "SEA",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00"
	},
	{
		game: "HATSUNE MIKU: COLORFUL STAGE!",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "04:00"
	},
	{
		game: "Heaven Burns Red",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "HELIOS Rising Heroes",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Hero Cantare",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "HoneyWorks Premium Live",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Honkai Impact 3rd",
		server: "Americas",
		timezone: "Etc/GMT+5",
		dailyReset: "04:00"
	},
	{
		game: "Honkai Impact 3rd",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00"
	},
	{
		game: "Honkai Impact 3rd",
		server: "China",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00"
	},
	{
		game: "Honkai Impact 3rd",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00"
	},
	{
		game: "Honkai: Star Rail",
		server: "America",
		timezone: "Etc/GMT+5",
		dailyReset: "04:00"
	},
	{
		game: "Honkai: Star Rail",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00"
	},
	{
		game: "Honkai: Star Rail",
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00"
	},
	{
		game: "Hypnosis Mic -Alternative Rap Battle-",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Identity V",
		server: "NA and EU",
		timezone: "Etc/GMT+6",
		dailyReset: "05:00"
	},
	{
		game: "Idle Angels",
		server: "America",
		timezone: "America/Argentina/Buenos_Aires",
		dailyReset: "00:00"
	},
	{
		game: "Idle Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Idle Huntress",
		server: "Global",
		timezone: "Etc/GMT+5",
		dailyReset: "05:00"
	},
	{
		game: "IDOLiSH7",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "ILLUSION CONNECT",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00"
	},
	{
		game: "IRUNA Online",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "22:00"
	},
	{
		game: "Kemono Friends 3",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "King's Raid",
		server: "America",
		timezone: "America/New_York",
		dailyReset: "00:00"
	},
	{
		game: "King's Raid",
		server: "Asia",
		timezone: "Etc/GMT+7",
		dailyReset: "21:00"
	},
	{
		game: "KonoSuba: Fantastic Days",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Langrisser",
		server: "Global",
		timezone: "America/Chicago",
		dailyReset: "00:00"
	},
	{
		game: "LAST CLOUDIA",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "05:00"
	},
	{
		game: "Last Origin",
		server: "Korea",
		timezone: "Asia/Seoul",
		dailyReset: "09:00"
	},
	{
		game: "Legend Clover",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Legends of Runeterra",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "03:00"
	},
	{
		game: "Limbus Company",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "06:00"
	},
	{
		game: "Looney Tunes World of Mayhem",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "18:00"
	},
	{
		game: "Lost Ark",
		server: "EU Central",
		timezone: "Europe/Paris",
		dailyReset: "10:00",
		utcDailyReset: true
	},
	{
		game: "Lost Ark",
		server: "EU West",
		timezone: "Etc/GMT",
		dailyReset: "10:00",
		utcDailyReset: true
	},
	{
		game: "Lost Ark",
		server: "NA East",
		timezone: "America/New_York",
		dailyReset: "10:00",
		utcDailyReset: true
	},
	{
		game: "Lost Ark",
		server: "NA West",
		timezone: "America/Los_Angeles",
		dailyReset: "10:00",
		utcDailyReset: true
	},
	{
		game: "Lost Ark",
		server: "South America",
		timezone: "America/Sao_Paulo",
		dailyReset: "10:00",
		utcDailyReset: true
	},
	{
		game: "Love Live! School Idol Festival 2 MIRACLE LIVE!",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Love Live! School Idol Festival ALL STARS",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Love Nikki",
		server: "EN",
		timezone: "Etc/GMT+5",
		dailyReset: "05:00"
	},
	{
		game: "Magia Record",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Magic: The Gathering Arena",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "09:00"
	},
	{
		game: "Magicami",
		server: "EN",
		timezone: "America/New_York",
		dailyReset: "00:00"
	},
	{
		game: "Mahjong Soul",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "14:00"
	},
	{
		game: "MapleStory M",
		server: "America",
		timezone: "Etc/GMT+8",
		dailyReset: "00:00"
	},
	{
		game: "MapleStory M",
		server: "Asia",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00"
	},
	{
		game: "MapleStory M",
		server: "Europe",
		timezone: "Etc/GMT-2",
		dailyReset: "00:00"
	},
	{
		game: "MementoMori",
		server: "EU/Global",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00"
	},
	{
		game: "MementoMori",
		server: "US",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00"
	},
	{
		game: "Millennium War Aigis",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Mobile Legends: Adventure",
		server: "Global",
		timezone: "Etc/GMT+8",
		dailyReset: "00:00"
	},
	{
		game: "My Hero Academia: The Strongest Hero",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "13:00",
		utcDailyReset: true
	},
	{
		game: "MY HERO ULTRA IMPACT",
		server: "EN",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Mythic Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "NARUTO X BORUTO NINJA VOLTAGE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "09:00"
	},
	{
		game: "Neural Cloud",
		server: "CN",
		timezone: "Asia/Shanghai",
		dailyReset: "05:00"
	},
	{
		game: "Neural Cloud",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "05:00"
	},
	{
		game: "Ni no Kuni: Cross Worlds",
		server: "Global",
		timezone: "Etc/GMT",
		dailyReset: "06:00"
	},
	{
		game: "NieR Re[in]carnation",
		server: "Global",
		timezone: "Pacific/Pitcairn",
		dailyReset: "00:00"
	},
	{
		game: "NieR Re[in]carnation",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Noah's Heart",
		server: "Global",
		timezone: "Etc/GMT+5",
		dailyReset: "00:00"
	},
	{
		game: "NU: carnival",
		server: "EN",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00"
	},
	{
		game: "Obey Me!",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "OCTOPATH TRAVELER: Champions of the Continent",
		server: "EN",
		timezone: "ETC/UTC",
		dailyReset: "09:00"
	},
	{
		game: "ONE PIECE TREASURE CRUISE",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "07:00"
	},
	{
		game: "Onmyoji",
		server: "EN",
		timezone: "America/Panama",
		dailyReset: "00:00"
	},
	{
		game: "Oshiro Project:RE Castle Defense",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Paladins",
		server: "NA",
		timezone: "America/Los_Angeles",
		dailyReset: "01:00"
	},
	{
		game: "Path to Nowhere",
		server: "America",
		timezone: "Etc/GMT+7",
		dailyReset: "05:00"
	},
	{
		game: "Path to Nowhere",
		server: "Asia-Pacific",
		timezone: "Etc/GMT-7",
		dailyReset: "05:00"
	},
	{
		game: "Path to Nowhere",
		server: "Europe",
		timezone: "Etc/GMT-2",
		dailyReset: "05:00"
	},
	{
		game: "Pokemon Masters EX",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "06:00"
	},
	{
		game: "Pokemon UNITE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Princess Connect! Re:Dive",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Princess Connect! Re:Dive",
		server: "TW",
		timezone: "Asia/Taipei",
		dailyReset: "05:00"
	},
	{
		game: "Project SEKAI COLORFUL STAGE! feat. Hatsune Miku",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Psychic Idle",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "00:00"
	},
	{
		game: "PUBG MOBILE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Punishing: Gray Raven",
		server: "China & Taiwain",
		timezone: "Asia/Shanghai",
		dailyReset: "04:00"
	},
	{
		game: "Punishing: Gray Raven",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "07:00"
	},
	{
		game: "Punishing: Gray Raven",
		server: "Japan",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Ragnarok M: Eternal Love",
		server: "Global",
		timezone: "Etc/GMT+6",
		dailyReset: "06:00"
	},
	{
		game: "Ragnarok X: Next Generation",
		server: "SEA",
		timezone: "Etc/GMT-7",
		dailyReset: "05:00"
	},
	{
		game: "RAID: Shadow Legends",
		server: "EU",
		timezone: "Etc/GMT-1",
		dailyReset: "00:00"
	},
	{
		game: "RED: Pride of Eden",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Revived Witch",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00"
	},
	{
		game: "Revue Starlight Re LIVE",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Rhythm Hive",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "00:00"
	},
	{
		game: "Rise of Eros",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "11:00"
	},
	{
		game: "ROCKMAN X DiVE",
		server: "Taiwan",
		timezone: "Etc/GMT-8",
		dailyReset: "20:00"
	},
	{
		game: "Romancing SaGa Re;univerSe",
		server: "Global",
		timezone: "Etc/GMT-7",
		dailyReset: "08:00"
	},
	{
		game: "Saint Seiya: Awakening",
		server: "Global",
		timezone: "Etc/GMT+4",
		dailyReset: "05:00"
	},
	{
		game: "Saint Seiya: Awakening",
		server: "SEA",
		timezone: "Asia/Jakarta",
		dailyReset: "05:00"
	},
	{
		game: "Sdorica",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "21:00"
	},
	{
		game: "Senki Zesshou Symphogear XD Unlimited",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "SEOUL Apocalypse",
		server: "EN",
		timezone: "Etc/GMT-8",
		dailyReset: "07:00"
	},
	{
		game: "Seven Knights 2",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "05:00"
	},
	{
		game: "Seven Mortal Sins X-TASY",
		server: "EN",
		timezone: "Etc/GMT+4",
		dailyReset: "04:00"
	},
	{
		game: "Shadowverse",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "12:00"
	},
	{
		game: "Shadowverse",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "SHIN MEGAMI TENSEI Liberation Dx2",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "18:00"
	},
	{
		game: "Shining Beyond",
		server: "Global",
		timezone: "Asia/Singapore",
		dailyReset: "00:00"
	},
	{
		game: "Shining Nikki",
		server: "EN",
		timezone: "Etc/GMT+7",
		dailyReset: "05:00"
	},
	{
		game: "SINoALICE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "05:00"
	},
	{
		game: "SINoALICE",
		server: "Japan",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Skullgirls",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "12:00"
	},
	{
		game: "Sky: Children of the Light",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "08:00",
		utcDailyReset: true
	},
	{
		game: "SLIME - ISEKAI Memories",
		server: "Americas",
		timezone: "America/Chicago",
		dailyReset: "06:00"
	},
	{
		game: "SLIME - ISEKAI Memories",
		server: "Europe",
		timezone: "Europe/Paris",
		dailyReset: "06:00"
	},
	{
		game: "Soul Tide",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "04:00"
	},
	{
		game: "SoulWorker",
		server: "EN",
		timezone: "Etc/GMT",
		dailyReset: "01:00"
	},
	{
		game: "Summoners War",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "Tears of Themis",
		server: "Global",
		timezone: "Etc/GMT-9",
		dailyReset: "04:00"
	},
	{
		game: "Tears of Themis",
		server: "Taiwan",
		timezone: "Etc/GMT-8",
		dailyReset: "04:00"
	},
	{
		game: "TenkafuMA!",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00"
	},
	{
		game: "The Ants: Underground Kingdom",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "The Eminence in Shadow: Master of Garden",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "19:00"
	},
	{
		game: "THE iDOLM@STER CINDERELLA GIRLS: STARLIGHT STAGE",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "THE iDOLM@STER MILLION LIVE! THEATER DAYS",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "The Seven Deadly Sins: Grand Cross",
		server: "Global",
		timezone: "Etc/GMT+7",
		dailyReset: "00:00"
	},
	{
		game: "The Seven Deadly Sins: Grand Cross",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Time Princess",
		server: "Global",
		timezone: "Etc/GMT+5",
		dailyReset: "01:00"
	},
	{
		game: "Tokyo 7th Sisters",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Tokyo Afterschool Summoners",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Tokyo NECRO: SUICIDE MISSION",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Toontown Rewritten",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "Toram Online",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Touhou LostWord",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "Tower of Fantasy",
		server: "Global",
		timezone: "America/New_York",
		dailyReset: "05:00"
	},
	{
		game: "Tower of God: The Great Journey",
		server: "KR",
		timezone: "Asia/Seoul",
		dailyReset: "00:00"
	},
	{
		game: "Tower of Saviors",
		server: "CN & EN",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00"
	},
	{
		game: "Ulala: Idle Adventure",
		server: "NA",
		timezone: "America/New_York",
		dailyReset: "05:00"
	},
	{
		game: "Uma Musume Pretty Derby",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Valkyrie Connect",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "06:00"
	},
	{
		game: "Vanguard ZERO",
		server: "EN",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "Vikingard",
		server: "America",
		timezone: "Etc/GMT+6",
		dailyReset: "00:00"
	},
	{
		game: "WAR OF THE VISIONS FINAL FANTASY BRAVE EXVIUS",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "War Thunder",
		server: "Global",
		timezone: "Etc/GMT",
		dailyReset: "00:00"
	},
	{
		game: "Warframe",
		server: "Global",
		timezone: "Etc/GMT",
		dailyReset: "00:00"
	},
	{
		game: "World Flipper",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "20:00"
	},
	{
		game: "World Flipper",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	}
];