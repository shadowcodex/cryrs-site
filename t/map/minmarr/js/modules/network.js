/* globals nodes,edges,mapScale,vis,changeArrow*/
// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {
    "edges": {
        "smooth": false
    },
    "nodes": {
        "shape": 'box',
        "font":{'align': 'left'},
        borderWidth: 0
    },
    interaction: {
        navigationButtons: true,
        keyboard: true
    }
};


// initialize your network!
var network = new vis.Network(container, data, options);

// DEBUG
network.on("click", function(params){
    ga('send', 'event','click', 'minmar click on map', "X: " + params.pointer.canvas.x/mapScale + " Y: " + params.pointer.canvas.y/mapScale , '2');
    //console.log("X: " + params.pointer.canvas.x/mapScale + " Y: " + params.pointer.canvas.y/mapScale);
});

network.on("beforeDrawing", function (ctx) {
    ctx.font = '20px Arial'
    ctx.lineWidth = 3;
    
    // Sinq Laison 1
    ctx.beginPath();
    ctx.fillStyle = regSinq;
    ctx.moveTo(-80*mapScale,-60*mapScale);
    ctx.lineTo(40*mapScale,45*mapScale);
    ctx.lineTo(40*mapScale,85*mapScale);
    ctx.lineTo(-10*mapScale,95*mapScale);
    ctx.lineTo(-30*mapScale,200*mapScale);
    ctx.lineTo(40*mapScale,300*mapScale);
    ctx.lineTo(-10*mapScale,320*mapScale);
    ctx.lineTo(-80*mapScale,330*mapScale);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText("Sinq Laison", -40*mapScale,45*mapScale);
    
    // Sinq Laison 2
    ctx.beginPath();
    ctx.fillStyle = regSinq;
    ctx.moveTo(150*mapScale,260*mapScale);
    ctx.lineTo(200*mapScale,175*mapScale);
    ctx.lineTo(275*mapScale,205*mapScale);
    ctx.lineTo(250*mapScale,240*mapScale);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText("Sinq Laison", 175*mapScale,235*mapScale);
    
    
    // Metropolis
    ctx.beginPath();
    ctx.fillStyle= regLone;
    ctx.moveTo(-80*mapScale,-60*mapScale);
    ctx.lineTo(40*mapScale,45*mapScale);
    ctx.lineTo(40*mapScale,85*mapScale);
    ctx.lineTo(-10*mapScale,95*mapScale);
    ctx.lineTo(-30*mapScale,200*mapScale);
    ctx.lineTo(12*mapScale,260*mapScale);
    ctx.lineTo(150*mapScale,260*mapScale);
    ctx.lineTo(200*mapScale,175*mapScale);
    ctx.lineTo(275*mapScale,205*mapScale);
    ctx.lineTo(390*mapScale,205*mapScale);
    ctx.lineTo(450*mapScale,115*mapScale);
    ctx.lineTo(650*mapScale,115*mapScale);
    ctx.lineTo(750*mapScale,160*mapScale);
    ctx.lineTo(900*mapScale,200*mapScale);
    ctx.lineTo(900*mapScale,30*mapScale);
    ctx.lineTo(700*mapScale,30*mapScale);
    ctx.lineTo(700*mapScale,-60*mapScale);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText("Metropolis", 100*mapScale,100*mapScale);
    ctx.fillText("Metropolis", 550*mapScale,20*mapScale);
    
    // Heimatar 1
    ctx.beginPath()
    ctx.fillStyle = regCitadel;
    ctx.moveTo(150*mapScale,260*mapScale);
    ctx.lineTo(250*mapScale,240*mapScale);
    ctx.lineTo(275*mapScale,205*mapScale);
    ctx.lineTo(390*mapScale,205*mapScale);
    ctx.lineTo(450*mapScale,115*mapScale);
    ctx.lineTo(650*mapScale,115*mapScale);
    ctx.lineTo(750*mapScale,160*mapScale);
    ctx.lineTo(900*mapScale,200*mapScale);
    ctx.lineTo(900*mapScale,340*mapScale);
    ctx.lineTo(280*mapScale,340*mapScale);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText("Heimatar", 500*mapScale, 225*mapScale);
    
    
    // The Forge 1
    ctx.beginPath();
    ctx.fillStyle = regEssence;
    ctx.moveTo(700*mapScale,-60*mapScale);
    ctx.lineTo(700*mapScale,30*mapScale);
    ctx.lineTo(900*mapScale,30*mapScale);
    ctx.lineTo(900*mapScale,-60*mapScale);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText("The Forge", 740*mapScale,-10*mapScale);
    
    // The Bleak Lands
    ctx.beginPath();
    ctx.fillStyle = regRise;
    ctx.moveTo(12*mapScale,260*mapScale);
    ctx.lineTo(40*mapScale,300*mapScale);
    ctx.lineTo(-10*mapScale,320*mapScale);
    ctx.lineTo(-80*mapScale,330*mapScale);
    ctx.lineTo(-80*mapScale,750*mapScale);
    ctx.lineTo(250*mapScale,750*mapScale);
    ctx.lineTo(325*mapScale,630*mapScale);
    ctx.lineTo(425*mapScale,500*mapScale);
    ctx.lineTo(280*mapScale,340*mapScale);
    ctx.lineTo(150*mapScale,260*mapScale);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText("The Bleak Lands", 150*mapScale,440*mapScale);
    
    // Devoid
    ctx.beginPath();
    ctx.fillStyle = regPlacid;
    ctx.moveTo(250*mapScale,750*mapScale);
    ctx.lineTo(325*mapScale,630*mapScale);
    ctx.lineTo(425*mapScale,500*mapScale);
    ctx.lineTo(280*mapScale,340*mapScale);
    ctx.lineTo(900*mapScale,340*mapScale);
    ctx.lineTo(900*mapScale,750*mapScale);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText("Devoid", 700*mapScale,550*mapScale);
    
    
    // Verge Vendor main
    // ctx.beginPath();
    // ctx.fillStyle = regRise; //'blue';
    // ctx.moveTo(-50*mapScale,380*mapScale);
    // ctx.lineTo(90*mapScale,500*mapScale);
    // ctx.lineTo(230*mapScale,550*mapScale);
    // ctx.lineTo(280*mapScale,360*mapScale);
    // ctx.lineTo(410*mapScale,360*mapScale);
    // ctx.lineTo(390*mapScale,480*mapScale);
    // ctx.lineTo(430*mapScale,700*mapScale);
    // ctx.lineTo(-50*mapScale,700*mapScale);
    // ctx.fill();
    // ctx.fillStyle = 'white';
    // // ctx.fillText("Verge Vendor", 70*mapScale,580*mapScale);
    
    // // Verge vendor split
    // ctx.beginPath();
    // ctx.fillStyle = regRise;
    // ctx.moveTo(850*mapScale,240*mapScale);
    // ctx.arcTo(735*mapScale,245*mapScale,730*mapScale,285*mapScale,20*mapScale);
    // //ctx.arcTo(730*mapScale,285*mapScale,785*mapScale,305*mapScale,20*mapScale);
    // //ctx.arcTo(785*mapScale,305*mapScale,850*mapScale,310*mapScale,20*mapScale);
    // ctx.lineTo(785*mapScale,360*mapScale);
    // ctx.lineTo(850*mapScale,310*mapScale);
    // ctx.fill();
    // ctx.fillStyle = 'white';
    // // ctx.fillText("Verge Vendor", 742*mapScale,265*mapScale);
    
    // // Citadel
    // ctx.beginPath();
    // ctx.fillStyle = regRise;
    // ctx.moveTo(850*mapScale,305*mapScale);
    // ctx.arcTo(755*mapScale,300*mapScale,685*mapScale,300*mapScale,30*mapScale);
    // ctx.arcTo(685*mapScale,300*mapScale,655*mapScale,285*mapScale,30*mapScale);
    // ctx.arcTo(655*mapScale,285*mapScale,620*mapScale,285*mapScale,30*mapScale);
    // ctx.arcTo(620*mapScale,285*mapScale,610*mapScale,315*mapScale,30*mapScale);
    // ctx.arcTo(610*mapScale,315*mapScale,490*mapScale,380*mapScale,30*mapScale);
    // ctx.lineTo(490*mapScale,380*mapScale);
    // ctx.lineTo(850*mapScale,700*mapScale);
    // ctx.fill();
    // ctx.fillStyle = 'white';
    // // ctx.fillText("The Citadel", 720*mapScale,460*mapScale);
    
    // // Essence
    // ctx.beginPath();
    // ctx.fillStyle = regRise;
    // ctx.moveTo(400*mapScale,700*mapScale);
    // ctx.arcTo(370*mapScale,475*mapScale,400*mapScale,415*mapScale,30*mapScale);
    // ctx.arcTo(400*mapScale,415*mapScale,400*mapScale,340*mapScale,30*mapScale);
    // ctx.lineTo(400*mapScale,340*mapScale);
    // //ctx.arcTo(400*mapScale,340*mapScale,495*mapScale,360*mapScale,30*mapScale);
    // ctx.arcTo(495*mapScale,360*mapScale,530*mapScale,390*mapScale,30*mapScale);
    // ctx.arcTo(530*mapScale,390*mapScale,585*mapScale,395*mapScale,30*mapScale);
    // ctx.arcTo(585*mapScale,395*mapScale,680*mapScale,440*mapScale,30*mapScale);
    // ctx.arcTo(680*mapScale,440*mapScale,750*mapScale,540*mapScale,30*mapScale);
    // ctx.arcTo(750*mapScale,540*mapScale,850*mapScale,700*mapScale,30*mapScale);
    // ctx.lineTo(850*mapScale,700*mapScale);
    // ctx.fill();
    // ctx.fillStyle = 'white';
    // // ctx.fillText("Essence", 580*mapScale,500*mapScale);
    
    // // Placid
    // ctx.fillStyle = regRise;//'green';
    // ctx.beginPath();
    // ctx.moveTo(-50*mapScale,-100*mapScale);
    // ctx.arcTo(100*mapScale,105*mapScale,180*mapScale,115*mapScale,30*mapScale);
    // ctx.arcTo(180*mapScale,115*mapScale,250*mapScale,220*mapScale,30*mapScale);
    // ctx.arcTo(250*mapScale,220*mapScale,270*mapScale,230*mapScale,30*mapScale);
    // ctx.arcTo(270*mapScale,230*mapScale,290*mapScale,290*mapScale,30*mapScale);
    // ctx.arcTo(290*mapScale,290*mapScale,420*mapScale,300*mapScale,30*mapScale);
    // ctx.arcTo(430*mapScale,310*mapScale,430*mapScale,370*mapScale,30*mapScale);
    // ctx.arcTo(430*mapScale,370*mapScale,290*mapScale,375*mapScale,30*mapScale);
    // ctx.arcTo(290*mapScale,375*mapScale,230*mapScale,560*mapScale,30*mapScale);
    // ctx.arcTo(230*mapScale,560*mapScale,90*mapScale,510*mapScale,20*mapScale);
    // ctx.arcTo(90*mapScale,510*mapScale,-50*mapScale,380*mapScale,30*mapScale);
    // ctx.lineTo(-50*mapScale,380*mapScale);
    // ctx.fill();
    // ctx.fillStyle = 'white';
    // // ctx.fillText("Placid", 190*mapScale,355*mapScale);
    
    // // Lonetrek
    // ctx.beginPath();
    // ctx.fillStyle = regRise;
    // ctx.moveTo(350*mapScale,-100*mapScale);
    // ctx.arcTo(350*mapScale,25*mapScale,375*mapScale,40*mapScale,30*mapScale);
    // ctx.arcTo(375*mapScale,40*mapScale,395*mapScale,65*mapScale,30*mapScale);
    // ctx.arcTo(395*mapScale,65*mapScale,500*mapScale,50*mapScale,30*mapScale);
    // ctx.arcTo(500*mapScale,50*mapScale,585*mapScale,50*mapScale,30*mapScale);
    // //ctx.arcTo(585*mapScale,50*mapScale,655*mapScale,-100*mapScale,30*mapScale);
    // ctx.lineTo(585*mapScale,50*mapScale);
    // ctx.lineTo(655*mapScale,-100*mapScale);
    // ctx.fill();
    // ctx.fillStyle = 'white';
    // // ctx.fillText("Lonetrek", 450*mapScale,30*mapScale);
    
    // // Citadel split
    // ctx.beginPath();
    // ctx.fillStyle = regRise;
    // ctx.moveTo(635*mapScale,-100*mapScale);
    // ctx.arcTo(560*mapScale,70*mapScale,630*mapScale,60*mapScale,30*mapScale);
    // ctx.arcTo(630*mapScale,60*mapScale,680*mapScale,60*mapScale,30*mapScale);
    // ctx.arcTo(680*mapScale,60*mapScale,720*mapScale,95*mapScale,30*mapScale);
    // ctx.arcTo(720*mapScale,95*mapScale,740*mapScale,125*mapScale,30*mapScale);
    // ctx.arcTo(740*mapScale,125*mapScale,800*mapScale,135*mapScale,30*mapScale);
    // ctx.arcTo(800*mapScale,135*mapScale,850*mapScale,130*mapScale,30*mapScale);
    // ctx.lineTo(850*mapScale,130*mapScale);
    // ctx.lineTo(850*mapScale,-100*mapScale);
    // ctx.fill();
    // ctx.fillStyle = 'white';
    // ctx.fillText("The Citadel", 700*mapScale,20*mapScale);
    
    // ctx.beginPath();
    // ctx.fill();
    
    
    /**************************************************/
    /******** Faction Warfare Missions ****************/
    /**************************************************/
    // // -10 x | -9 y
    // ctx.font = '8px Arial'
    
    // // Gallente Missions
    // ctx.fillStyle = '#62c462';
    
    // // Fliet
    // ctx.fillText("1234", 500*mapScale,401*mapScale);
    // // Jufvitte
    // ctx.fillText("1234", 370*mapScale, 394*mapScale);
    // // Costolle
    // ctx.fillText("1234", 308*mapScale, 461*mapScale);
    // // Ouelletta
    // ctx.fillText("1234", 318*mapScale, 411*mapScale);
    // // Villore
    // ctx.fillText("1234", 572*mapScale, 574*mapScale);
    // // Covryn
    // ctx.fillText("1134", 200*mapScale, 501*mapScale);
    // // Uphallant
    // ctx.fillText("1234", 98*mapScale, 451*mapScale);
    // // Ostingele
    // ctx.fillText("1234", 178*mapScale, 391*mapScale);
    // // Intaki
    // ctx.fillText("1234", 310*mapScale, 321*mapScale);
    // // Eugales
    // ctx.fillText("1234", 170*mapScale, 316*mapScale);
    // // Moclinamaud
    // ctx.fillText("1234", 175*mapScale, 281*mapScale);
    // // Orvolle
    // ctx.fillText("11234", 30*mapScale, 334*mapScale);
    // // Esesier
    // ctx.fillText("1234", 138*mapScale, 121*mapScale);
    // // Mercomesier
    // ctx.fillText("1234", 75*mapScale, 191*mapScale);
    
    
    // // Caldari Missions
    // ctx.fillStyle = '#5bc0de';
    
    // // Sujarento
    // ctx.fillText("234", 602*mapScale, 331*mapScale);
    // // Oshaima
    // ctx.fillText("1234", 772*mapScale, 374*mapScale);
    // // Usi
    // ctx.fillText("1234", 777*mapScale, 34*mapScale);
    // // Ishomilken
    // ctx.fillText("11234", 709*mapScale, 41*mapScale);
    // // Hykanima
    // ctx.fillText("1234", 227*mapScale, 41*mapScale);
    // // Eha
    // ctx.fillText("1234", 239*mapScale, 131*mapScale);
    // // Innia
    // ctx.fillText("1234", 308*mapScale, 111*mapScale);
    // // Aivonen
    // ctx.fillText("1234", 298*mapScale, 191*mapScale);
    // // Enaluri
    // ctx.fillText("11223344", 417*mapScale, 191*mapScale);
    // // Onnamon
    // ctx.fillText("1234", 468*mapScale, 84*mapScale);
    // // Rakapas
    // ctx.fillText("1234", 558*mapScale, 236*mapScale);
    // // Nisuwa
    // ctx.fillText("1234", 578*mapScale, 296*mapScale);
    // // Nourvukaiken
    // ctx.fillText("1234", 694*mapScale, 264*mapScale);
    // // Asakai
    // ctx.fillText("1234", 670*mapScale, 121*mapScale);

    
    /**************************************************/
    
    /**/
    
    // // THE DIVIDE
    ctx.strokeStyle = '#db6262';
    ctx.fillStyle = '#222222';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(-80*mapScale,260*mapScale);
    ctx.lineTo(150*mapScale,260*mapScale);
    ctx.lineTo(280*mapScale,340*mapScale);
    ctx.lineTo(900*mapScale,340*mapScale);
    
    ctx.stroke();
});


var updateNode = function(item){
    nodes.update([{id:item.solar_system_id, label:item.name + '\n' + item.contestedPercentage + '%  ' + changeArrow(0)}]);//item.contestedPercentage3HourDelta)}]);
};