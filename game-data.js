const gameData = [
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
		game: "Another Eden",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "15:00"
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
		game: "Ash Arms",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
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
		game: "BanG Dream! Girls Band Party!",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "08:00"
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
		game: "CIRCLET PRINCESS",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Cookie Run: Kingdom",
		server: "Global",
		timezone: "Asia/Seoul",
		dailyReset: "00:00"
	},
	{
		game: "Counter:Side",
		server: "SEA",
		timezone: "Etc/GMT-7",
		dailyReset: "04:00"
	},
	{
		game: "D4DJ Groovy Mix",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Dengeki Bunko: Crossing Void",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "12:00"
	},
	{
		game: "Destiny Child",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "04:00"
	},
	{
		game: "Disgaea RPG",
		server: "Global",
		timezone: "Etc/GMT+4",
		dailyReset: "00:00"
	},
	{
		game: "DISSIDIA FINAL FANTASY OPERA OMNIA",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "08:00"
	},
	{
		game: "Dragalia Lost",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "23:00"
	},
	{
		game: "DRAGON QUEST TACT",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "12:00"
	},
	{
		game: "Dream Eater",
		server: "Taiwan",
		timezone: "Asia/Taipei",
		dailyReset: "00:00"
	},
	{
		game: "Elune",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
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
		game: "Exos Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "20:00"
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
		dailyReset: "04:00",
		utcDailyReset: true
	},
	{
		game: "FINAL FANTASY BRAVE EXVIUS",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
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
		game: "Girls' Frontline",
		server: "EN",
		timezone: "Etc/GMT+8",
		dailyReset: "00:00"
	},
	{
		game: "Granblue Fantasy",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
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
		game: "GUNDAM BATTLE: GUNPLA WARFARE",
		server: "JP & NA",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Hero Cantare",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
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
		server: "Europe",
		timezone: "Etc/GMT-1",
		dailyReset: "04:00"
	},
	{
		game: "Identity V",
		server: "NA and EU",
		timezone: "Etc/GMT+6",
		dailyReset: "05:00"
	},
	{
		game: "Idle Heroes",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "00:00"
	},
	{
		game: "ILLUSION CONNECT",
		server: "Global",
		timezone: "Etc/GMT-8",
		dailyReset: "05:00"
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
		game: "Looney Tunes World of Mayhem",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "18:00"
	},
	{
		game: "Love Live! School Idol Festival ALL STARS",
		server: "Global",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "Magia Record",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Magicami",
		server: "EN",
		timezone: "America/New_York",
		dailyReset: "00:00"
	},
	{
		game: "Millennium War Aigis",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "04:00"
	},
	{
		game: "NieR Re[in]carnation",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "00:00"
	},
	{
		game: "Oshiro Project:RE Castle Defense",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Pokemon Masters",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "06:00"
	},
	{
		game: "Princess Connect! Re:Dive",
		server: "EN",
		timezone: "Etc/UTC",
		dailyReset: "13:00"
	},
	{
		game: "Princess Connect! Re:Dive",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Punishing: Gray Raven",
		server: "China & Taiwain",
		timezone: "Asia/Shanghai",
		dailyReset: "04:00"
	},
	{
		game: "RED: Pride of Eden",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "Revue Starlight Re LIVE",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
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
		game: "SINoALICE",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "05:00"
	},
	{
		game: "Summoners War",
		server: "Global",
		timezone: "America/Los_Angeles",
		dailyReset: "00:00"
	},
	{
		game: "SWORD ART ONLINE Alicization Rising Steel",
		server: "Global",
		timezone: "Etc/UTC",
		dailyReset: "03:00"
	},
	{
		game: "TALES OF CRESTORIA",
		server: "JP & EN",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
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
		game: "Tower of Saviors",
		server: "CN & EN",
		timezone: "Etc/GMT-8",
		dailyReset: "00:00"
	},
	{
		game: "Uma Musume Pretty Derby",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	},
	{
		game: "World Flipper",
		server: "JP",
		timezone: "Asia/Tokyo",
		dailyReset: "05:00"
	}
];