var db = {}
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname,'../data');

fs.readFile(dataDir +'/settlements.json','utf8', function (err,data) {
	db = JSON.parse(data);
});

function tableChoice(table){
	var results = table.results;
	var count = table.count - 1;

	var randNum = Math.floor((Math.random() * count));
	var choice = results[randNum];

	console.log('Num: %s, Choice: %s',randNum,choice);
	return choice;
}

module.exports.generateSettlement = function(fromClient) {
	var tables = db['tables'];

	var settlement = {}
	
	if (fromClient.name == 'false'){

		var nameChance = Math.random();

		var name = tableChoice(tables['townname_first']);
		if (nameChance <= .7){name += ' ' + tableChoice(tables['townname_second']);}

		settlement['name'] = name;
	}

	if (fromClient.race == 'false'){
		var race = tableChoice(tables['race_relations']);
		settlement['race_relation'] = race;
	}

	if (fromClient.ruler == 'false'){
		var ruler = tableChoice(tables['ruler_status']);
		settlement['ruler_status'] = ruler;
	}

	if (fromClient.trait == 'false'){
		var trait = tableChoice(tables['traits']);
		settlement['trait'] = trait;
	}

	if (fromClient.known == 'false') {
		var known = tableChoice(tables['known_for']);
		settlement['known_for'] = known;
	}

	if (fromClient.calamity == 'false'){
		var calamity = tableChoice(tables['calamity']);
		settlement['calamity'] = calamity;
	}

	var toClient = {
		'return_type' : 'settlement',
		'return_obj' : settlement
	}

	return toClient;
}
