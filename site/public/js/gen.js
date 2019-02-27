$(document).ready(function(){
	//loadData();
	$('#generate').click(function(){
		keeps = checkForKeep();
		
		$.getJSON('http://140.82.11.205:3007/getSettlement', keeps, function(data){
			displayNew(data);
		});
		
		//generate(keeps);
		$('.hide').removeClass('hide');
	});
	
	$('#clear_keeps').click(function(){
		$('input').each(function(){
			this.checked = false;
		});
	});
});

function displayNew(data){
	if (data.return_type == 'settlement'){
		var settlement = data.return_obj;
		for (var key in settlement){
			switch(key){
				case 'name':
					$("#townname").text(settlement.name);
					break;
				case 'race_relation':
					$("#race").text(settlement.race_relation);
					break;
				case 'ruler_status':
					$("#ruler").text(settlement.ruler_status);
					break;
				case 'trait':
					$("#trait").text(settlement.trait);
					break;
				case 'known_for':
					$("#known").text(settlement.known_for);
					break;
				case 'calamity':
					$("#calamity").text(settlement.calamity);
					break;
				default:
					console.log('no valid keys');
			}
		}
		
	}
}

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


