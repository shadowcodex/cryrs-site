/* globals colorEnemy, colorFriendly, updateNode, lockUpdateBaseColor, lockHighlight, lockEndHighlight, $ */
// Start getting data for FW
var updateNodes = function(){
    //console.log(nodes.get({}), 'hey');
    $.ajax({
        url: 'http://services.jerkasauruswrecks.com:3000/fw/report',
        success: function(data){
            // do something with data
            $('#systems tbody').remove();
            $('#systems').append('<tbody></tbody>');
            $.each(data.data, function(i, item){
                //console.log(i, item);
                var rowcolor = "";
                if(item.owner == "Minmatar Republic"){
                    updateNode(item);
                    lockUpdateBaseColor(item.id,colorFriendly);
                    rowcolor = "text-danger";
                } else if (item.owner == "Amarr Empire") {
                    updateNode(item);
                    lockUpdateBaseColor(item.id,colorEnemy);
                    rowcolor = "text-warning";
                }
                
                if(item.owner == "Minmatar Republic" || item.owner == "Amarr Empire"){
                    //console.log(item);
                    $('#systems tbody').append(`
                        <tr class="` + rowcolor + `" data-systemid="` + item.id + `" data-systemname="` + item.name + `">
                            <td>` + item.name + `</td>
                            <td>` + item.owner.split(' ')[0] + `</td>
                            <td>` + item.contestedPercentage + `</td>
                            <td>` + item.contestedPercentage3HourDelta + `</td>
                        </tr>
                    `);
                }
            });
            $('#systems').tablesorter({sortList: [[2,1]]});
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
            //$('#systems').trigger("sorton", [[0,0]]);
        }
    });  
};
updateNodes();
setInterval(function(){
    updateNodes();
},900000);