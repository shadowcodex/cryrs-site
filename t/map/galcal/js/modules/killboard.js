/*global $, kills, systems, flashNodeColor, moneyFormat, lockHighlight, lockEndHighlight, performance */
var ifFEDUP = function(killmail){
    if(killmail.victim.alliance_id != null){
		// Compare to FEDUP ID
        if(killmail.victim.alliance_id == idEnum.FEDUP) return 'class="text-danger"';
    } else if (killmail.victim.faction_id != null) {
		// Compare to GalMil ID
        if(killmail.victim.faction_id == idEnum.GalMil) return 'class="text-danger"';
		// Compare to CalMil ID
        if(killmail.victim.faction_id == idEnum.CalMil) return 'class="text-info"';
    }
    
    for(var i in killmail.attackers){
        if(killmail.attackers[i].final_blow == true) {
            if(killmail.attackers[i].alliance_id != null){
				// if FEDUP
                if(killmail.attackers[i].alliance_id == idEnum.FEDUP) return 'class="text-success"';
            } else if (killmail.attackers[i].faction_id != null){
				// if GalMil
                if(killmail.attackers[i].faction_id == idEnum.GalMil) return 'class="text-success"';
				// if CalMil
                if(killmail.attackers[i].faction_id == idEnum.CalMil) return 'class="text-warning"';
            }
        }
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
            if(attackers[i].character_id != null) return parseCharacter(killID, attackers[i].character_id);
        }
    }
    return 'unknown';
};

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
            if(attackers[i].corporation_id != null) return parseCorporation(killID, attackers[i].corporation_id);
        } 
    }
    return 'CRYRS - Unknown';
};

function parseCharacter(killID, id, victim) {
	//TODO
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
					var name = $("[data-killid=" + killID + "]")[0].children[4].innerHTML.replace(id, data.name);
					$("[data-killid=" + killID + "]")[0].children[4].innerHTML = name;
				} else {
					var name = $("[data-killid=" + killID + "]")[0].children[5].innerHTML.replace(id, data.name);
					$("[data-killid=" + killID + "]")[0].children[5].innerHTML = name;
				}
			}
	});
	return id;
}
function parseCorporation(killID, id, victim) {
	//TODO
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
					var name = $("[data-killid=" + killID + "]")[0].children[4].innerHTML.replace(id, data.name);
					$("[data-killid=" + killID + "]")[0].children[4].innerHTML = name;
				} else {
					var name = $("[data-killid=" + killID + "]")[0].children[5].innerHTML.replace(id, data.name);
					$("[data-killid=" + killID + "]")[0].children[5].innerHTML = name;
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
                            flashNodeColor(item.killmail.solar_system_id, parseSolarSystem(item.killmail.solar_system_id), item.killID, '#ff4949');
							
							// add item to the list
                            $('#kills tbody').prepend(`
                                <tr `+ ifFEDUP(item.killmail) +` data-killid="` + item.killID + `">
                                    <td>` + moneyFormat(item.zkb.totalValue) + `</td>
                                    <td>` + item.killmail.killmail_time.toString().substring(item.killmail.killmail_time.length - 9,item.killmail.killmail_time.length - 4) + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/kill/` + item.killID+ `/"><img id="` + item.killID + `ship" class="s16" src="https://imageserver.eveonline.com/Render/` + item.killmail.victim.ship_type_id + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+parseShipName(item.killmail.victim.ship_type_id)+`"></a></td>
                                    <td>` + parseSolarSystem(item.killmail.solar_system_id) + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/corporation/` + item.killmail.victim.corporation_id + `/"><img id="` + item.killID + `vcorp" class="s16" src="https://imageserver.eveonline.com/Corporation/` + item.killmail.victim.corporation_id + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+parseCorporation(item.killID, item.killmail.victim.corporation_id, true)+`"></a>&nbsp; ` + parseCharacter(item.killID, item.killmail.victim.character_id, true) + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/corporation/` + getFinalBlowCorpID(item.killmail.attackers) + `/"><img id="` + item.killID + `acorp" class="s16" src="https://imageserver.eveonline.com/Corporation/` + getFinalBlowCorpID(item.killmail.attackers) + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+getFinalBlowCorpName(item.killID, item.killmail.attackers)+`"></a>&nbsp;` + getFinalBlow(item.killID, item.killmail.attackers) + `&nbsp;(` +  item.killmail.attackers.length + `)</td>
                                </tr>
                            `);
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