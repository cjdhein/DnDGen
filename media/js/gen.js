var tables = {}

var generated = {}


$(document).ready(function(){
	loadData();
	$('#generate').click(function(){
		keeps = checkForKeep();
		generate(keeps);
		$('.hide').removeClass('hide');
	});
	
	$('#clear_keeps').click(function(){
		$('input').each(function(){
			this.checked = false;
		});
	});
});

function checkForKeep(){
	var keeps = {
		"name" : $("#keep_name input")[0].checked,
		"race" : $("#keep_race input")[0].checked,
		"ruler" : $("#keep_ruler input")[0].checked,
		"trait" : $("#keep_trait input")[0].checked,
		"known" : $("#keep_known input")[0].checked,
		"calamity" : $("#keep_calamity input")[0].checked
	}
	
	return keeps;
}

function generate(keeps){
	
	if (!keeps.name) {
		// 60% chance of one word, 40% chance of two
		var chance = Math.random();
		
		var name = tableChoice(tables['townname_first'].results, tables['townname_first'].count - 1);
		
		if (chance <= .7){
			var name_two = tableChoice(tables['townname_second'].results, tables['townname_second'].count - 1);
			var name = name + " " + name_two;
		}
		$("#townname").text(name);
	}
	
	if (!keeps.race){
		race = tableChoice(tables['race_relations'].results, tables['race_relations'].count - 1);
		$("#race").text(race);
	}
	
	if (!keeps.ruler){
		ruler = tableChoice(tables['ruler_status'].results, tables['ruler_status'].count - 1);
		$("#ruler").text(ruler);
	}
	
	if (!keeps.trait){
		trait = tableChoice(tables['traits'].results, tables['traits'].count - 1);
		$("#trait").text(trait);
	}
	
	if (!keeps.known){
		known = tableChoice(tables['known_for'].results, tables['known_for'].count - 1);
		$("#known").text(known);
	}
	
	if (!keeps.calamity) {
		calamity = tableChoice(tables['calamity'].results, tables['calamity'].count - 1);
		$("#calamity").text(calamity);
	}
	
}

function tableChoice(table, range) {
	var choiceNum = Math.floor((Math.random() * range ));
	var choice = table[choiceNum];
	
	console.log(choiceNum + " " + choice);
	
	return choice;
}

function loadData(){
	
	var data = {
	"name" : "Random Settlements Generation Data",
	"desc" : "The data used for generating random settlements from the D&D 5E DMG tables",
	"tables" : {
		"race_relations" : {
			"name" : "Race Relations",
			"results" : [
				"Harmony",
				"Harmony",
				"Harmony",
				"Harmony",
				"Harmony",
				"Harmony",
				"Harmony",
				"Harmony",
				"Harmony",
				"Harmony",
				"Tension or rivalry",
				"Tension or rivalry",
				"Tension or rivalry",
				"Tension or rivalry",
				"Racial majority are conquerors",
				"Racial majority are conquerors",
				"Racial minority are rulers",
				"Racial minority are refugees",
				"Racial majority oppresses minority",
				"Racial minority oppresses majority" 		
			]
			,"count" : null
		},
		"ruler_status" : {
			"name" : "Ruler's Status",
			"results" : [
				"Respected, fair, and just",
				"Respected, fair, and just",
				"Respected, fair, and just",
				"Respected, fair, and just",
				"Respected, fair, and just",
				"Feared Tyrant",
				"Feared Tyrant",
				"Feared Tyrant",
				"Weakling manipulated by others",
				"Illegitimate ruler, simmering civil war",
				"Ruled or controlled by a powerful monster",
				"Mysterious, anonymous cabal",
				"Contested leadership, open fighting",
				"Cabal seized power openly",
				"Doltish lout",
				"On deathbed, claimants compete for power", 
				"Iron-willed but respected",
				"Iron-willed but respected",
				"Religious leader",
				"Religious leader",
				"Democratic council"
			]
			,"count" : null
		},
		"traits" : {
			"name" : "Notable Traits",
			"results" : [
				"Canals in place of streets",
				"Massive statue or monument",
				"Grand temple",
				"Large fortress",
				"Verdant parks and orchards",
				"River divides town",
				"Major trade center",
				"Headquarters of a powerful family or guild",
				"Headquarters of a powerful family or guild",
				"Population mostly wealthy",
				"Destitute, rundown",
				"Awful smell (tanneries, open sewers)",
				"Center of trade for one specific good",
				"Site of many battles",
				"Site of a mythic or magical event",
				"Important library or archive",
				"Worship of all gods banned",
				"Sinister reputation",
				"Notable library or academy",
				"Site of important tomb or graveyard",
				"Built atop ancient ruins",
				"Mining town"
			]
			,"count" : null		
		},
		"known_for" : {
			"name" : "Known for it's ...",
			"results" : [
				"Delicious cuisine",
				"Rude people",
				"Greedy merchants",
				"Artists and writers",
				"Great hero/savior",
				"Flowers",
				"Hordes of beggars",
				"Tough warriors",
				"Dark magic",
				"Decadence",
				"Piety",
				"Gambling",
				"Godlessness",
				"Education",
				"Wines",
				"High fashion",
				"Political intrigue",
				"Powerful guilds",
				"Strong drink",
				"Patriotism",
				"Great Beer",
				"Friendly Citizens",
				"Metalwork",
				"Masonry"
			]
			,"count" : null		
		},
		"calamity" : {
			"name" : "Current Calamity",
			"results" : [
				"Suspected monster infestation",
				"New cult seeks converts",
				"Important figure died (murder suspected)",
				"War between rival thieves' guilds",
				"Plague or famine (sparks riots)",
				"Corrupt officials",
				"Marauding monsters",
				"Powerful wizard has moved into town",
				"Economic depression (trade disrupted)",
				"None",
				"Flooding",
				"Undead stirring in cemeteries",
				"Prophecy of doom",
				"Brink of war",
				"Internal strife (leads to anarchy)",
				"Besieged by enemies",
				"Scandal threatens powerful families",
				"Dungeon discovered (adventurers flock to town)",
				"Religious sects struggle for power",
				"None",
				"Drought (possibly magical in nature)"
			]
			,"count" : null		
		},
		"townname_first" : {
			"results" : [
				"Aerilon",
				"Aquarin",
				"Aramoor",
				"Azmar",
				"Beggar",
				"Black",
				"Blue",
				"Briar",
				"Brickelwhyte",
				"Broken",
				"Boatwright",
				"Bullmar",
				"Carran",
				"Coalfell",
				"Cullfield",
				"Darkwell",
				"Deathfall",
				"Doonatel",
				"East",
				"Easthaven",
				"Ecrin",
				"Erast",
				"Far",
				"Firebend",
				"Fool’s",
				"Frostford",
				"Goldcrest",
				"Gold",
				"Goldenleaf",
				"Greenflower",
				"Garen",
				"Haran",
				"Haran",
				"Hillsfar",
				"Hill",
				"Hogsfeet",
				"Hollyhead",
				"Hull",
				"Hwen",
				"Icemeet",
				"Ice",
				"Ironforge",
				"Iron",
				"Irragin",
				"Jarren",
				"Jongvale",
				"Kara",
				"Knife",
				"Lakeshore",
				"Leeside",
				"Lullin",
				"Marren",
				"Millstone",
				"Moonbright",
				"Mountmend",
				"Nearon",
				"New Cresthill",
				"Northpass",
				"North",
				"Nuvar",
				"Oakheart",
				"Oar",
				"Old",
				"Orrinshire",
				"Ozryn",
				"Pavv",
				"Pella",
				"Pinnella",
				"Pran",
				"Quen Mar",
				"Queenstown",
				"Ramshorn",
				"Red",
				"Hawk",
				"Blue",
				"Rivermouth",
				"River",
				"Saker",
				"Seameet",
				"Sea",
				"Silverkeep",
				"South",
				"Snake",
				"Snowmelt",
				"Squall",
				"Swordbreak",
				"Tarrin",
				"Three Streams",
				"Trudid",
				"Ubbin",
				"Ula’ree",
				"Veritas",
				"Violl",
				"Wavemeet",
				"West",
				"Whiteridge",
				"White",
				"Willow",
				"Windrip",
				"Wintervale",
				"Winter",
				"Wellspring",
				"Westwend",
				"West",
				"Wolfden",
				"Wolf",
				"Yarrin",
				"Yellowseed"			
			]
			,"count" : null		
		},
		"townname_second" : {
			"results" : [
				"Hollow",
				"Field",
				"Glen",
				"Ridge",
				"Reach",
				"Wall",
				"Vale",
				"March",
				"End",
				"Canyon",
				"Warren",
				"Haven",
				"Outpost",
				"Cry",
				"Edge",
				"Waters",
				"Pass",
				"Falls",
				"Keep",
				"Rest",
				"Eve",
				"Dale",
				"Post",
				"Corners",
				"Outpost"
			]
			,"count" : null			
		}
		
		
	}

}

	tables = data.tables;
	Object.keys(tables).forEach(function(key) {
		tables[key].count = tables[key].results.length;
	});
}