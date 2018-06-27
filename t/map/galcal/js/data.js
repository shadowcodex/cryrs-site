
 
 // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 30002756, label: 'Ishomilken', systemName: 'Ishomilken', fixed: true, x: 720*mapScale, y: 50*mapScale,color: colorEnemy},
        {id: 30002757, label: 'Nikkishina', systemName: 'Nikkishina', fixed: true, x: 680*mapScale, y: 40*mapScale, color: colorEnemy},
        {id: 30002758, label: 'Hasama', systemName: 'Hasama', fixed: true, x: 610*mapScale, y: 40*mapScale, color: colorEnemy},
        {id: 30002759, label: 'Uuna', systemName: 'Uuna', fixed: true, x: 740*mapScale, y: 80*mapScale, color: colorEnemy},
        {id: 30002760, label: 'Manjonakko', systemName: 'Manjonakko', fixed: true, x: 760*mapScale, y: 110*mapScale, color: colorEnemy},
        {id: 30002796, label: 'Hysera', systemName: 'Hysera', fixed: true, x: 710*mapScale, y: 400*mapScale, color: colorEnemy},
        {id: 30002806, label: 'Hasmijaala', systemName: 'Hasmijaala', fixed: true, x: 655*mapScale, y: 400*mapScale, color: colorEnemy},
        {id: 30002807, label: 'Nagamanen', systemName: 'Nagamanen', fixed: true, x: 600*mapScale, y: 380*mapScale, color: colorEnemy},
        {id: 30002808, label: 'Oto', systemName: 'Oto', fixed: true, x: 550*mapScale, y: 380*mapScale, color: colorEnemy},
        {id: 30002809, label: 'Sujarento', systemName: 'Sujarento', fixed: true, x: 610*mapScale, y: 340*mapScale, color: colorEnemy},
        {id: 30002810, label: 'Eranakko', systemName: 'Eranakko', fixed: true, x: 710*mapScale, y: 350*mapScale, color: colorEnemy},
        {id: 30002811, label: 'Onatoh', systemName: 'Onatoh', fixed: true, x: 690*mapScale, y: 320*mapScale, color: colorEnemy},
        {id: 30002812, label: 'Tannolen', systemName: 'Tannolen', fixed: true, x: 750*mapScale, y: 320*mapScale, color: colorEnemy},
        {id: 30002813, label: 'Tama', systemName: 'Tama', fixed: true, x: 640*mapScale, y: 300*mapScale, color: {background: colorEnemy,border: '#DB6262'}, borderWidth: 2},
        {id: 30003787, label: 'Agoze', systemName: 'Agoze', group: 'myGroup', fixed: true, x: 290*mapScale, y: 360*mapScale, color: colorEnemy},
        {id: 30003788, label: 'Intaki', systemName: 'Intaki', group: 'myGroup', fixed: true, x: 320*mapScale, y: 330*mapScale, color: colorEnemy},
        {id: 30003789, label: 'Brarel', systemName: 'Brarel', group: 'myGroup', fixed: true, x: 400*mapScale, y: 340*mapScale, color: colorEnemy},
        {id: 30003790, label: 'Vey', systemName: 'Vey', group: 'myGroup', fixed: true, x: 280*mapScale, y: 340*mapScale, color: colorEnemy},
        {id: 30003791, label: 'Annancale', systemName: 'Annancale', group: 'myGroup', fixed: true, x: 340*mapScale, y: 360*mapScale, color: colorEnemy},
        {id: 30003792, label: 'Ostingele', systemName: 'Ostingele', fixed: true, x: 190*mapScale, y: 400*mapScale, color: colorEnemy},
        {id: 30003793, label: 'Harroule', systemName: 'Harroule', fixed: true, x: 120*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30003795, label: 'Covryn', systemName: 'Covryn', fixed: true, x: 210*mapScale, y: 510*mapScale, color: colorEnemy},
        {id: 30003796, label: 'Iges', systemName: 'Iges', fixed: true, x: 120*mapScale, y: 490*mapScale, color: colorEnemy},
        {id: 30003797, label: 'Dastryns', systemName: 'Dastryns', fixed: true, x: 160*mapScale, y: 450*mapScale, color: colorEnemy},
        {id: 30003799, label: 'Uphallant', systemName: 'Uphallant', fixed: true, x: 110*mapScale, y: 460*mapScale, color: colorEnemy},
        {id: 30003825, label: 'Eugales', systemName: 'Eugales', fixed: true, x: 180*mapScale, y: 325*mapScale, color: colorEnemy},
        {id: 30003826, label: 'Frarie', systemName: 'Frarie', fixed: true, x: 220*mapScale, y: 310*mapScale, color: colorEnemy},
        {id: 30003827, label: 'Aubenall', systemName: 'Aubenall', fixed: true, x: 110*mapScale, y: 290*mapScale, color: colorEnemy},
        {id: 30003828, label: 'Moclinamaud', systemName: 'Moclinamaud', fixed: true, x: 190*mapScale, y: 290*mapScale, color: colorEnemy},
        {id: 30003829, label: 'Renarelle', systemName: 'Renarelle', fixed: true, x: 130*mapScale, y: 260*mapScale, color: colorEnemy},
        {id: 30003836, label: 'Vlillirier', systemName: 'Vlillirier', fixed: true, x: 190*mapScale, y: 240*mapScale, color: colorEnemy},
        {id: 30003837, label: 'Aldranette', systemName: 'Aldranette', fixed: true, x: 200*mapScale, y: 210*mapScale, color: colorEnemy},
        {id: 30003838, label: 'Oicx', systemName: 'Oicx', fixed: true, x: 250*mapScale, y: 250*mapScale, color: colorEnemy},
        {id: 30003839, label: 'Evaulon', systemName: 'Evaulon', fixed: true, x: 190*mapScale, y: 190*mapScale, color: colorEnemy},
        {id: 30003840, label: 'Anchauttes', systemName: 'Anchauttes', fixed: true, x: 150*mapScale, y: 180*mapScale, color: colorEnemy},
        {id: 30003841, label: 'Alsavoinon', systemName: 'Alsavoinon', fixed: true, x: 250*mapScale, y: 280*mapScale, color: colorEnemy},
        {id: 30003842, label: 'Esesier', systemName: 'Esesier', fixed: true, x: 150*mapScale, y: 130*mapScale, color: colorEnemy},
        {id: 30003850, label: 'Alparena', systemName: 'Alparena', fixed: true, x: 70*mapScale, y: 230*mapScale, color: colorEnemy},
        {id: 30003851, label: 'Reschard', systemName: 'Reschard', fixed: true, x: 40*mapScale, y: 180*mapScale, color: colorEnemy},
        {id: 30003852, label: 'Arderonne', systemName: 'Arderonne', fixed: true, x: 30*mapScale, y: 150*mapScale, color: colorEnemy},
        {id: 30003853, label: 'Mercomesier', systemName: 'Mercomesier', fixed: true, x: 90*mapScale, y: 200*mapScale, color: colorEnemy},
        {id: 30003854, label: 'Alamel', systemName: 'Alamel', fixed: true, x: 60*mapScale, y: 130*mapScale, color: colorEnemy},
        {id: 30003855, label: 'Mantenault', systemName: 'Mantenault', fixed: true, x: 40*mapScale, y: 100*mapScale, color: colorEnemy},
        {id: 30003856, label: 'Athounon', systemName: 'Athounon', fixed: true, x: 120*mapScale, y: 220*mapScale, color: colorEnemy},
        {id: 30003857, label: 'Odamia', systemName: 'Odamia', fixed: true, x: 90*mapScale, y: 160*mapScale, color: colorEnemy},
        {id: 30004979, label: 'Heydieles', systemName: 'Heydieles', fixed: true, x: 480*mapScale, y: 450*mapScale, color: colorEnemy},
        {id: 30004980, label: 'Fliet', systemName: 'Fliet', fixed: true, x: 510*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30004982, label: 'Indregulle', systemName: 'Indregulle', fixed: true, x: 400*mapScale, y: 475*mapScale, color: colorEnemy},
        {id: 30004984, label: 'Abune', systemName: 'Abune', fixed: true, x: 450*mapScale, y: 370*mapScale, color: colorEnemy},
        {id: 30004985, label: 'Deven', systemName: 'Deven', fixed: true, x: 560*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30004997, label: 'Vifrevaert', systemName: 'Vifrevaert', fixed: true, x: 490*mapScale, y: 540*mapScale, color: colorEnemy},
        {id: 30004999, label: 'Ladistier', systemName: 'Ladistier', fixed: true, x: 470*mapScale, y: 510*mapScale, color: colorEnemy},
        {id: 30005000, label: 'Old Man Star', systemName: 'Old Man Star', fixed: true, x: 460*mapScale, y: 480*mapScale, color: {background: colorEnemy,border: '#DB6262'}, borderWidth: 2},
        {id: 30005295, label: 'Murethand', systemName: 'Murethand', fixed: true, x: 230*mapScale, y: 580*mapScale, color: {background: colorEnemy,border: '#DB6262'}, borderWidth: 2},
        {id: 30005296, label: 'Melmaniel', systemName: 'Melmaniel', fixed: true, x: 280*mapScale, y: 470*mapScale, color: colorEnemy},
        {id: 30005297, label: 'Ouelletta', systemName: 'Ouelletta', fixed: true, x: 330*mapScale, y: 420*mapScale, color: colorEnemy},
        {id: 30005298, label: 'Costolle', systemName: 'Costolle', fixed: true, x: 320*mapScale, y: 470*mapScale, color: colorEnemy},
        {id: 30005299, label: 'Muetralle', systemName: 'Muetralle', fixed: true, x: 320*mapScale, y: 500*mapScale, color: colorEnemy},
        {id: 30005300, label: 'Loes', systemName: 'Loes', fixed: true, x: 310*mapScale, y: 390*mapScale, color: colorEnemy},
        {id: 30005320, label: 'Hevrice', systemName: 'Hevrice', fixed: true, x: 320*mapScale, y: 560*mapScale, color: colorEnemy},
        {id: 30005321, label: 'Jovainnon', systemName: 'Jovainnon', fixed: true, x: 360*mapScale, y: 580*mapScale, color: colorEnemy},
        {id: 30045306, label: 'Hykanima', systemName: 'Hykanima', fixed: true, x: 240*mapScale, y: 50*mapScale, color: colorEnemy},
        {id: 30045307, label: 'Okagaiken', systemName: 'Okagaiken', fixed: true, x: 130*mapScale, y: 50*mapScale, color: colorEnemy},
        {id: 30045308, label: 'Kehjari', systemName: 'Kehjari', fixed: true, x: 240*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045309, label: 'Villasen', systemName: 'Villasen', fixed: true, x: 180*mapScale, y: 50*mapScale, color: colorEnemy},
        {id: 30045310, label: 'Sarenemi', systemName: 'Sarenemi', fixed: true, x: 300*mapScale, y: 30*mapScale, color: colorEnemy},
        {id: 30045311, label: 'Ashitsu', systemName: 'Ashitsu', fixed: true, x: 180*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045312, label: 'Korasen', systemName: 'Korasen', fixed: true, x: 180*mapScale, y: 20*mapScale, color: colorEnemy},
        {id: 30045313, label: 'Ienakkamon', systemName: 'Ienakkamon', fixed: true, x: 130*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045314, label: 'Kinakka', systemName: 'Kinakka', fixed: true, x: 360*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045315, label: 'Raihbaka', systemName: 'Raihbaka', fixed: true, x: 360*mapScale, y: 60*mapScale, color: colorEnemy},
        {id: 30045316, label: 'Innia', systemName: 'Innia', fixed: true, x: 320*mapScale, y: 120*mapScale, color: colorEnemy},
        {id: 30045317, label: 'Iralaja', systemName: 'Iralaja', fixed: true, x: 310*mapScale, y: 50*mapScale, color: colorEnemy},
        {id: 30045318, label: 'Martoh', systemName: 'Martoh', fixed: true, x: 300*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045319, label: 'Eha', systemName: 'Eha', fixed: true, x: 250*mapScale, y: 140*mapScale, color: colorEnemy},
        {id: 30045320, label: 'Pavanakka', systemName: 'Pavanakka', fixed: true, x: 310*mapScale, y: 160*mapScale, color: colorEnemy},
        {id: 30045330, label: 'Okkamon', systemName: 'Okkamon', fixed: true, x: 730*mapScale, y: 200*mapScale, color: colorEnemy},
        {id: 30045331, label: 'Vaaralen', systemName: 'Vaaralen', fixed: true, x: 690*mapScale, y: 100*mapScale, color: colorEnemy},
        {id: 30045332, label: 'Asakai', systemName: 'Asakai', fixed: true, x: 680*mapScale, y: 130*mapScale, color: colorEnemy},
        {id: 30045333, label: 'Prism', systemName: 'Prism', fixed: true, x: 610*mapScale, y: 170*mapScale, color: colorEnemy},
        {id: 30045334, label: 'Mushikegi', systemName: 'Mushikegi', fixed: true, x: 720*mapScale, y: 140*mapScale, color: colorEnemy},
        {id: 30045335, label: 'Teskanen', systemName: 'Teskanen', fixed: true, x: 660*mapScale, y: 80*mapScale, color: colorEnemy},
        {id: 30045336, label: 'Elunala', systemName: 'Elunala', fixed: true, x: 660*mapScale, y: 170*mapScale, color: colorEnemy},
        {id: 30045337, label: 'Ikoskio', systemName: 'Ikoskio', fixed: true, x: 610*mapScale, y: 140*mapScale, color: colorEnemy},
        {id: 30045338, label: 'Hikkoken', systemName: 'Hikkoken', fixed: true, x: 480*mapScale, y: 270*mapScale, color: colorEnemy},
        {id: 30045339, label: 'Enaluri', systemName: 'Enaluri', fixed: true, x: 430*mapScale, y: 200*mapScale, color: colorEnemy},
        {id: 30045340, label: 'Aivonen', systemName: 'Aivonen', fixed: true, x: 310*mapScale, y: 200*mapScale, color: colorEnemy},
        {id: 30045341, label: 'Hallanen', systemName: 'Hallanen', fixed: true, x: 480*mapScale, y: 230*mapScale, color: colorEnemy},
        {id: 30045342, label: 'Akidagi', systemName: 'Akidagi', fixed: true, x: 380*mapScale, y: 210*mapScale, color: colorEnemy},
        {id: 30045343, label: 'Immuri', systemName: 'Immuri', fixed: true, x: 420*mapScale, y: 280*mapScale, color: colorEnemy},
        {id: 30045344, label: 'Nennamaila', systemName: 'Nennamaila', fixed: true, x: 400*mapScale, y: 240*mapScale, color: colorEnemy},
        {id: 30045345, label: 'Hirri', systemName: 'Hirri', fixed: true, x: 590*mapScale, y: 280*mapScale, color: colorEnemy},
        {id: 30045346, label: 'Kedama', systemName: 'Kedama', fixed: true, x: 630*mapScale, y: 270*mapScale, color: colorEnemy},
        {id: 30045347, label: 'Oinasiken', systemName: 'Oinasiken', fixed: true, x: 520*mapScale, y: 300*mapScale, color: colorEnemy},
        {id: 30045348, label: 'Notoras', systemName: 'Notoras', fixed: true, x: 540*mapScale, y: 320*mapScale, color: colorEnemy},
        {id: 30045349, label: 'Rakapas', systemName: 'Rakapas', fixed: true, x: 570*mapScale, y: 245*mapScale, color: colorEnemy},
        {id: 30045350, label: 'Teimo', systemName: 'Teimo', fixed: true, x: 690*mapScale, y: 240*mapScale, color: colorEnemy},
        {id: 30045351, label: 'Iwisoda', systemName: 'Iwisoda', fixed: true, x: 550*mapScale, y: 220*mapScale, color: colorEnemy},
        {id: 30045352, label: 'Nisuwa', systemName: 'Nisuwa', fixed: true, x: 590*mapScale, y: 305*mapScale, color: colorEnemy},
        {id: 30045353, label: 'Pynekastoh', systemName: 'Pynekastoh', fixed: true, x: 530*mapScale, y: 260*mapScale, color: colorEnemy},
        {id: 30045354, label: 'Reitsato', systemName: 'Reitsato', fixed: true, x: 610*mapScale, y: 210*mapScale, color: colorEnemy},
        {id: 30004055, label: 'W-4NUU', systemName: 'W-4NUU', fixed: true, x: 80*mapScale, y: 30*mapScale, color: colorLSNULL},
        {id: 30002039, label: 'RQH-MY', systemName: 'RQH-MY', fixed: true, x: 20*mapScale, y: 80*mapScale, color: colorLSNULL},
        {id: 30003834, label: 'Chardalane', systemName: 'Chardalane', fixed: true, x: 20*mapScale, y: 240*mapScale, color: colorHS},
        {id: 30003832, label: 'Adacyne', systemName: 'Adacyne', fixed: true, x: 20*mapScale, y: 270*mapScale, color: colorHS},
        {id: 30003831, label: 'Osmeden', systemName: 'Osmeden', fixed: true, x: 20*mapScale, y: 310*mapScale, color: colorHS},
        {id: 30003830, label: 'Orvolle', systemName: 'Orvolle', fixed: true, x: 40*mapScale, y: 340*mapScale, color: colorHS},
        {id: 30004975, label: 'Mesybier', systemName: 'Mesybier', fixed: true, x: 20*mapScale, y: 490*mapScale, color: colorHS},
        {id: 30003835, label: 'Maut', systemName: 'Maut', fixed: true, x: 60*mapScale, y: 260*mapScale, color: colorHS},
        {id: 30003833, label: 'Oulley', systemName: 'Oulley', fixed: true, x: 80*mapScale, y: 320*mapScale, color: colorLSNULL},
        {id: 30003268, label: 'MHC-R3', systemName: 'MHC-R3', fixed: true, x: 50*mapScale, y: 410*mapScale, color: colorLSNULL},
        {id: 30003824, label: 'Archavoinet', systemName: 'Archavoinet', fixed: true, x: 120*mapScale, y: 350*mapScale, color: colorHS},
        {id: 30003806, label: 'Pelille', systemName: 'Pelille', fixed: true, x: 120*mapScale, y: 370*mapScale, color: colorHS},
        {id: 30003798, label: 'Slays', systemName: 'Slays', fixed: true, x: 180*mapScale, y: 480*mapScale, color: colorHS},
        {id: 30003802, label: 'Cumemare', systemName: 'Cumemare', fixed: true, x: 210*mapScale, y: 535*mapScale, color: colorHS},
        {id: 30005319, label: 'Raneilles', systemName: 'Raneilles', fixed: true, x: 300*mapScale, y: 580*mapScale, color: colorHS},
        {id: 30005008, label: 'Aeschee', systemName: 'Aeschee', fixed: true, x: 410*mapScale, y: 540*mapScale, color: colorHS},
        {id: 30004995, label: 'Allamotte', systemName: 'Allamotte', fixed: true, x: 510*mapScale, y: 560*mapScale, color: colorHS},
        {id: 30004993, label: 'Villore', systemName: 'Villore', fixed: true, x: 580*mapScale, y: 580*mapScale, color: colorHS},
        {id: 30004046, label: 'F7C-H0', systemName: 'F7C-H0', fixed: true, x: 310*mapScale, y: 280*mapScale, color: colorLSNULL},
        {id: 30005308, label: 'Jufvitte', systemName: 'Jufvitte', fixed: true, x: 380*mapScale, y: 400*mapScale, color: colorHS},
        {id: 30001440, label: 'Karjataimon', systemName: 'Karjataimon', fixed: true, x: 380*mapScale, y: 20*mapScale, color: colorHS},
        {id: 30001435, label: 'Ohbochi', systemName: 'Ohbochi', fixed: true, x: 410*mapScale, y: 50*mapScale, color: colorHS},
        {id: 30045324, label: 'Onnamon', systemName: 'Onnamon', fixed: true, x: 480*mapScale, y: 90*mapScale, color: colorHS},
        {id: 30045325, label: 'Rohamaa', systemName: 'Rohamaa', fixed: true, x: 420*mapScale, y: 110*mapScale, color: colorHS},
        {id: 30045329, label: 'Ichoriya', systemName: 'Ichoriya', fixed: true, x: 410*mapScale, y: 180*mapScale, color: colorHS},
        {id: 30045328, label: 'Ahtila', systemName: 'Ahtila', fixed: true, x: 480*mapScale, y: 170*mapScale, color: colorHS},
        {id: 30045327, label: 'Tsuruma', systemName: 'Tsuruma', fixed: true, x: 510*mapScale, y: 70*mapScale, color: colorHS},
        {id: 30045323, label: 'Astoh', systemName: 'Astoh', fixed: true, x: 550*mapScale, y: 90*mapScale, color: colorHS},
        {id: 30045326, label: 'Uuhulanen', systemName: 'Uuhulanen', fixed: true, x: 510*mapScale, y: 110*mapScale, color: colorHS},
        {id: 30045322, label: 'Samanuni', systemName: 'Samanuni', fixed: true, x: 540*mapScale, y: 150*mapScale, color: colorHS},
        {id: 30001388, label: 'Mara', systemName: 'Mara', fixed: true, x: 550*mapScale, y: 20*mapScale, color: colorHS},
        {id: 30002755, label: 'Usi', systemName: 'Usi', fixed: true, x: 780*mapScale, y: 40*mapScale, color: colorHS},
        {id: 30001376, label: 'Nourvukaiken', systemName: 'Nourvukaiken', fixed: true, x: 710*mapScale, y: 270*mapScale, color: colorHS},
        {id: 30005334, label: 'Tierijev', systemName: 'Tierijev', fixed: true, x: 780*mapScale, y: 280*mapScale, color: colorHS},
        {id: 30002795, label: 'Oshaima', systemName: 'Oshaima', fixed: true, x: 780*mapScale, y: 380*mapScale, color: colorHS},
        {id: 30002799, label: 'Oisio', systemName: 'Oisio', fixed: true, x: 780*mapScale, y: 420*mapScale, color: colorHS},
        {id: 30004981, label: 'Actee', systemName: 'Actee', fixed: true, x: 540*mapScale, y: 450*mapScale, color: colorHS},
        {id: 30004983, label: 'Amane', systemName: 'Amane', fixed: true, x: 600*mapScale, y: 450*mapScale, color: colorHS},
        {id: 30004986, label: 'Estaunitte', systemName: 'Estaunitte', fixed: true, x: 640*mapScale, y: 460*mapScale, color: colorLSNULL},
        {id: 30004977, label: 'Yvangier', systemName: 'Yvangier', fixed: true, x: 530*mapScale, y: 500*mapScale, color: colorLSNULL},
        {id: 30003794, label: 'Stacmon', systemName: 'Stacmon', fixed: true, x: 210*mapScale, y: 450*mapScale, color: colorHS},
        {id: 30003800, label: 'Alperaute', systemName: 'Alperaute', fixed: true, x: 180*mapScale, y: 370*mapScale, color: colorHS},
        {id: 30045321, label: 'Uchomida', systemName: 'Uchomida', fixed: true, x: 410*mapScale, y: 140*mapScale, color: colorHS},
    ]);

    
    // create an array with edges
    var edges = new vis.DataSet([
       //W-4NUU -> Okagaiken
       {from: 30004055, to: 30045307, color: {color: '#FFFFFF'}},
       //Okagaiken -> Ienakkamon, Villasen
       {from: 30045307, to: 30045313, color: {color: '#FFFFFF'}},
       {from: 30045307, to: 30045309, color: {color: '#FFFFFF'}},
       //Villasen -> Korasen, Hykanima, Kehjari
       {from: 30045309, to: 30045312, color: {color: '#FFFFFF'}},
       {from: 30045309, to: 30045306, color: {color: '#FFFFFF'}},
       {from: 30045309, to: 30045308, color: {color: '#FFFFFF'}},
       //Ienakkamon -> Ashitsu
       {from: 30045313, to: 30045311, color: {color: '#FFFFFF'}},
       //Ashitsu -> Hykanima, Kehjari
       {from: 30045311, to: 30045306, color: {color: '#FFFFFF'}},
       {from: 30045311, to: 30045308, color: {color: '#FFFFFF'}},
       //Hykanima -> Sarenemi
       {from: 30045306, to: 30045310, color: {color: '#FFFFFF'}},
       //Sarenemi -> Karjataimon
       {from: 30045310, to: 30001440, color: {color: '#FFFFFF'}},
       //Kehjari -> Martoh
       {from: 30045308, to: 30045318, color: {color: '#FFFFFF'}},
       //Martoh -> Iralaja, kinakka, Innia, Eha
       {from: 30045318, to: 30045317, color: {color: '#FFFFFF'}},
       {from: 30045318, to: 30045314, color: {color: '#FFFFFF'}},
       {from: 30045318, to: 30045316, color: {color: '#FFFFFF'}},
       {from: 30045318, to: 30045319, color: {color: '#FFFFFF'}},
       //Eha -> Oicx
       {from: 30045319, to: 30003838, color: {color: '#FFFFFF'}},
       //Iralaja -> Raihbaka
       {from: 30045317, to: 30045315, color: {color: '#FFFFFF'}},
       //Raihbaka -> Ohbochi, Kinakka
       {from: 30045315, to: 30001435, color: {color: '#FFFFFF'}},
       {from: 30045315, to: 30045314, color: {color: '#FFFFFF'}},
       //Kinakka -> Onnamon, Innia
       {from: 30045314, to: 30045324, color: {color: '#FFFFFF'}},
       {from: 30045314, to: 30045316, color: {color: '#FFFFFF'}},
       //Innia -> Eha, Pavanakka
       {from: 30045316, to: 30045319, color: {color: '#FFFFFF'}},
       {from: 30045316, to: 30045320, color: {color: '#FFFFFF'}},
       //Pavanakka -> Aivonen
       {from: 30045320, to: 30045340, color: {color: '#FFFFFF'}},
       //Aivonen -> Akidagi
       {from: 30045340, to: 30045342, color: {color: '#FFFFFF'}},
       //
       //Onnamon -> Tsuruma, Uuhulanen, Ahtila, Rohamaa
       {from: 30045324, to: 30045327, color: {color: '#FFFFFF'}},
       {from: 30045324, to: 30045326, color: {color: '#FFFFFF'}},
       {from: 30045324, to: 30045328, color: {color: '#FFFFFF'}},
       {from: 30045324, to: 30045325, color: {color: '#FFFFFF'}},
       //Tsuruma -> Astoh
       {from: 30045327, to: 30045323, color: {color: '#FFFFFF'}},
       //Astoh -> Uuhulanen
       {from: 30045323, to: 30045326, color: {color: '#FFFFFF'}},
       //Uuhulanen -> Samanuni
       {from: 30045326, to: 30045322, color: {color: '#FFFFFF'}},
       //Samanuni -> Ikoskio, Ahtila, Uchomida
       {from: 30045322, to: 30045337, color: {color: '#FFFFFF'}},
       {from: 30045322, to: 30045328, color: {color: '#FFFFFF'}},
       {from: 30045322, to: 30045321, color: {color: '#FFFFFF'}},
       //Ahtila -> Ichoriya
       {from: 30045328, to: 30045329, color: {color: '#FFFFFF'}},
       //Rohamaa -> Uchomida
       {from: 30045325, to: 30045321, color: {color: '#FFFFFF'}},
       //Uchomida -> Ichoriya
       {from: 30045321, to: 30045329, color: {color: '#FFFFFF'}},
       //Ichoriya -> Akidagi
       {from: 30045329, to: 30045342, color: {color: '#FFFFFF'}},
       //
       //Ikoskio -> Asakai, Prism
       {from: 30045337, to: 30045332, color: {color: '#FFFFFF'}},
       {from: 30045337, to: 30045333, color: {color: '#FFFFFF'}},
       //Prism -> Asakai, Elunala
       {from: 30045333, to: 30045332, color: {color: '#FFFFFF'}},
       {from: 30045333, to: 30045336, color: {color: '#FFFFFF'}},
       //Elunala -> Asakai
       {from: 30045336, to: 30045332, color: {color: '#FFFFFF'}},
       //Asakai -> Vaaralen, Mushikegi, Okkamon
       {from: 30045332, to: 30045331, color: {color: '#FFFFFF'}},
       {from: 30045332, to: 30045334, color: {color: '#FFFFFF'}},
       {from: 30045332, to: 30045330, color: {color: '#FFFFFF'}},
       //Vaaralen -> Teskanen, Mushikegi
       {from: 30045331, to: 30045335, color: {color: '#FFFFFF'}},
       {from: 30045331, to: 30045334, color: {color: '#FFFFFF'}},
       //Mushikegi -> Manjonakko, Okkamon
       {from: 30045334, to: 30002760, color: {color: '#FFFFFF'}},
       {from: 30045334, to: 30045330, color: {color: '#FFFFFF'}},
       //Manjonakko -> Uuna
       {from: 30002760, to: 30002759, color: {color: '#FFFFFF'}},
       //Uuna -> Ishomilken
       {from: 30002759, to: 30002756, color: {color: '#FFFFFF'}},
       //Ishomilken -> Usi, Nikkishina
       {from: 30002756, to: 30002755, color: {color: '#FFFFFF'}},
       {from: 30002756, to: 30002757, color: {color: '#FFFFFF'}},
       //Nikkishina -> Hasama
       {from: 30002757, to: 30002758, color: {color: '#FFFFFF'}},
       //Hasama -> Mara
       {from: 30002758, to: 30001388, color: {color: '#FFFFFF'}},
       //Okkamon -> Reitsato
       {from: 30045330, to: 30045354, color: {color: '#FFFFFF'}},
       //
       //Reitsato -> Rakapas, Kedama
       {from: 30045354, to: 30045349, color: {color: '#FFFFFF'}},
       {from: 30045354, to: 30045346, color: {color: '#FFFFFF'}},
       //Rakapas -> Iwisoda, Pynekastoh
       {from: 30045349, to: 30045351, color: {color: '#FFFFFF'}},
       {from: 30045349, to: 30045353, color: {color: '#FFFFFF'}},
       //Kedama -> Teimo, Tama, Nisuwa, Hirri
       {from: 30045346, to: 30045350, color: {color: '#FFFFFF'}},
       {from: 30045346, to: 30045352, color: {color: '#FFFFFF'}},
       {from: 30045346, to: 30045345, color: {color: '#FFFFFF'}},
       //Tama -> Nourvukaiken, Sujarento, Kedama
       {from: 30002813, to: 30001376, color: {color: '#FFFFFF'}},
       {from: 30002813, to: 30002809, color: {color: '#FFFFFF'}},
       {from: 30002813, to: 30045346, color: {color: '#FFFFFF'}},
       //Nisuwa -> Hirri, Notoras, Oinasiken
       {from: 30045352, to: 30045345, color: {color: '#FFFFFF'}},
       {from: 30045352, to: 30045348, color: {color: '#FFFFFF'}},
       {from: 30045352, to: 30045347, color: {color: '#FFFFFF'}},
       //Hirri -> Pynekastoh
       {from: 30045345, to: 30045353, color: {color: '#FFFFFF'}},
       //Pynekastoh -> Hikkoken, Oinasiken
       {from: 30045353, to: 30045338, color: {color: '#FFFFFF'}},
       {from: 30045353, to: 30045347, color: {color: '#FFFFFF'}},
       //
       //Sujarento -> Onatoh, Eranakko, Nagamanen
       {from: 30002809, to: 30002811, color: {color: '#FFFFFF'}},
       {from: 30002809, to: 30002810, color: {color: '#FFFFFF'}},
       {from: 30002809, to: 30002807, color: {color: '#FFFFFF'}},
       //Onatoh -> Tannolen, Eranakko
       {from: 30002811, to: 30002812, color: {color: '#FFFFFF'}},
       {from: 30002811, to: 30002810, color: {color: '#FFFFFF'}},
       //Tannolen -> Tierijev
       {from: 30002812, to: 30005334, color: {color: '#FFFFFF'}},
       //
       //Nagamanen -> Oto, Hasmijaala, Deven
       {from: 30002807, to: 30002808, color: {color: '#FFFFFF'}},
       {from: 30002807, to: 30002806, color: {color: '#FFFFFF'}},
       {from: 30002807, to: 30004985, color: {color: '#FFFFFF'}},
       //Hasmijaala -> Hysera
       {from: 30002806, to: 30002796, color: {color: '#FFFFFF'}},
       //Hysera -> Oshaima, Oisio
       {from: 30002796, to: 30002795, color: {color: '#FFFFFF'}},
       {from: 30002796, to: 30002799, color: {color: '#FFFFFF'}},
       //Oshaima -> Oisio
       {from: 30002795, to: 30002799, color: {color: '#FFFFFF'}},
       //
       //Hikkoken -> Immuri, Nennamaila, Hallanen
       {from: 30045338, to: 30045343, color: {color: '#FFFFFF'}},
       {from: 30045338, to: 30045344, color: {color: '#FFFFFF'}},
       {from: 30045338, to: 30045341, color: {color: '#FFFFFF'}},
       //Hallanen -> Enaluri, Akidagi, Nennamaila
       {from: 30045341, to: 30045339, color: {color: '#FFFFFF'}},
       //{from: 30045341, to: 30045342, color: {color: '#FFFFFF'}},
       //{from: 30045341, to: 30045344, color: {color: '#FFFFFF'}},
       //Enaluri -> Akidagi
       {from: 30045339, to: 30045342, color: {color: '#FFFFFF'}},
       {from: 30045339, to: 30045344, color: {color: '#FFFFFF'}},
       //Immuri -> Nennamaila
       {from: 30045343, to: 30045344, color: {color: '#FFFFFF'}},
       //Nennamaila -> Akidagi, Aldranette
       {from: 30045344, to: 30045342, color: {color: '#FFFFFF'}},
       {from: 30045344, to: 30003837, color: {color: '#FFFFFF'}},
       //
       //Oinasiken -> Abune
       {from: 30045347, to: 30004984, color: {color: '#FFFFFF'}},
       //Abune -> Heydieles
       {from: 30004984, to: 30004979, color: {color: '#FFFFFF'}},
       //Heydieles -> Fliet, Actee, Yvangier, Indregulle
       {from: 30004979, to: 30004980, color: {color: '#FFFFFF'}},
       {from: 30004979, to: 30004981, color: {color: '#FFFFFF'}},
       {from: 30004979, to: 30004977, color: {color: '#FFFFFF'}},
       
       {from: 30004979, to: 30004982, color: {color: '#FFFFFF'}},
       //Fliet -> Deven, Actee
       {from: 30004980, to: 30004985, color: {color: '#FFFFFF'}},
       {from: 30004980, to: 30004981, color: {color: '#FFFFFF'}},
       //Actee -> Amane
       {from: 30004981, to: 30004983, color: {color: '#FFFFFF'}},
       //Amane -> Estaunitte
       {from: 30004983, to: 30004986, color: {color: '#FFFFFF'}},
       //
       //OMS -> Villore, Ladistier, Heydieles
       {from: 30005000, to: 30004993, color: {color: '#FFFFFF'}},
       {from: 30005000, to: 30004999, color: {color: '#FFFFFF'}},
       {from: 30005000, to: 30004979, color: {color: '#FFFFFF'}},
       //Villore -> Allamotte
       {from: 30004993, to: 30004995, color: {color: '#FFFFFF'}},
       //Allamotte -> Vifrevaert
       {from: 30004995, to: 30004997, color: {color: '#FFFFFF'}},
       //Vifrevaert -> Ladistier
       {from: 30004997, to: 30004999, color: {color: '#FFFFFF'}},
       //Ladistier -> Aeschee
       {from: 30004999, to: 30005008, color: {color: '#FFFFFF'}},
       //
       //Aeschee -> Jovainnon
       {from: 30005008, to: 30005321, color: {color: '#FFFFFF'}},
       //Jovainnon -> Hevrice
       {from: 30005321, to: 30005320, color: {color: '#FFFFFF'}},
       //Hevrice -> Raneilles, Muetralle
       {from: 30005320, to: 30005319, color: {color: '#FFFFFF'}},
       {from: 30005320, to: 30005299, color: {color: '#FFFFFF'}},
       //Muetralle -> Costolle
       {from: 30005299, to: 30005298, color: {color: '#FFFFFF'}},
       {from: 30005295, to: 30004982, color: {color: '#FFFFFF'}},
       //Costolle -> Melmaniel
       {from: 30005298, to: 30005296, color: {color: '#FFFFFF'}},
       //
       //Indregulle -> Murethand
       //
       //Murethand -> Mesybier, Melmaniel
       {from: 30005295, to: 30004975, color: {color: '#FFFFFF'}},
       {from: 30005295, to: 30005296, color: {color: '#FFFFFF'}},
       {from: 30005295, to: 30004975, color: {color: '#FFFFFF'}},
       //Melmaniel -> Ouelletta
       {from: 30005296, to: 30005297, color: {color: '#FFFFFF'}},
       //Ouelletta -> Jufvitte, Loes
       {from: 30005297, to: 30005308, color: {color: '#FFFFFF'}},
       {from: 30005297, to: 30005300, color: {color: '#FFFFFF'}},
       //Loes -> Agoze
       {from: 30005300, to: 30003787, color: {color: '#FFFFFF'}},
       //Agoze -> Annancale, Intaki, Vey, Ostingele
       {from: 30003787, to: 30003791, color: {color: '#FFFFFF'}},
       {from: 30003787, to: 30003788, color: {color: '#FFFFFF'}},
       {from: 30003787, to: 30003790, color: {color: '#FFFFFF'}},
       {from: 30003787, to: 30003792, color: {color: '#FFFFFF'}},
       //Annancale -> Brarel
       {from: 30003791, to: 30003789, color: {color: '#FFFFFF'}},
       //Brarel -> Intaki
       {from: 30003789, to: 30003788, color: {color: '#FFFFFF'}},
       //Intaki -> Vey
       {from: 30003788, to: 30003790, color: {color: '#FFFFFF'}},
       //Vey -> Frarie
       {from: 30003790, to: 30003826, color: {color: '#FFFFFF'}},
       //
       //Ostingele -> Alperaute, Pelille, Harroule, Dastryns, Stacmon
       {from: 30003792, to: 30003800, color: {color: '#FFFFFF'}},
       {from: 30003792, to: 30003806, color: {color: '#FFFFFF'}},
       {from: 30003792, to: 30003793, color: {color: '#FFFFFF'}},
       {from: 30003792, to: 30003797, color: {color: '#FFFFFF'}},
       {from: 30003792, to: 30003794, color: {color: '#FFFFFF'}},
       //Harroule -> MHC-R3
       {from: 30003793, to: 30003268, color: {color: '#FFFFFF'}},
       //Dastryns -> Uphallant, Iges, Stacmon
       {from: 30003797, to: 30003799, color: {color: '#FFFFFF'}},
       {from: 30003797, to: 30003796, color: {color: '#FFFFFF'}},
       {from: 30003797, to: 30003794, color: {color: '#FFFFFF'}},
       //Uphallant -> Iges
       {from: 30003799, to: 30003796, color: {color: '#FFFFFF'}},
       //Iges -> Slays, Covryn
       {from: 30003796, to: 30003798, color: {color: '#FFFFFF'}},
       {from: 30003796, to: 30003795, color: {color: '#FFFFFF'}},
       //Slays -> Stacmon
       {from: 30003798, to: 30003794, color: {color: '#FFFFFF'}},
       //Stacmon -> Covryn
       {from: 30003794, to: 30003795, color: {color: '#FFFFFF'}},
       //Covryn -> Cumemare
       {from: 30003795, to: 30003802, color: {color: '#FFFFFF'}},
       //
       //Oicx -> Vlillirier
       {from: 30003838, to: 30003836, color: {color: '#FFFFFF'}},
       //Vlillirier -> Alsavoinon, Renarelle, Aldranette
       {from: 30003836, to: 30003841, color: {color: '#FFFFFF'}},
       {from: 30003836, to: 30003829, color: {color: '#FFFFFF'}},
       {from: 30003836, to: 30003837, color: {color: '#FFFFFF'}},
       //Alsavoinon -> F7C-H0
       {from: 30003841, to: 30004046, color: {color: '#FFFFFF'}},
       //Aldranette -> Evaulon
       {from: 30003837, to: 30003839, color: {color: '#FFFFFF'}},
       //Evaulon -> Anchauttes
       {from: 30003839, to: 30003840, color: {color: '#FFFFFF'}},
       //Anchauttes -> Esesier, Odamia
       {from: 30003840, to: 30003842, color: {color: '#FFFFFF'}},
       {from: 30003840, to: 30003857, color: {color: '#FFFFFF'}},
       //Odamia -> Arderonne, Alamel
       {from: 30003857, to: 30003852, color: {color: '#FFFFFF'}},
       {from: 30003857, to: 30003854, color: {color: '#FFFFFF'}},
       //Alamel -> Arderonne, Mantenault
       {from: 30003854, to: 30003852, color: {color: '#FFFFFF'}},
       {from: 30003854, to: 30003855, color: {color: '#FFFFFF'}},
       //Mantenault -> RQH-MY
       {from: 30003855, to: 30002039, color: {color: '#FFFFFF'}},
       //Arderonne -> Reschard
       {from: 30003852, to: 30003851, color: {color: '#FFFFFF'}},
       //Reschard -> Mercomesier, Alparena
       {from: 30003851, to: 30003853, color: {color: '#FFFFFF'}},
       {from: 30003851, to: 30003850, color: {color: '#FFFFFF'}},
       //Mercomesier -> Athounon
       {from: 30003853, to: 30003856, color: {color: '#FFFFFF'}},
       //Alparena -> Maut
       {from: 30003850, to: 30003835, color: {color: '#FFFFFF'}},
       //Maut -> Adacyne, Osmeden
       {from: 30003835, to: 30003832, color: {color: '#FFFFFF'}},
       {from: 30003835, to: 30003831, color: {color: '#FFFFFF'}},
       //Adacyne -> Chardalane, Osmeden
       {from: 30003832, to: 30003834, color: {color: '#FFFFFF'}},
       {from: 30003832, to: 30003831, color: {color: '#FFFFFF'}},
       //Osmeden -> Orvolle
       {from: 30003831, to: 30003830, color: {color: '#FFFFFF'}},
       //
       //Renarelle -> Moclinamaud, Aubenall
       {from: 30003829, to: 30003828, color: {color: '#FFFFFF'}},
       {from: 30003829, to: 30003827, color: {color: '#FFFFFF'}},
       //Aubenall -> Oulley, Archavoinet, Eugales
       {from: 30003827, to: 30003833, color: {color: '#FFFFFF'}},
       {from: 30003827, to: 30003824, color: {color: '#FFFFFF'}},
       {from: 30003827, to: 30003825, color: {color: '#FFFFFF'}},
       //Moclinamaud -> Frarie, Eugales
       {from: 30003828, to: 30003826, color: {color: '#FFFFFF'}},
       {from: 30003828, to: 30003825, color: {color: '#FFFFFF'}},
       //Eugales -> Archavoinet, Frarie
       {from: 30003825, to: 30003824, color: {color: '#FFFFFF'}},
       {from: 30003825, to: 30003826, color: {color: '#FFFFFF'}},
       //Oulley -> Orvolle
       {from: 30003833, to: 30003830, color: {color: '#FFFFFF'}},
       //Orvolle -> Mesybier
       {from: 30003830, to: 30004975, color: {color: '#FFFFFF'}},
       //Mesybier -> Murethand
        //
    ]);
    
    var groups = {
        
    };
    

    var systems = [
                30002756,
                30002757,
                30002758,
                30002759,
                30002760,
                30002796,
                30002806,
                30002807,
                30002808,
                30002809,
                30002810,
                30002811,
                30002812,
                30002813,
                30003787,
                30003788,
                30003789,
                30003790,
                30003791,
                30003792,
                30003793,
                30003795,
                30003796,
                30003797,
                30003799,
                30003825,
                30003826,
                30003827,
                30003828,
                30003829,
                30003836,
                30003837,
                30003838,
                30003839,
                30003840,
                30003841,
                30003842,
                30003850,
                30003851,
                30003852,
                30003853,
                30003854,
                30003855,
                30003856,
                30003857,
                30004979,
                30004980,
                30004982,
                30004984,
                30004985,
                30004997,
                30004999,
                30005000,
                30005295,
                30005296,
                30005297,
                30005298,
                30005299,
                30005300,
                30005320,
                30005321,
                30045306,
                30045307,
                30045308,
                30045309,
                30045310,
                30045311,
                30045312,
                30045313,
                30045314,
                30045315,
                30045316,
                30045317,
                30045318,
                30045319,
                30045320,
                30045330,
                30045331,
                30045332,
                30045333,
                30045334,
                30045335,
                30045336,
                30045337,
                30045338,
                30045339,
                30045340,
                30045341,
                30045342,
                30045343,
                30045344,
                30045345,
                30045346,
                30045347,
                30045348,
                30045349,
                30045350,
                30045351,
                30045352,
                30045353,
                30045354
    ];
    
