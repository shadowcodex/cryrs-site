
 
 // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 30002756, label: 'Ishomilken', fixed: true, x: 720*mapScale, y: 50*mapScale,color: colorEnemy},
        {id: 30002757, label: 'Nikkishina', fixed: true, x: 680*mapScale, y: 40*mapScale, color: colorEnemy},
        {id: 30002758, label: 'Hasama', fixed: true, x: 610*mapScale, y: 40*mapScale, color: colorEnemy},
        {id: 30002759, label: 'Uuna', fixed: true, x: 740*mapScale, y: 80*mapScale, color: colorEnemy},
        {id: 30002760, label: 'Manjonakko', fixed: true, x: 760*mapScale, y: 110*mapScale, color: colorEnemy},
        {id: 30002796, label: 'Hysera', fixed: true, x: 710*mapScale, y: 400*mapScale, color: colorEnemy},
        {id: 30002806, label: 'Hasmijaala', fixed: true, x: 655*mapScale, y: 400*mapScale, color: colorEnemy},
        {id: 30002807, label: 'Nagamanen', fixed: true, x: 600*mapScale, y: 380*mapScale, color: colorEnemy},
        {id: 30002808, label: 'Oto', fixed: true, x: 550*mapScale, y: 380*mapScale, color: colorEnemy},
        {id: 30002809, label: 'Sujarento', fixed: true, x: 610*mapScale, y: 340*mapScale, color: colorEnemy},
        {id: 30002810, label: 'Eranakko', fixed: true, x: 710*mapScale, y: 350*mapScale, color: colorEnemy},
        {id: 30002811, label: 'Onatoh', fixed: true, x: 690*mapScale, y: 320*mapScale, color: colorEnemy},
        {id: 30002812, label: 'Tannolen', fixed: true, x: 750*mapScale, y: 320*mapScale, color: colorEnemy},
        {id: 30002813, label: 'Tama', fixed: true, x: 640*mapScale, y: 300*mapScale, color: {background: colorEnemy,border: '#DB6262'}, borderWidth: 2},
        {id: 30003787, label: 'Agoze', group: 'myGroup', fixed: true, x: 290*mapScale, y: 360*mapScale, color: colorEnemy},
        {id: 30003788, label: 'Intaki', group: 'myGroup', fixed: true, x: 320*mapScale, y: 330*mapScale, color: colorEnemy},
        {id: 30003789, label: 'Brarel', group: 'myGroup', fixed: true, x: 400*mapScale, y: 340*mapScale, color: colorEnemy},
        {id: 30003790, label: 'Vey', group: 'myGroup', fixed: true, x: 280*mapScale, y: 340*mapScale, color: colorEnemy},
        {id: 30003791, label: 'Annancale', group: 'myGroup', fixed: true, x: 340*mapScale, y: 360*mapScale, color: colorEnemy},
        {id: 30003792, label: 'Ostingele', fixed: true, x: 190*mapScale, y: 400*mapScale, color: colorEnemy},
        {id: 30003793, label: 'Harroule', fixed: true, x: 120*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30003795, label: 'Covryn', fixed: true, x: 210*mapScale, y: 510*mapScale, color: colorEnemy},
        {id: 30003796, label: 'Iges', fixed: true, x: 120*mapScale, y: 490*mapScale, color: colorEnemy},
        {id: 30003797, label: 'Dastryns', fixed: true, x: 160*mapScale, y: 450*mapScale, color: colorEnemy},
        {id: 30003799, label: 'Uphallant', fixed: true, x: 110*mapScale, y: 460*mapScale, color: colorEnemy},
        {id: 30003825, label: 'Eugales', fixed: true, x: 180*mapScale, y: 325*mapScale, color: colorEnemy},
        {id: 30003826, label: 'Frarie', fixed: true, x: 220*mapScale, y: 310*mapScale, color: colorEnemy},
        {id: 30003827, label: 'Aubenall', fixed: true, x: 110*mapScale, y: 290*mapScale, color: colorEnemy},
        {id: 30003828, label: 'Moclinamaud', fixed: true, x: 190*mapScale, y: 290*mapScale, color: colorEnemy},
        {id: 30003829, label: 'Renarelle', fixed: true, x: 130*mapScale, y: 260*mapScale, color: colorEnemy},
        {id: 30003836, label: 'Vlillirier', fixed: true, x: 190*mapScale, y: 240*mapScale, color: colorEnemy},
        {id: 30003837, label: 'Aldranette', fixed: true, x: 200*mapScale, y: 210*mapScale, color: colorEnemy},
        {id: 30003838, label: 'Oicx', fixed: true, x: 250*mapScale, y: 250*mapScale, color: colorEnemy},
        {id: 30003839, label: 'Evaulon', fixed: true, x: 190*mapScale, y: 190*mapScale, color: colorEnemy},
        {id: 30003840, label: 'Anchauttes', fixed: true, x: 150*mapScale, y: 180*mapScale, color: colorEnemy},
        {id: 30003841, label: 'Alsavoinon', fixed: true, x: 250*mapScale, y: 280*mapScale, color: colorEnemy},
        {id: 30003842, label: 'Esesier', fixed: true, x: 150*mapScale, y: 130*mapScale, color: colorEnemy},
        {id: 30003850, label: 'Alparena', fixed: true, x: 70*mapScale, y: 230*mapScale, color: colorEnemy},
        {id: 30003851, label: 'Reschard', fixed: true, x: 40*mapScale, y: 180*mapScale, color: colorEnemy},
        {id: 30003852, label: 'Arderonne', fixed: true, x: 30*mapScale, y: 150*mapScale, color: colorEnemy},
        {id: 30003853, label: 'Mercomesier', fixed: true, x: 90*mapScale, y: 200*mapScale, color: colorEnemy},
        {id: 30003854, label: 'Alamel', fixed: true, x: 60*mapScale, y: 130*mapScale, color: colorEnemy},
        {id: 30003855, label: 'Mantenault', fixed: true, x: 40*mapScale, y: 100*mapScale, color: colorEnemy},
        {id: 30003856, label: 'Athounon', fixed: true, x: 120*mapScale, y: 220*mapScale, color: colorEnemy},
        {id: 30003857, label: 'Odamia', fixed: true, x: 90*mapScale, y: 160*mapScale, color: colorEnemy},
        {id: 30004979, label: 'Heydieles', fixed: true, x: 480*mapScale, y: 450*mapScale, color: colorEnemy},
        {id: 30004980, label: 'Fliet', fixed: true, x: 510*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30004982, label: 'Indregulle', fixed: true, x: 400*mapScale, y: 475*mapScale, color: colorEnemy},
        {id: 30004984, label: 'Abune', fixed: true, x: 450*mapScale, y: 370*mapScale, color: colorEnemy},
        {id: 30004985, label: 'Deven', fixed: true, x: 560*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30004997, label: 'Vifrevaert', fixed: true, x: 490*mapScale, y: 540*mapScale, color: colorEnemy},
        {id: 30004999, label: 'Ladistier', fixed: true, x: 470*mapScale, y: 510*mapScale, color: colorEnemy},
        {id: 30005000, label: 'Old Man Star', fixed: true, x: 460*mapScale, y: 480*mapScale, color: {background: colorEnemy,border: '#DB6262'}, borderWidth: 2},
        {id: 30005295, label: 'Murethand', fixed: true, x: 230*mapScale, y: 580*mapScale, color: {background: colorEnemy,border: '#DB6262'}, borderWidth: 2},
        {id: 30005296, label: 'Melmaniel', fixed: true, x: 280*mapScale, y: 470*mapScale, color: colorEnemy},
        {id: 30005297, label: 'Ouelletta', fixed: true, x: 330*mapScale, y: 420*mapScale, color: colorEnemy},
        {id: 30005298, label: 'Costolle', fixed: true, x: 320*mapScale, y: 470*mapScale, color: colorEnemy},
        {id: 30005299, label: 'Muetralle', fixed: true, x: 320*mapScale, y: 500*mapScale, color: colorEnemy},
        {id: 30005300, label: 'Loes', fixed: true, x: 310*mapScale, y: 390*mapScale, color: colorEnemy},
        {id: 30005320, label: 'Hevrice', fixed: true, x: 320*mapScale, y: 560*mapScale, color: colorEnemy},
        {id: 30005321, label: 'Jovainnon', fixed: true, x: 360*mapScale, y: 580*mapScale, color: colorEnemy},
        {id: 30045306, label: 'Hykanima', fixed: true, x: 240*mapScale, y: 50*mapScale, color: colorEnemy},
        {id: 30045307, label: 'Okagaiken', fixed: true, x: 130*mapScale, y: 50*mapScale, color: colorEnemy},
        {id: 30045308, label: 'Kehjari', fixed: true, x: 240*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045309, label: 'Villasen', fixed: true, x: 180*mapScale, y: 50*mapScale, color: colorEnemy},
        {id: 30045310, label: 'Sarenemi', fixed: true, x: 300*mapScale, y: 30*mapScale, color: colorEnemy},
        {id: 30045311, label: 'Ashitsu', fixed: true, x: 180*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045312, label: 'Korasen', fixed: true, x: 180*mapScale, y: 20*mapScale, color: colorEnemy},
        {id: 30045313, label: 'Ienakkamon', fixed: true, x: 130*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045314, label: 'Kinakka', fixed: true, x: 360*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045315, label: 'Raihbaka', fixed: true, x: 360*mapScale, y: 60*mapScale, color: colorEnemy},
        {id: 30045316, label: 'Innia', fixed: true, x: 320*mapScale, y: 120*mapScale, color: colorEnemy},
        {id: 30045317, label: 'Iralaja', fixed: true, x: 310*mapScale, y: 50*mapScale, color: colorEnemy},
        {id: 30045318, label: 'Martoh', fixed: true, x: 300*mapScale, y: 90*mapScale, color: colorEnemy},
        {id: 30045319, label: 'Eha', fixed: true, x: 250*mapScale, y: 140*mapScale, color: colorEnemy},
        {id: 30045320, label: 'Pavanakka', fixed: true, x: 310*mapScale, y: 160*mapScale, color: colorEnemy},
        {id: 30045330, label: 'Okkamon', fixed: true, x: 730*mapScale, y: 200*mapScale, color: colorEnemy},
        {id: 30045331, label: 'Vaaralen', fixed: true, x: 690*mapScale, y: 100*mapScale, color: colorEnemy},
        {id: 30045332, label: 'Asakai', fixed: true, x: 680*mapScale, y: 130*mapScale, color: colorEnemy},
        {id: 30045333, label: 'Prism', fixed: true, x: 610*mapScale, y: 170*mapScale, color: colorEnemy},
        {id: 30045334, label: 'Mushikegi', fixed: true, x: 720*mapScale, y: 140*mapScale, color: colorEnemy},
        {id: 30045335, label: 'Teskanen', fixed: true, x: 660*mapScale, y: 80*mapScale, color: colorEnemy},
        {id: 30045336, label: 'Elunala', fixed: true, x: 660*mapScale, y: 170*mapScale, color: colorEnemy},
        {id: 30045337, label: 'Ikoskio', fixed: true, x: 610*mapScale, y: 140*mapScale, color: colorEnemy},
        {id: 30045338, label: 'Hikkoken', fixed: true, x: 480*mapScale, y: 270*mapScale, color: colorEnemy},
        {id: 30045339, label: 'Enaluri', fixed: true, x: 430*mapScale, y: 200*mapScale, color: colorEnemy},
        {id: 30045340, label: 'Aivonen', fixed: true, x: 310*mapScale, y: 200*mapScale, color: colorEnemy},
        {id: 30045341, label: 'Hallanen', fixed: true, x: 480*mapScale, y: 230*mapScale, color: colorEnemy},
        {id: 30045342, label: 'Akidagi', fixed: true, x: 380*mapScale, y: 210*mapScale, color: colorEnemy},
        {id: 30045343, label: 'Immuri', fixed: true, x: 420*mapScale, y: 280*mapScale, color: colorEnemy},
        {id: 30045344, label: 'Nennamaila', fixed: true, x: 400*mapScale, y: 240*mapScale, color: colorEnemy},
        {id: 30045345, label: 'Hirri', fixed: true, x: 590*mapScale, y: 280*mapScale, color: colorEnemy},
        {id: 30045346, label: 'Kedama', fixed: true, x: 630*mapScale, y: 270*mapScale, color: colorEnemy},
        {id: 30045347, label: 'Oinasiken', fixed: true, x: 520*mapScale, y: 300*mapScale, color: colorEnemy},
        {id: 30045348, label: 'Notoras', fixed: true, x: 540*mapScale, y: 320*mapScale, color: colorEnemy},
        {id: 30045349, label: 'Rakapas', fixed: true, x: 570*mapScale, y: 245*mapScale, color: colorEnemy},
        {id: 30045350, label: 'Teimo', fixed: true, x: 690*mapScale, y: 240*mapScale, color: colorEnemy},
        {id: 30045351, label: 'Iwisoda', fixed: true, x: 550*mapScale, y: 220*mapScale, color: colorEnemy},
        {id: 30045352, label: 'Nisuwa', fixed: true, x: 590*mapScale, y: 305*mapScale, color: colorEnemy},
        {id: 30045353, label: 'Pynekastoh', fixed: true, x: 530*mapScale, y: 260*mapScale, color: colorEnemy},
        {id: 30045354, label: 'Reitsato', fixed: true, x: 610*mapScale, y: 210*mapScale, color: colorEnemy},
        {id: 30004055, label: 'W-4NUU', fixed: true, x: 80*mapScale, y: 30*mapScale, color: colorLSNULL},
        {id: 30002039, label: 'RQH-MY', fixed: true, x: 20*mapScale, y: 80*mapScale, color: colorLSNULL},
        {id: 30003834, label: 'Chardalane', fixed: true, x: 20*mapScale, y: 240*mapScale, color: colorHS},
        {id: 30003832, label: 'Adacyne', fixed: true, x: 20*mapScale, y: 270*mapScale, color: colorHS},
        {id: 30003831, label: 'Osmeden', fixed: true, x: 20*mapScale, y: 310*mapScale, color: colorHS},
        {id: 30003830, label: 'Orvolle', fixed: true, x: 40*mapScale, y: 340*mapScale, color: colorHS},
        {id: 30004975, label: 'Mesybier', fixed: true, x: 20*mapScale, y: 490*mapScale, color: colorHS},
        {id: 30003835, label: 'Maut', fixed: true, x: 60*mapScale, y: 260*mapScale, color: colorHS},
        {id: 30003833, label: 'Oulley', fixed: true, x: 80*mapScale, y: 320*mapScale, color: colorHS},
        {id: 30003268, label: 'MHC-R3', fixed: true, x: 50*mapScale, y: 410*mapScale, color: colorLSNULL},
        {id: 30003824, label: 'Archavoinet', fixed: true, x: 120*mapScale, y: 350*mapScale, color: colorHS},
        {id: 30003806, label: 'Pelille', fixed: true, x: 120*mapScale, y: 370*mapScale, color: colorHS},
        {id: 30003798, label: 'Slays', fixed: true, x: 180*mapScale, y: 480*mapScale, color: colorHS},
        {id: 30003802, label: 'Cumemare', fixed: true, x: 210*mapScale, y: 535*mapScale, color: colorHS},
        {id: 30005319, label: 'Raneilles', fixed: true, x: 300*mapScale, y: 580*mapScale, color: colorHS},
        {id: 30005008, label: 'Aeschee', fixed: true, x: 410*mapScale, y: 540*mapScale, color: colorHS},
        {id: 30004995, label: 'Allamotte', fixed: true, x: 510*mapScale, y: 560*mapScale, color: colorHS},
        {id: 30004993, label: 'Villore', fixed: true, x: 580*mapScale, y: 580*mapScale, color: colorHS},
        {id: 30004046, label: 'F7C-H0', fixed: true, x: 310*mapScale, y: 280*mapScale, color: colorLSNULL},
        {id: 30005308, label: 'Jufvitte', fixed: true, x: 380*mapScale, y: 400*mapScale, color: colorHS},
        {id: 30001440, label: 'Karjataimon', fixed: true, x: 380*mapScale, y: 20*mapScale, color: colorHS},
        {id: 30001435, label: 'Ohbochi', fixed: true, x: 410*mapScale, y: 50*mapScale, color: colorHS},
        {id: 30045324, label: 'Onnamon', fixed: true, x: 480*mapScale, y: 90*mapScale, color: colorHS},
        {id: 30045325, label: 'Rohamaa', fixed: true, x: 420*mapScale, y: 110*mapScale, color: colorHS},
        {id: 30045329, label: 'Ichoriya', fixed: true, x: 410*mapScale, y: 180*mapScale, color: colorHS},
        {id: 30045328, label: 'Ahtila', fixed: true, x: 480*mapScale, y: 170*mapScale, color: colorHS},
        {id: 30045327, label: 'Tsuruma', fixed: true, x: 510*mapScale, y: 70*mapScale, color: colorHS},
        {id: 30045323, label: 'Astoh', fixed: true, x: 550*mapScale, y: 90*mapScale, color: colorHS},
        {id: 30045326, label: 'Uuhulanen', fixed: true, x: 510*mapScale, y: 110*mapScale, color: colorHS},
        {id: 30045322, label: 'Samanuni', fixed: true, x: 540*mapScale, y: 150*mapScale, color: colorHS},
        {id: 30001388, label: 'Mara', fixed: true, x: 550*mapScale, y: 20*mapScale, color: colorHS},
        {id: 30002755, label: 'Usi', fixed: true, x: 780*mapScale, y: 40*mapScale, color: colorHS},
        {id: 30001376, label: 'Nourvukaiken', fixed: true, x: 710*mapScale, y: 270*mapScale, color: colorHS},
        {id: 30005334, label: 'Tierijev', fixed: true, x: 780*mapScale, y: 280*mapScale, color: colorHS},
        {id: 30002795, label: 'Oshaima', fixed: true, x: 780*mapScale, y: 380*mapScale, color: colorHS},
        {id: 30002799, label: 'Oisio', fixed: true, x: 780*mapScale, y: 420*mapScale, color: colorHS},
        {id: 30004981, label: 'Actee', fixed: true, x: 540*mapScale, y: 450*mapScale, color: colorHS},
        {id: 30004983, label: 'Amane', fixed: true, x: 600*mapScale, y: 450*mapScale, color: colorHS},
        {id: 30004986, label: 'Estaunitte', fixed: true, x: 640*mapScale, y: 460*mapScale, color: colorLSNULL},
        {id: 30004977, label: 'Yvangier', fixed: true, x: 530*mapScale, y: 500*mapScale, color: colorLSNULL},
        {id: 30003794, label: 'Stacmon', fixed: true, x: 210*mapScale, y: 450*mapScale, color: colorHS},
        {id: 30003800, label: 'Alperaute', fixed: true, x: 180*mapScale, y: 370*mapScale, color: colorHS},
        {id: 30045321, label: 'Uchomida', fixed: true, x: 410*mapScale, y: 140*mapScale, color: colorHS},
    ]);

    
    // create an array with edges
    var edges = new vis.DataSet([
        //W-4NUU -> Okagaiken
        {from: 30004055, to: 30045307},
        //Okagaiken -> Ienakkamon, Villasen
        {from: 30045307, to: 30045313},
        {from: 30045307, to: 30045309},
        //Villasen -> Korasen, Hykanima, Kehjari
        {from: 30045309, to: 30045312},
        {from: 30045309, to: 30045306},
        {from: 30045309, to: 30045308},
        //Ienakkamon -> Ashitsu
        {from: 30045313, to: 30045311},
        //Ashitsu -> Hykanima, Kehjari
        {from: 30045311, to: 30045306},
        {from: 30045311, to: 30045308},
        //Hykanima -> Sarenemi
        {from: 30045306, to: 30045310},
        //Sarenemi -> Karjataimon
        {from: 30045310, to: 30001440},
        //Kehjari -> Martoh
        {from: 30045308, to: 30045318},
        //Martoh -> Iralaja, kinakka, Innia, Eha
        {from: 30045318, to: 30045317},
        {from: 30045318, to: 30045314},
        {from: 30045318, to: 30045316},
        {from: 30045318, to: 30045319},
        //Eha -> Oicx
        {from: 30045319, to: 30003838},
        //Iralaja -> Raihbaka
        {from: 30045317, to: 30045315},
        //Raihbaka -> Ohbochi, Kinakka
        {from: 30045315, to: 30001435},
        {from: 30045315, to: 30045314},
        //Kinakka -> Onnamon, Innia
        {from: 30045314, to: 30045324},
        {from: 30045314, to: 30045316},
        //Innia -> Eha, Pavanakka
        {from: 30045316, to: 30045319},
        {from: 30045316, to: 30045320},
        //Pavanakka -> Aivonen
        {from: 30045320, to: 30045340},
        //Aivonen -> Akidagi
        {from: 30045340, to: 30045342},
        //
        //Onnamon -> Tsuruma, Uuhulanen, Ahtila, Rohamaa
        {from: 30045324, to: 30045327},
        {from: 30045324, to: 30045326},
        {from: 30045324, to: 30045328},
        {from: 30045324, to: 30045325},
        //Tsuruma -> Astoh
        {from: 30045327, to: 30045323},
        //Astoh -> Uuhulanen
        {from: 30045323, to: 30045326},
        //Uuhulanen -> Samanuni
        {from: 30045326, to: 30045322},
        //Samanuni -> Ikoskio, Ahtila, Uchomida
        {from: 30045322, to: 30045337},
        {from: 30045322, to: 30045328},
        {from: 30045322, to: 30045321},
        //Ahtila -> Ichoriya
        {from: 30045328, to: 30045329},
        //Rohamaa -> Uchomida
        {from: 30045325, to: 30045321},
        //Uchomida -> Ichoriya
        {from: 30045321, to: 30045329},
        //Ichoriya -> Akidagi
        {from: 30045329, to: 30045342},
        //
        //Ikoskio -> Asakai, Prism
        {from: 30045337, to: 30045332},
        {from: 30045337, to: 30045333},
        //Prism -> Asakai, Elunala
        {from: 30045333, to: 30045332},
        {from: 30045333, to: 30045336},
        //Elunala -> Asakai
        {from: 30045336, to: 30045332},
        //Asakai -> Vaaralen, Mushikegi, Okkamon
        {from: 30045332, to: 30045331},
        {from: 30045332, to: 30045334},
        {from: 30045332, to: 30045330},
        //Vaaralen -> Teskanen, Mushikegi
        {from: 30045331, to: 30045335},
        {from: 30045331, to: 30045334},
        //Mushikegi -> Manjonakko, Okkamon
        {from: 30045334, to: 30002760},
        {from: 30045334, to: 30045330},
        //Manjonakko -> Uuna
        {from: 30002760, to: 30002759},
        //Uuna -> Ishomilken
        {from: 30002759, to: 30002756},
        //Ishomilken -> Usi, Nikkishina
        {from: 30002756, to: 30002755},
        {from: 30002756, to: 30002757},
        //Nikkishina -> Hasama
        {from: 30002757, to: 30002758},
        //Hasama -> Mara
        {from: 30002758, to: 30001388},
        //Okkamon -> Reitsato
        {from: 30045330, to: 30045354},
        //
        //Reitsato -> Rakapas, Kedama
        {from: 30045354, to: 30045349},
        {from: 30045354, to: 30045346},
        //Rakapas -> Iwisoda, Pynekastoh
        {from: 30045349, to: 30045351},
        {from: 30045349, to: 30045353},
        //Kedama -> Teimo, Tama, Nisuwa, Hirri
        {from: 30045346, to: 30045350},
        {from: 30045346, to: 30045352},
        {from: 30045346, to: 30045345},
        //Tama -> Nourvukaiken, Sujarento, Kedama
        {from: 30002813, to: 30001376},
        {from: 30002813, to: 30002809},
        {from: 30002813, to: 30045346},
        //Nisuwa -> Hirri, Notoras, Oinasiken
        {from: 30045352, to: 30045345},
        {from: 30045352, to: 30045348},
        {from: 30045352, to: 30045347},
        //Hirri -> Pynekastoh
        {from: 30045345, to: 30045353},
        //Pynekastoh -> Hikkoken, Oinasiken
        {from: 30045353, to: 30045338},
        {from: 30045353, to: 30045347},
        //
        //Sujarento -> Onatoh, Eranakko, Nagamanen
        {from: 30002809, to: 30002811},
        {from: 30002809, to: 30002810},
        {from: 30002809, to: 30002807},
        //Onatoh -> Tannolen, Eranakko
        {from: 30002811, to: 30002812},
        {from: 30002811, to: 30002810},
        //Tannolen -> Tierijev
        {from: 30002812, to: 30005334},
        //
        //Nagamanen -> Oto, Hasmijaala, Deven
        {from: 30002807, to: 30002808},
        {from: 30002807, to: 30002806},
        {from: 30002807, to: 30004985},
        //Hasmijaala -> Hysera
        {from: 30002806, to: 30002796},
        //Hysera -> Oshaima, Oisio
        {from: 30002796, to: 30002795},
        {from: 30002796, to: 30002799},
        //Oshaima -> Oisio
        {from: 30002795, to: 30002799},
        //
        //Hikkoken -> Immuri, Nennamaila, Hallanen
        {from: 30045338, to: 30045343},
        {from: 30045338, to: 30045344},
        {from: 30045338, to: 30045341},
        //Hallanen -> Enaluri, Akidagi, Nennamaila
        {from: 30045341, to: 30045339},
        //{from: 30045341, to: 30045342},
        //{from: 30045341, to: 30045344},
        //Enaluri -> Akidagi
        {from: 30045339, to: 30045342},
        {from: 30045339, to: 30045344},
        //Immuri -> Nennamaila
        {from: 30045343, to: 30045344},
        //Nennamaila -> Akidagi, Aldranette
        {from: 30045344, to: 30045342},
        {from: 30045344, to: 30003837},
        //
        //Oinasiken -> Abune
        {from: 30045347, to: 30004984},
        //Abune -> Heydieles
        {from: 30004984, to: 30004979},
        //Heydieles -> Fliet, Actee, Yvangier, Indregulle
        {from: 30004979, to: 30004980},
        {from: 30004979, to: 30004981},
        {from: 30004979, to: 30004977},
        
        {from: 30004979, to: 30004982},
        //Fliet -> Deven, Actee
        {from: 30004980, to: 30004985},
        {from: 30004980, to: 30004981},
        //Actee -> Amane
        {from: 30004981, to: 30004983},
        //Amane -> Estaunitte
        {from: 30004983, to: 30004986},
        //
        //OMS -> Villore, Ladistier, Heydieles
        {from: 30005000, to: 30004993},
        {from: 30005000, to: 30004999},
        {from: 30005000, to: 30004979},
        //Villore -> Allamotte
        {from: 30004993, to: 30004995},
        //Allamotte -> Vifrevaert
        {from: 30004995, to: 30004997},
        //Vifrevaert -> Ladistier
        {from: 30004997, to: 30004999},
        //Ladistier -> Aeschee
        {from: 30004999, to: 30005008},
        //
        //Aeschee -> Jovainnon
        {from: 30005008, to: 30005321},
        //Jovainnon -> Hevrice
        {from: 30005321, to: 30005320},
        //Hevrice -> Raneilles, Muetralle
        {from: 30005320, to: 30005319},
        {from: 30005320, to: 30005299},
        //Muetralle -> Costolle
        {from: 30005299, to: 30005298},
        {from: 30005295, to: 30004982},
        //Costolle -> Melmaniel
        {from: 30005298, to: 30005296},
        //
        //Indregulle -> Murethand
        //
        //Murethand -> Mesybier, Melmaniel
        {from: 30005295, to: 30004975},
        {from: 30005295, to: 30005296},
        {from: 30005295, to: 30004975},
        //Melmaniel -> Ouelletta
        {from: 30005296, to: 30005297},
        //Ouelletta -> Jufvitte, Loes
        {from: 30005297, to: 30005308},
        {from: 30005297, to: 30005300},
        //Loes -> Agoze
        {from: 30005300, to: 30003787},
        //Agoze -> Annancale, Intaki, Vey, Ostingele
        {from: 30003787, to: 30003791},
        {from: 30003787, to: 30003788},
        {from: 30003787, to: 30003790},
        {from: 30003787, to: 30003792},
        //Annancale -> Brarel
        {from: 30003791, to: 30003789},
        //Brarel -> Intaki
        {from: 30003789, to: 30003788},
        //Intaki -> Vey
        {from: 30003788, to: 30003790},
        //Vey -> Frarie
        {from: 30003790, to: 30003826},
        //
        //Ostingele -> Alperaute, Pelille, Harroule, Dastryns, Stacmon
        {from: 30003792, to: 30003800},
        {from: 30003792, to: 30003806},
        {from: 30003792, to: 30003793},
        {from: 30003792, to: 30003797},
        {from: 30003792, to: 30003794},
        //Harroule -> MHC-R3
        {from: 30003793, to: 30003268},
        //Dastryns -> Uphallant, Iges, Stacmon
        {from: 30003797, to: 30003799},
        {from: 30003797, to: 30003796},
        {from: 30003797, to: 30003794},
        //Uphallant -> Iges
        {from: 30003799, to: 30003796},
        //Iges -> Slays, Covryn
        {from: 30003796, to: 30003798},
        {from: 30003796, to: 30003795},
        //Slays -> Stacmon
        {from: 30003798, to: 30003794},
        //Stacmon -> Covryn
        {from: 30003794, to: 30003795},
        //Covryn -> Cumemare
        {from: 30003795, to: 30003802},
        //
        //Oicx -> Vlillirier
        {from: 30003838, to: 30003836},
        //Vlillirier -> Alsavoinon, Renarelle, Aldranette
        {from: 30003836, to: 30003841},
        {from: 30003836, to: 30003829},
        {from: 30003836, to: 30003837},
        //Alsavoinon -> F7C-H0
        {from: 30003841, to: 30004046},
        //Aldranette -> Evaulon
        {from: 30003837, to: 30003839},
        //Evaulon -> Anchauttes
        {from: 30003839, to: 30003840},
        //Anchauttes -> Esesier, Odamia
        {from: 30003840, to: 30003842},
        {from: 30003840, to: 30003857},
        //Odamia -> Arderonne, Alamel
        {from: 30003857, to: 30003852},
        {from: 30003857, to: 30003854},
        //Alamel -> Arderonne, Mantenault
        {from: 30003854, to: 30003852},
        {from: 30003854, to: 30003855},
        //Mantenault -> RQH-MY
        {from: 30003855, to: 30002039},
        //Arderonne -> Reschard
        {from: 30003852, to: 30003851},
        //Reschard -> Mercomesier, Alparena
        {from: 30003851, to: 30003853},
        {from: 30003851, to: 30003850},
        //Mercomesier -> Athounon
        {from: 30003853, to: 30003856},
        //Alparena -> Maut
        {from: 30003850, to: 30003835},
        //Maut -> Adacyne, Osmeden
        {from: 30003835, to: 30003832},
        {from: 30003835, to: 30003831},
        //Adacyne -> Chardalane, Osmeden
        {from: 30003832, to: 30003834},
        {from: 30003832, to: 30003831},
        //Osmeden -> Orvolle
        {from: 30003831, to: 30003830},
        //
        //Renarelle -> Moclinamaud, Aubenall
        {from: 30003829, to: 30003828},
        {from: 30003829, to: 30003827},
        //Aubenall -> Oulley, Archavoinet, Eugales
        {from: 30003827, to: 30003833},
        {from: 30003827, to: 30003824},
        {from: 30003827, to: 30003825},
        //Moclinamaud -> Frarie, Eugales
        {from: 30003828, to: 30003826},
        {from: 30003828, to: 30003825},
        //Eugales -> Archavoinet, Frarie
        {from: 30003825, to: 30003824},
        {from: 30003825, to: 30003826},
        //Oulley -> Orvolle
        {from: 30003833, to: 30003830},
        //Orvolle -> Mesybier
        {from: 30003830, to: 30004975},
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
    
