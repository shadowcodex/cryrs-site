/*global $, kills, systems, flashNodeColor, moneyFormat, lockHighlight, lockEndHighlight, performance */

//TODO This needs to be rewritten. None of these checks actually mean anything. They aren't returning the cases that are described in the help menu at all.

/*
Required states:
	- Pirates only (White)
	- Pirate kills CalMil (Muted)
	- Pirate kills GalMil (Grey)
	- CalMil kills GalMil (Blue)
	- CalMil kills Pirate (Lblue)
	- Galmil kills CalMil (Green)
	- GalMil kills Pirate (Yellow)
*/
var isFW = function(killmail){
    var killer = "";
	var victim = "";
	// Loop to find the killer, store who done it.
    for(var i in killmail.attackers){
        if(killmail.attackers[i].final_blow == true) {
            if (killmail.attackers[i].faction_id != null){
                if(killmail.attackers[i].faction_id == idEnum.GalMil) killer = "GALMIL";
                if(killmail.attackers[i].faction_id == idEnum.CalMil) killer = "CALMIL";
            } else killer = "PIRATE";
        }
    }
	
	if (killmail.victim.faction_id != null) { // If the victim is in the militia
        if(killmail.victim.faction_id == idEnum.GalMil) victim = "GALMIL";
        if(killmail.victim.faction_id == idEnum.CalMil) victim = "CALMIL";
    } else victim = "PIRATE";
	
	// I hate trying to keep track of states like this in ^^^^ that kind of code so.... splitting it off
	switch(killer) {
		case "PIRATE":
			if (victim == "PIRATE") return killColor.WHITE;
			if (victim == "CALMIL") return killColor.MUTED;
			if (victim == "GALMIL") return killColor.GREY;
			break;
			
		case "CALMIL":
			if (victim == "PIRATE") return killColor.LBLUE;
			if (victim == "CALMIL") return killColor.RED;
			if (victim == "GALMIL") return killColor.BLUE;
			break;
			
		case "GALMIL":
			if (victim == "PIRATE") return killColor.YELLOW;
			if (victim == "CALMIL") return killColor.GREEN;
			if (victim == "GALMIL") return killColor.RED;
			break;
		
		default:
			return killColor.WHITE;
	}
    
    return '';
}

var killStat = function(item){
    /* global killStats */
	var killmail = item.killmail;
    for(var i in killmail.attackers){
        if(killmail.attackers[i].final_blow == true) {
            if(killmail.attackers[i].faction_id != null){
                if(killmail.attackers[i].faction_id == idEnum.GalMil){killStats.gal++; $('#galkills').text(killStats.gal); return 0;}
                if(killmail.attackers[i].faction_id == idEnum.CalMil){killStats.cal++; $('#calkills').text(killStats.cal); return 0;} 
                else {killStats.pir++; $('#pirkills').text(killStats.pir); return 0;}
            } else {
                if(item.zkb.npc){killStats.npc++; $('#npckills').text(killStats.npc); return 0;}
                else {killStats.pir++; $('#pirkills').text(killStats.pir); return 0;}
            }
        }
    }
}

var deathStat = function(killmail){
    /* global deathStats */
    if(killmail.victim.faction_id != null){
        if(killmail.victim.faction_id == idEnum.GalMil){deathStats.gal++; $('#galDeaths').text(deathStats.gal); return 0;}
        if(killmail.victim.faction_id == idEnum.CalMil){deathStats.cal++; $('#calDeaths').text(deathStats.cal); return 0;}
        else {deathStats.pir++; $('#pirDeaths').text(deathStats.pir); return 0;}
    } else {
        deathStats.pir++; $('#pirDeaths').text(deathStats.pir); return 0;
    }
}

var getFinalBlow = function(killID, attackers) {
    for(var i in attackers) {
        if(attackers[i].final_blow == true) {
            if(attackers[i].character_id != null) return parseCharacter(killID, attackers[i].character_id, false);
			else if (attackers[i].corporation_id != null) return "NPC";
        }
    }
    return 'unknown';
};

var getFinalBlowID = function(attackers) {
	for(var i in attackers) {
		if (attackers[i].final_blow == true) {
			if(attackers[i].character_id != null) return attackers[i].character_id;
			else if (attackers[i].corporation_id != null) return "NPC";
		}
	}
}

var getFinalBlowCorpID = function(attackers) {
    for( var i in attackers) {
        if(attackers[i].final_blow == true){
            if(attackers[i].corporation_id != null) return attackers[i].corporation_id;
        } 
    }
    return 98505199;
};

var getFinalBlowCorpName = function(killID, attackers) {
    for( var i in attackers) {
        if(attackers[i].final_blow == true){
            if(attackers[i].corporation_id != null) return parseCorporation(killID, attackers[i].corporation_id, false);
        } 
    }
    return 'Unknown';
};

function parseCharacter(killID, id, victim) {
	//BUG AJAX manipulation is breaking tooltips... 
	$.ajax({
            url: 'https://esi.tech.ccp.is/latest/characters/' + id + '/?datasource=tranquility',
            type: 'GET',
            crossDomain: true,
			headers: {
				'Accept':'application/json',
			},
            error: function(data){
				console.log("Failed to fetch character info for: " + id);
            },
            success: function(data){
				if (victim) {
					var e = $("#" + killID + "vcorp")[0].parentElement.parentElement;
					e.innerHTML = e.innerHTML.replace(" " + id, " " + data.name);
				} else {
					var e = $("#" + killID + "acorp")[0].parentElement.parentElement;
					e.innerHTML = e.innerHTML.replace(" " + id, " " + data.name);
				}
			}
	});
	return id;
}
function parseCorporation(killID, id, victim) {
	//BUG AJAX manipulation is breaking tooltips...
	$.ajax({
            url: 'https://esi.tech.ccp.is/latest/corporations/' + id + '/?datasource=tranquility',
            type: 'GET',
            crossDomain: true,
			headers: {
				'Accept':'application/json',
			},
            error: function(data){
				console.log("Failed to fetch corporation info for: " + id);
            },
            success: function(data){
				if (victim) {
					$("#" + killID + "vcorp")[0].title = data.name;
				} else {
					$("#" + killID + "acorp")[0].title = data.name;
				}
			}
	});
	return id;
}
function parseAlliance(id) {
	//TODO
	return id;
}
function parseShipName(id) {
	//TODO
	return id;
}
function parseSolarSystem(id) {
	var i = nodes.get(id);
	if (i) return i.label;
	return id;
}

var waiting = 0;

// Start getting data for killboard
setInterval(function(){
    if(waiting <= 0){
        // console.log('ping');
        waiting++;
        $.ajax({
            url: 'https://redisq.zkillboard.com/listen.php?queueID=' + queueID + '&ttw=1',
            type: 'GET',
            crossDomain: true,
            error: function(data){
                waiting--;
            },
            success: function(data){
                waiting--;

                // do something with data
                $.each(data, function(i, item){
                    if(item != null){
                        if($.inArray(item.killmail.solar_system_id, systems) > 0 && $.inArray(item.killID, kills) < 0){
                            // Signal Google
                            ga('send', 'event','kill', 'Galmil Map Kill', item.killID , '1');
                            killStat(item);
                            deathStat(item.killmail);
                            kills.push(item.killID);
                            // flash the map
                            flashNodeColor(item.killmail.solar_system_id, parseSolarSystem(item.killmail.solar_system_id).split(" ")[0], item.killID, '#ff4949');
							
							// add item to the list
                            $('#kills tbody').prepend(`
                                <tr `+ isFW(item.killmail) +` data-systemid="` + item.killmail.solar_system_id + `">
                                    <td>` + moneyFormat(item.zkb.totalValue) + `</td>
                                    <td>` + item.killmail.killmail_time.toString().substring(item.killmail.killmail_time.length - 9,item.killmail.killmail_time.length - 4) + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/kill/` + item.killID+ `/"><img id="` + item.killID + `ship" class="s16" src="https://imageserver.eveonline.com/Render/` + item.killmail.victim.ship_type_id + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+parseShipName(item.killmail.victim.ship_type_id)+`"></a></td>
                                    <td>` + parseSolarSystem(item.killmail.solar_system_id) + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/corporation/` + item.killmail.victim.corporation_id + `/"><img id="` + item.killID + `vcorp" class="s16" src="https://imageserver.eveonline.com/Corporation/` + item.killmail.victim.corporation_id + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+item.killmail.victim.corporation_id+`"></a>&nbsp; ` + item.killmail.victim.character_id + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/corporation/` + getFinalBlowCorpID(item.killmail.attackers) + `/"><img id="` + item.killID + `acorp" class="s16" src="https://imageserver.eveonline.com/Corporation/` + getFinalBlowCorpID(item.killmail.attackers) + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+getFinalBlowCorpID(item.killmail.attackers)+`"></a>&nbsp; ` + getFinalBlowID(item.killmail.attackers) + `&nbsp;(` +  item.killmail.attackers.length + `)</td>
                                </tr>
                            `);
							
							parseCorporation(item.killID, item.killmail.victim.corporation_id, true); // Victim corp
							parseCharacter(item.killID, item.killmail.victim.character_id, true); // Victim name
							getFinalBlowCorpName(item.killID, item.killmail.attackers); // Killer corp
							getFinalBlow(item.killID, item.killmail.attackers); // Killer name
							
							
                            $('#'+item.killID+'vcorp').tooltip();
                            $('#'+item.killID+'acorp').tooltip();
                            $('#'+item.killID+'ship').tooltip();
                        }  
                    }
                });
                $('#killboard tr[data-systemid]').unbind('mouseenter mouseleave');
                $('#killboard tr[data-systemid]').hover(function(){
                    // enter
                    var id = $(this).data("systemid");
                    lockHighlight(id,id+'killhighlight','#ffa3ff');
                },function(){
                    // leave
                    var id = $(this).data("systemid");
                    lockEndHighlight(id,id+'killhighlight');
                });
            }
        });  
    }
}, 1000);