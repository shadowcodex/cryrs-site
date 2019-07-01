/* globals colorEnemy, colorFriendly, updateNode, lockUpdateBaseColor, lockHighlight, lockEndHighlight, $ */
// Start getting data for FW
var nextUpdate = 0;
var sorting = [
	[2, 1]
];

var updateNodes = function() {
	var now = new Date().getTime();
	nextUpdate = now + 900000;

	$('#systems tbody').empty();
	$('#systems').trigger("update");

	$.ajax({
		url: 'https://us-central1-faction-warfare.cloudfunctions.net/getSystemData?warzone=galcal',
		error: function() {
			console.log("Failed to fetch warzone data");
			$('#systems tbody').append(`<tr><td>Error</td><td>updating</td><td>system</td><td>data!</td><tr>`);

			$('#systems').trigger("update");
			setTimeout(function() {
				$('#systems').trigger("sorton", [sorting]);
			}, 100);
		},
		success: function(data) {
			// Ping Google
			ga('send', 'event', 'Systems', 'Gal Systems Updated', performance.now().toString(), '0');
			// do something with data
			$.each(data, function(i, item) {
				var rowcolor = "";
				if (item.occupier == 500004) {
					updateNode(item);
					lockUpdateBaseColor(item.system_id, colorFriendly);
					rowcolor = killColor.GALMIL;
				} else if (item.occupier == 500001) {
					updateNode(item);
					lockUpdateBaseColor(item.system_id, colorEnemy);
					rowcolor = killColor.CALMIL;
				}

				$('#systems tbody').append(`
                        <tr ` + rowcolor + `" data-systemid="` + item.system_id + `" data-systemname="` + item.name + `">
                            <td>` + item.name + `</td>
                            <td>` + (item.occupier == 500004 ? "Gallente" : "Caldari") + `</td>
                            <td>` + (item.vp / item.vp_cap) + `</td>
                            <td>` + (item.delta_3) + `</td>
                        </tr>
                    `);

			});
			//Tell the table sorter we've made changes and apply the sorting.
			$('#systems').trigger("update");
			setTimeout(function() {
				$('#systems').trigger("sorton", [sorting]);
			}, 100);
			//setup table rows to be clickable
			$('#killboard tr[data-systemid]').unbind('mouseenter mouseleave dblclick');
			$('#system tr[data-systemid]').hover(function() {
				// enter
				var id = $(this).data("systemid");
				lockHighlight(id, id, '#ffa3ff');
			}, function() {
				// leave
				var id = $(this).data("systemid");
				lockEndHighlight(id, id);
			});
			$('#system tr[data-systemname]').on('dblclick', function() {
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

setInterval(function() {
	updateNodes();
}, 900000);

setInterval(function() {
	var now = new Date().getTime();
	var distance = Math.abs(nextUpdate - now);
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	var e = $('#system')[0].children[0].children[0];
	e.innerHTML = e.innerHTML.substring(0, e.innerHTML.indexOf(": ") + 1) + " " + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}, 1000);