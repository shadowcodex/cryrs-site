/*global $, kills, systems, flashNodeColor, moneyFormat, lockHighlight, lockEndHighlight, performance */
var ifFEDUP = function(killmail){
    if(killmail.victim.alliance != null){
        if(killmail.victim.alliance.name == "Federation Uprising") {
            return 'class="text-danger"';
        } 
    } else if (killmail.victim.faction != null) {
        if(killmail.victim.faction.name == "Gallente Federation"){
            return 'class="text-danger"';
        }
    }
    
    for(var i in killmail.attackers){
        if(killmail.attackers[i].finalBlow == true) {
            if(killmail.attackers[i].alliance != null){
                if(killmail.attackers[i].alliance.name == "Federation Uprising") return 'class="text-success"';
            } else if (killmail.attackers[i].faction != null){
                if(killmail.attackers[i].faction.name == "Gallente Federation") return 'class="text-success"';
                if(killmail.attackers[i].faction.name == "Caldari State") return 'class="text-warning"';
            }
        }
    }
    
    if(killmail.victim.faction != null){
        if(killmail.victim.faction.name == "Caldari State") return 'class="text-info"';
    }
    
    
    
    return '';
}

var killStat = function(item){
    /* global killStats */
    var killmail = item.killmail;
    for(var i in killmail.attackers){
        if(killmail.attackers[i].finalBlow == true) {
            if(killmail.attackers[i].faction != null){
                if(killmail.attackers[i].faction.name == "Gallente Federation"){killStats.gal++; $('#galkills').text(killStats.gal); return 0;}
                if(killmail.attackers[i].faction.name == "Caldari State"){killStats.cal++; $('#calkills').text(killStats.cal); return 0;} 
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
    if(killmail.victim.faction != null){
        if(killmail.victim.faction.name == "Gallente Federation"){deathStats.gal++; $('#galDeaths').text(deathStats.gal); return 0;}
        if(killmail.victim.faction.name == "Caldari State"){deathStats.cal++; $('#calDeaths').text(deathStats.cal); return 0;}
        else {deathStats.pir++; $('#pirDeaths').text(deathStats.pir); return 0;}
    } else {
        deathStats.pir++; $('#pirDeaths').text(deathStats.pir); return 0;
    }
}

var getFinalBlow = function(attackers) {
    for( var i in attackers) {
        if(attackers[i].finalBlow == true) {
            if(attackers[i].character != null) return attackers[i].character.name;
            if(attackers[i].corporation != null) return attackers[i].corporation.name;
        }
    }
    return 'unknown';
};

var getFinalBlowCorp = function(attackers) {
    for( var i in attackers) {
        if(attackers[i].finalBlow == true){
            if(attackers[i].corporation != null) return attackers[i].corporation.id;
        } 
    }
    return 98505199;
};

var getFinalBlowCorpName = function(attackers) {
    for( var i in attackers) {
        if(attackers[i].finalBlow == true){
            if(attackers[i].corporation != null) return attackers[i].corporation.name;
        } 
    }
    return 'CRYRS - Unknown';
};

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
                        if($.inArray(item.killmail.solarSystem.id, systems) > 0 && $.inArray(item.killID, kills) < 0){
                            // Signal Google
                            ga('send', 'event','kill', 'Galmil Map Kill', item.killID , '1');
                            // console.log(item, performance.now(), $.inArray(item.killmail.solarSystem.id, systems));
                            killStat(item);
                            deathStat(item.killmail);
                            kills.push(item.killID);
                            // flash the map
                            flashNodeColor(item.killmail.solarSystem.id, item.killmail.solarSystem.name, item.killID, '#ff4949');
                            // add item to the list
                            $('#kills tbody').prepend(`
                                <tr `+ ifFEDUP(item.killmail) +` data-systemid="` + item.killmail.solarSystem.id + `">
                                    <td>` + moneyFormat(item.zkb.totalValue) + `</td>
                                    <td>` + item.killmail.killTime.toString().substring(item.killmail.killTime.length - 8,item.killmail.killTime.length - 3) + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/kill/` + item.killID+ `/"><img id="` + item.killID + `ship" class="s16" src="https://imageserver.eveonline.com/Render/` + item.killmail.victim.shipType.id + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+item.killmail.victim.shipType.name+`"></a></td>
                                    <td>` + item.killmail.solarSystem.name + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/corporation/` + item.killmail.victim.corporation.id + `/"><img id="` + item.killID + `vcorp" class="s16" src="https://imageserver.eveonline.com/Corporation/` + item.killmail.victim.corporation.id + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+item.killmail.victim.corporation.name+`"></a>&nbsp;` + item.killmail.victim.character.name + `</td>
                                    <td><a target="_blank" href="https://zkillboard.com/corporation/` + getFinalBlowCorp(item.killmail.attackers) + `/"><img id="` + item.killID + `acorp" class="s16" src="https://imageserver.eveonline.com/Corporation/` + getFinalBlowCorp(item.killmail.attackers) + `_32.png" data-toggle="tooltip" data-placement="bottom" title="`+getFinalBlowCorpName(item.killmail.attackers)+`"></a>&nbsp;` + getFinalBlow(item.killmail.attackers) + `&nbsp;(` +  item.killmail.attackers.length + `)</td>
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