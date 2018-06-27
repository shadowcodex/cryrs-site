/* globals colorEnemy, colorFriendly, updateNode, lockUpdateBaseColor, lockHighlight, lockEndHighlight, $ */
// Start getting data for FW
var nextUpdate = 0;
var sorting = [[2,1]];

var updateNodes = function(){
	var now = new Date().getTime();
	nextUpdate = now + 900000;
	
	$('#systems tbody').empty();
	$('#systems').trigger("update");
	
    $.ajax({
        url: 'https://esi.evetech.net/latest/fw/systems/?datasource=tranquility',
		error: function() {
			console.log("Failed to fetch warzone data");
			$('#systems tbody').append(`<tr><td>Error</td><td>updating</td><td>system</td><td>data!</td><tr>`);
	
			$('#systems').trigger("update");
			setTimeout(function() {
				$('#systems').trigger("sorton", [sorting]);
			}, 100);
		},
        success: function(data){
            // Ping Google
            ga('send', 'event','Systems', 'Gal Systems Updated', performance.now().toString() , '0');
            // do something with data
			$.each(data, function(i, item){
				var fac = factionName[item.occupier_faction_id];
				if(fac == "Gallente Federation" || fac == "Caldari State") {
					item.contestedPercentage = Math.round((item.victory_points/item.victory_points_threshold)*1000)/10;
					item.name = nodes.get({filter: function(n) {return (n.id === item.solar_system_id)}})[0].systemName;
					var rowcolor = "";
					if(fac == "Gallente Federation"){
						updateNode(item);
						lockUpdateBaseColor(item.solar_system_id,colorFriendly);
						rowcolor = killColor.GALMIL;
					} else if (fac == "Caldari State") {
						updateNode(item);
						lockUpdateBaseColor(item.solar_system_id,colorEnemy);
						rowcolor = killColor.CALMIL;
					}
					
					$('#systems tbody').append(`
                        <tr class="` + rowcolor + `" data-systemid="` + item.solar_system_id + `" data-systemname="` + item.name + `">
                            <td>` + item.name + `</td>
                            <td>` + fac.split(' ')[0] + `</td>
                            <td>` + item.contestedPercentage + `</td>
                            <td>N/A</td>
                        </tr>
                    `);
                }
            });
			//Tell the table sorter we've made changes and apply the sorting.
			$('#systems').trigger("update");
			setTimeout(function() {
				$('#systems').trigger("sorton", [sorting]);
			}, 100);
            //setup table rows to be clickable
            $('#killboard tr[data-systemid]').unbind('mouseenter mouseleave dblclick');
            $('#system tr[data-systemid]').hover(function(){
                // enter
                var id = $(this).data("systemid");
                lockHighlight(id,id,'#ffa3ff');
            },function(){
                // leave
                var id = $(this).data("systemid");
                lockEndHighlight(id,id);
            });
            $('#system tr[data-systemname]').on('dblclick', function(){
                window.open("http://evemaps.dotlan.net/system/" + $(this).data("systemname") + "/stats", '_blank');
            });
        }
    });
};

setTimeout(function() {
	$('#systems').tablesorter();
	updateNodes();
	var d = new Date();
	var e = $('#kill-stats')[0];
	e.innerHTML = e.innerHTML.substring(0, e.innerHTML.indexOf("Since ") + 5) + " " + (d.getUTCHours() < 10 ? "0" : "") + d.getUTCHours() + ":" + (d.getUTCMinutes() < 10 ? "0" : "") + d.getUTCMinutes() + " EVE time";
}, 1000);

setInterval(function(){
    updateNodes();
},900000);

setInterval(function() {
	var now = new Date().getTime();
	var distance = Math.abs(nextUpdate - now);
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	var e = $('#system')[0].children[0].children[0];
	e.innerHTML = e.innerHTML.substring(0, e.innerHTML.indexOf(": ") + 1) + " " + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}, 1000);