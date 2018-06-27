
 
 // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 30002053, label: 'Hek', systemName: 'Hek', fixed: true, x: 50*mapScale, y: 25*mapScale, color: colorHS},
        {id: 30002054, label: 'Hror', systemName: 'Hror', fixed: true, x: 100*mapScale, y: 25*mapScale, color: colorHS},
        {id: 30002055, label: 'Amo', systemName: 'Amo', fixed: true, x: 85*mapScale, y: 65*mapScale, color: colorHS},
        {id: 30002056, label: 'Resbroko', systemName: 'Resbroko', fixed: true, x: 150*mapScale, y: 25*mapScale, color: colorEnemy},
        {id: 30002059, label: 'Auner', systemName: 'Auner', fixed: true, x: 135*mapScale, y: 65*mapScale, color: colorEnemy},
        {id: 30002057, label: 'Hadozeko', systemName: 'Hadozeko', fixed: true, x: 250*mapScale, y: 25*mapScale, color: colorEnemy},
        {id: 30002058, label: 'Ardar', systemName: 'Ardar', fixed: true, x: 205*mapScale, y: 85*mapScale, color: colorEnemy},
        {id: 30002082, label: 'Floseswin', systemName: 'Floseswin', fixed: true, x: 170*mapScale, y: 145*mapScale, color: colorEnemy},
        {id: 30002084, label: 'Aset', systemName: 'Aset', fixed: true, x: 110*mapScale, y: 145*mapScale, color: colorEnemy},
        {id: 30002088, label: 'Vimeini', systemName: 'Vimeini', fixed: true, x: 55*mapScale, y: 145*mapScale, color: colorEnemy},
        {id: 30002089, label: 'Avenod', systemName: 'Avenod', fixed: true, x: 25*mapScale, y: 110*mapScale, color: colorEnemy},
        {id: 30002684, label: 'Audaerne', systemName: 'Audaerne', fixed: true, x: -10*mapScale, y: 65*mapScale, color: colorHS},
        {id: 30002085, label: 'Eytjangard', systemName: 'Eytjangard', fixed: true, x: 20*mapScale, y: 180*mapScale, color: colorEnemy},
        {id: 30002087, label: 'Isbrabata', systemName: 'Isbrabata', fixed: true, x: 55*mapScale, y: 210*mapScale, color: colorEnemy},
        {id: 30002086, label: 'Turnur', systemName: 'Turnur', fixed: true, x: 110*mapScale, y: 210*mapScale, color: colorEnemy},
        {id: 30002083, label: 'Uisper', systemName: 'Uisper', fixed: true, x: 145*mapScale, y: 180*mapScale, color: colorEnemy},
        {id: 30002090, label: 'Frerstorn', systemName: 'Frerstorn', fixed: true, x: 250*mapScale, y: 115*mapScale, color: colorEnemy},
        {id: 30002091, label: 'Ontorn', systemName: 'Ontorn', fixed: true, x: 275*mapScale, y: 75*mapScale, color: colorEnemy},
        {id: 30002092, label: 'Sirekur', systemName: 'Sirekur', fixed: true, x: 335*mapScale, y: 80*mapScale, color: colorEnemy},
        {id: 30002093, label: 'Gebuladi', systemName: 'Gebuladi', fixed: true, x: 300*mapScale, y: 145*mapScale, color: colorEnemy},
        {id: 30002094, label: 'Ebolfer', systemName: 'Ebolfer', fixed: true, x: 375*mapScale, y: 120*mapScale, color: colorEnemy},
        {id: 30002095, label: 'Eszur', systemName: 'Eszur', fixed: true, x: 290*mapScale, y: 185*mapScale, color: colorEnemy},
        {id: 30002096, label: 'Hofjaldgund', systemName: 'Hofjaldgund', fixed: true, x: 350*mapScale, y: 185*mapScale, color: colorEnemy},
        {id: 30002693, label: 'Egghelende', systemName: 'Egghelende', fixed: true, x: 230*mapScale, y: 210*mapScale, color: colorLSNULL},
        {id: 30002539, label: 'Siseide', systemName: 'Siseide', fixed: true, x: 290*mapScale, y: 225*mapScale, color: colorEnemy},
        {id: 30002541, label: 'Dal', systemName: 'Dal', fixed: true, x: 350*mapScale, y: 225*mapScale, color: colorEnemy},
        {id: 30002540, label: 'Lantorn', systemName: 'Lantorn', fixed: true, x: 250*mapScale, y: 260*mapScale, color: colorEnemy},
        {id: 30002542, label: 'Auga', systemName: 'Auga', fixed: true, x: 290*mapScale, y: 295*mapScale, color: colorEnemy},
        {id: 30002538, label: 'Vard', systemName: 'Vard', fixed: true, x: 350*mapScale, y: 295*mapScale, color: colorEnemy},
        {id: 30002537, label: 'Amamake', systemName: 'Amamake', fixed: true, x: 380*mapScale, y: 260*mapScale, color: colorEnemy},
        {id: 30002517, label: 'Gulmorogod', systemName: 'Gulmorogod', fixed: true, x: 450*mapScale, y: 180*mapScale, color: colorEnemy},
        {id: 30002516, label: 'Lulm', systemName: 'Lulm', fixed: true, x: 510*mapScale, y: 140*mapScale, color: colorEnemy},
        {id: 30002514, label: 'Bosboger', systemName: 'Bosboger', fixed: true, x: 530*mapScale, y: 180*mapScale, color: colorEnemy},
        {id: 30002513, label: 'Dammalin', systemName: 'Dammalin', fixed: true, x: 590*mapScale, y: 185*mapScale, color: colorHS},
        {id: 30002515, label: 'Olfeim', systemName: 'Olfeim', fixed: true, x: 640*mapScale, y: 150*mapScale, color: colorLSNULL},
        {id: 30002512, label: 'Alakgur', systemName: 'Alakgur', fixed: true, x: 595*mapScale, y: 225*mapScale, color: colorHS},
        {id: 30002507, label: 'Abudban', systemName: 'Abudban', fixed: true, x: 565*mapScale, y: 265*mapScale, color: colorHS},
        {id: 30002506, label: 'Osoggur', systemName: 'Osoggur', fixed: true, x: 500*mapScale, y: 265*mapScale, color: colorHS},
        {id: 30002510, label: 'Rens', systemName: 'Rens', fixed: true, x: 680*mapScale, y: 280*mapScale, color: colorHS},
        {id: 30002097, label: 'Klogori', systemName: 'Klogori', fixed: true, x: 325*mapScale, y: 25*mapScale, color: colorEnemy},
        {id: 30002098, label: 'Orfrold', systemName: 'Orfrold', fixed: true, x: 400*mapScale, y: 45*mapScale, color: colorEnemy},
        {id: 30002099, label: 'Egmar', systemName: 'Egmar', fixed: true, x: 475*mapScale, y: 75*mapScale, color: colorEnemy},
        {id: 30002100, label: 'Taff', systemName: 'Taff', fixed: true, x: 475*mapScale, y: 35*mapScale, color: colorEnemy},
        {id: 30002101, label: 'Ualkin', systemName: 'Ualkin', fixed: true, x: 445*mapScale, y: 0*mapScale, color: colorEnemy},
        {id: 30002102, label: 'Gukarla', systemName: 'Gukarla', fixed: true, x: 505*mapScale, y: 0*mapScale, color: colorEnemy},
        {id: 30002066, label: 'Arnher', systemName: 'Arnher', fixed: true, x: 575*mapScale, y: 55*mapScale, color: colorEnemy},
        {id: 30002065, label: 'Lasleinur', systemName: 'Lasleinur', fixed: true, x: 585*mapScale, y: 95*mapScale, color: colorEnemy},
        {id: 30002061, label: 'Ofstold', systemName: 'Ofstold', fixed: true, x: 645*mapScale, y: 95*mapScale, color: colorEnemy},
        {id: 30002060, label: 'Evati', systemName: 'Evati', fixed: true, x: 635*mapScale, y: 55*mapScale, color: colorEnemy},
        {id: 30002051, label: 'Anher', systemName: 'Anher', fixed: true, x: 655*mapScale, y: 10*mapScale, color: colorHS},
        {id: 30000200, label: 'Akkio', systemName: 'Akkio', fixed: true, x: 730*mapScale, y: 15*mapScale, color: colorLSNULL},
        {id: 30002062, label: 'Todifrauan', systemName: 'Todifrauan', fixed: true, x: 735*mapScale, y: 55*mapScale, color: colorEnemy},
        {id: 30002063, label: 'Helgatild', systemName: 'Helgatild', fixed: true, x: 795*mapScale, y: 55*mapScale, color: colorEnemy},
        {id: 30002064, label: 'Arnstur', systemName: 'Arnstur', fixed: true, x: 730*mapScale, y: 85*mapScale, color: colorEnemy},
        {id: 30002067, label: 'Brin', systemName: 'Brin', fixed: true, x: 790*mapScale, y: 85*mapScale, color: colorEnemy},
        {id: 30002560, label: 'Gultratren', systemName: 'Gultratren', fixed: true, x: 720*mapScale, y: 200*mapScale, color: colorLSNULL},
        {id: 30002653, label: 'Gratesier', systemName: 'Gratesier', fixed: true, x: -10*mapScale, y: 300*mapScale, color: colorLSNULL},
        {id: 30003090, label: 'Saidusairos', systemName: 'Saidusairos', fixed: true, x: 40*mapScale, y: 325*mapScale, color: colorEnemy},
        {id: 30003089, label: 'Kurniainen', systemName: 'Kurniainen', fixed: true, x: 100*mapScale, y: 340*mapScale, color: colorEnemy},
        {id: 30003087, label: 'Haras', systemName: 'Haras', fixed: true, x: 30*mapScale, y: 385*mapScale, color: colorEnemy},
        {id: 30003086, label: 'Sahtogas', systemName: 'Sahtogas', fixed: true, x: 95*mapScale, y: 390*mapScale, color: colorEnemy},
        {id: 30003088, label: 'Oyonata', systemName: 'Oyonata', fixed: true, x: 150*mapScale, y: 375*mapScale, color: colorEnemy},
        {id: 30003079, label: 'Saikamon', systemName: 'Saikamon', fixed: true, x: 20*mapScale, y: 450*mapScale, color: colorEnemy},
        {id: 30003091, label: 'Tannakan', systemName: 'Tannakan', fixed: true, x: 100*mapScale, y: 455*mapScale, color: colorEnemy},
        {id: 30003071, label: 'Anka', systemName: 'Anka', fixed: true, x: 115*mapScale, y: 490*mapScale, color: colorEnemy},
        {id: 30003072, label: 'Iesa', systemName: 'Iesa', fixed: true, x: 60*mapScale, y: 510*mapScale, color: colorEnemy},
        {id: 30003077, label: 'Uusanen', systemName: 'Uusanen', fixed: true, x: 115*mapScale, y: 535*mapScale, color: colorEnemy},
        {id: 30003078, label: 'Erkinen', systemName: 'Erkinen', fixed: true, x: 105*mapScale, y: 560*mapScale, color: colorHS},
        {id: 30003070, label: 'Sosala', systemName: 'Sosala', fixed: true, x: 175*mapScale, y: 550*mapScale, color: colorEnemy},
        {id: 30003076, label: 'Gammel', systemName: 'Gammel', fixed: true, x: 170*mapScale, y: 495*mapScale, color: colorHS},
        {id: 30003073, label: 'Netsalakka', systemName: 'Netsalakka', fixed: true, x: 40*mapScale, y: 625*mapScale, color: colorHS},
        {id: 30003075, label: 'Myyhera', systemName: 'Myyhera', fixed: true, x: 1*mapScale, y: 655*mapScale, color: colorHS},
        {id: 30003074, label: 'Sasiekko', systemName: 'Sasiekko', fixed: true, x: 115*mapScale, y: 660*mapScale, color: colorHS},
        {id: 30003067, label: 'Huola', systemName: 'Huola', fixed: true, x: 275*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30003065, label: 'Otelen', systemName: 'Otelen', fixed: true, x: 255*mapScale, y: 465*mapScale, color: colorHS},
        {id: 30003066, label: 'Kuomi', systemName: 'Kuomi', fixed: true, x: 240*mapScale, y: 495*mapScale, color: colorHS},
        {id: 30003064, label: 'Tuomuta', systemName: 'Tuomuta', fixed: true, x: 255*mapScale, y: 530*mapScale, color: colorHS},
        {id: 30003069, label: 'Kamela', systemName: 'Kamela', fixed: true, x: 325*mapScale, y: 580*mapScale, color: colorEnemy},
        {id: 30002965, label: 'Choonka', systemName: 'Choonka', fixed: true, x: 325*mapScale, y: 660*mapScale, color: colorHS},
        {id: 30003068, label: 'Kourmonen', systemName: 'Kourmonen', fixed: true, x: 335*mapScale, y: 455*mapScale, color: colorEnemy},
        {id: 30002975, label: 'Roushzar', systemName: 'Roushzar', fixed: true, x: 400*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30002976, label: 'Labapi', systemName: 'Labapi', fixed: true, x: 435*mapScale, y: 445*mapScale, color: colorEnemy},
        {id: 30002978, label: 'Asghed', systemName: 'Asghed', fixed: true, x: 470*mapScale, y: 410*mapScale, color: colorEnemy},
        {id: 30002980, label: 'Sosan', systemName: 'Sosan', fixed: true, x: 450*mapScale, y: 370*mapScale, color: colorEnemy},
        {id: 30002977, label: 'Arayar', systemName: 'Arayar', fixed: true, x: 500*mapScale, y: 450*mapScale, color: colorEnemy},
        {id: 30002981, label: 'Halmah', systemName: 'Halmah', fixed: true, x: 535*mapScale, y: 415*mapScale, color: colorEnemy},
        {id: 30002979, label: 'Tararan', systemName: 'Tararan', fixed: true, x: 570*mapScale, y: 380*mapScale, color: colorEnemy},
        {id: 30003001, label: 'Mili', systemName: 'Mili', fixed: true, x: 575*mapScale, y: 455*mapScale, color: colorHS},
        {id: 30002962, label: 'Ezzara', systemName: 'Ezzara', fixed: true, x: 670*mapScale, y: 370*mapScale, color: colorEnemy},
        {id: 30002960, label: 'Arzad', systemName: 'Arzad', fixed: true, x: 670*mapScale, y: 460*mapScale, color: colorEnemy},
        {id: 30002959, label: 'Sifilar', systemName: 'Sifilar', fixed: true, x: 600*mapScale, y: 490*mapScale, color: colorEnemy},
        {id: 30002961, label: 'Oyeman', systemName: 'Oyeman', fixed: true, x: 520*mapScale, y: 490*mapScale, color: colorEnemy},
        {id: 30002957, label: 'Tzvi', systemName: 'Tzvi', fixed: true, x: 470*mapScale, y: 520*mapScale, color: colorEnemy},
        {id: 30003063, label: 'Lamaa', systemName: 'Lamaa', fixed: true, x: 360*mapScale, y: 520*mapScale, color: colorEnemy},
        {id: 30002958, label: 'Raa', systemName: 'Raa', fixed: true, x: 575*mapScale, y: 535*mapScale, color: colorEnemy},
        {id: 30002970, label: 'Ohide', systemName: 'Ohide', fixed: true, x: 475*mapScale, y: 625*mapScale, color: colorHS},
        {id: 30002971, label: 'Sasoutikh', systemName: 'Sasoutikh', fixed: true, x: 510*mapScale, y: 600*mapScale, color: colorHS},
        {id: 30002972, label: 'Gheth', systemName: 'Gheth', fixed: true, x: 585*mapScale, y: 575*mapScale, color: colorHS},
        {id: 30002974, label: 'Mehatoor', systemName: 'Mehatoor', fixed: true, x: 635*mapScale, y: 560*mapScale, color: colorHS},
        {id: 30002969, label: 'Eredan', systemName: 'Eredan', fixed: true, x: 660*mapScale, y: 585*mapScale, color: colorHS},
        {id: 30002973, label: 'Lisudeh', systemName: 'Lisudeh', fixed: true, x: 685*mapScale, y: 610*mapScale, color: colorHS}
    ]);

    
    // create an array with edges
    var edges = new vis.DataSet([
        // Sasiekko -> Netsalakka, Myyhera
        {from: 30003074, to: 30003073},
        {from: 30003074, to: 30003075},
        // Myyhera -> Netsalakka, Saikamon
        {from: 30003075, to: 30003073},
        {from: 30003075, to: 30003079},
        // Netsalakka -> Iesa
        {from: 30003073, to: 30003072},
        // Iesa -> Anka, Uusanen
        {from: 30003072, to: 30003071},
        {from: 30003072, to: 30003077},
        // Uusanen -> Erkinen
        {from: 30003077, to: 30003078},
        // Anka -> Gammel, Tannakan
        {from: 30003071, to: 30003076},
        {from: 30003071, to: 30003091},
        // Tannakan -> Sahtogas
        {from: 30003091, to: 30003086},
        // Sahtogas -> Saikamon, Haras, Oyonata
        {from: 30003086, to: 30003079},
        {from: 30003086, to: 30003087},
        {from: 30003086, to: 30003088},
        // Oyonata -> Kurniainen
        {from: 30003088, to: 30003089},
        // Kurniainen -> Saidusairos, Isbrabata
        {from: 30003089, to: 30003090},
        {from: 30003089, to: 30002087},
        // Saidusairos -> Gratesier
        {from: 30003090, to: 30002653},
        // Sosan -> Oyonata
        {from: 30002980, to: 30003088},
        // Roushzar -> Huola
        {from: 30002975, to: 30003067},
        // Huola -> Otelen, Kourmoner
        {from: 30003067, to: 30003065},
        {from: 30003067, to: 30003068},
        // Kourmoner -> Lamaa, Kamela, Auga
        {from: 30003068, to: 30003063},
        {from: 30003068, to: 30003069},
        {from: 30003068, to: 30002542},
        // Lamaa -> Kamela
        {from: 30003063, to: 30003069},
        // Kamela -> Choonka, Toumuta, Sosala
        {from: 30003069, to: 30002965},
        {from: 30003069, to: 30003064},
        {from: 30003069, to: 30003070},
        // Tuomuta -> Kuomi
        {from: 30003064, to: 30003066},
        // Kuomi -> Otelen
        {from: 30003066, to: 30003065},
        // Sosala -> Gammel, Anka, Uusanen, Sasiekko
        {from: 30003070, to: 30003076},
        {from: 30003070, to: 30003071},
        {from: 30003070, to: 30003077},
        {from: 30003070, to: 30003074},
        // Tararan -> Halmah, Asghed, Sosan
        {from: 30002979, to: 30002981},
        {from: 30002979, to: 30002978},
        {from: 30002979, to: 30002980},
        // Halmah -> Mili, Arayar, Asghed
        {from: 30002981, to: 30003001},
        {from: 30002981, to: 30002977},
        {from: 30002981, to: 30002978},
        // Arayar -> Labapi, Asghed
        {from: 30002977, to: 30002976},
        {from: 30002977, to: 30002978},
        // Labapi -> Roushzar, Asghed
        {from: 30002976, to: 30002975},
        {from: 30002976, to: 30002978},
        // Asghed -> Sosan
        {from: 30002978, to: 30002980},
        // Raa -> Sifilar, Tzvi
        {from: 30002958, to: 30002959},
        {from: 30002958, to: 30002957},
        // Tzvi -> Lamaa, Oyeman, Sifilar
        {from: 30002957, to: 30003063},
        {from: 30002957, to: 30002961},
        {from: 30002957, to: 30002959},
        // Oyaman -> Sifilar
        {from: 30002961, to: 30002959},
        // Sifilar -> Arzad
        {from: 30002959, to: 30002960},
        // Arzad -> Tararan, Ezzara
        {from: 30002960, to: 30002979},
        {from: 30002960, to: 30002962},
        // Ezzara -> Vard
        {from: 30002962, to: 30002538},
        // Ohide -> Kamela
        {from: 30002970, to: 30003069},
        // Sasoutikh -> Ohide
        {from: 30002971, to: 30002970},
        // Geth -> Sasoutikh
        {from: 30002972, to: 30002971},
        // Mehatoor -> Gheth, Raa
        {from: 30002974, to: 30002972},
        {from: 30002974, to: 30002958},
        // Eredan -> Mehatoor
        {from: 30002969, to: 30002974},
        // Lisudeh -> Eredan
        {from: 30002973, to: 30002969},
        // Hek -> Hror
        {from: 30002053, to: 30002054},
        // Hror -> Amo, Resbroko
        {from: 30002054, to: 30002055},
        {from: 30002054, to: 30002056},
        // Amo -> Resbroko, Auner
        {from: 30002055, to: 30002056},
        {from: 30002055, to: 30002059},
        // Resbroko -> Auner, Hadozeko
        {from: 30002056, to: 30002059},
        {from: 30002056, to: 30002057},
        // Hadozeko -> Klogori, Ardar
        {from: 30002057, to: 30002097},
        {from: 30002057, to: 30002058},
        // Ardar -> Frerstorn, Floseswin
        {from: 30002058, to: 30002090},
        {from: 30002058, to: 30002082},
        // Klogori -> Orfrold
        {from: 30002097, to: 30002098},
        // Orfrold -> Egmar
        {from: 30002098, to: 30002099},
        // Egmar -> Arnher, Taff
        {from: 30002099, to: 30002066},
        {from: 30002099, to: 30002100},
        // Taff -> Ualkin, Gukarla
        {from: 30002100, to: 30002101},
        {from: 30002100, to: 30002102},
        // Ualkin -> Gukarla
        {from: 30002101, to: 30002102},
        // Frerstorn -> Ontorn, Sirekur, Ebolfer, Gebuladi
        {from: 30002090, to: 30002091},
        {from: 30002090, to: 30002092},
        {from: 30002090, to: 30002094},
        {from: 30002090, to: 30002093},
        // Ontorn -> Sireku, Ebolfer, Gebuladi
        {from: 30002091, to: 30002092},
        {from: 30002091, to: 30002094},
        {from: 30002091, to: 30002093},
        // Sireku -> Ebolfer
        {from: 30002092, to: 30002094},
        // Ebolfer -> Gebuladi
        {from: 30002094, to: 30002093},
        // Eszur -> Frerstorn, Gebuladi, Ebolfer, Siseide, Hofjakldgund
        {from: 30002095, to: 30002090},
        {from: 30002095, to: 30002093},
        {from: 30002095, to: 30002094},
        {from: 30002095, to: 30002539},
        {from: 30002095, to: 30002096},
        // Floseswin -> Aset, Uisper
        {from: 30002082, to: 30002084},
        {from: 30002082, to: 30002083},
        // Aset -> Avenod, Vimeini, Isbrabata, Turnur, Uisper, Eytjangard
        {from: 30002084, to: 30002089},
        {from: 30002084, to: 30002088},
        {from: 30002084, to: 30002087},
        {from: 30002084, to: 30002086},
        {from: 30002084, to: 30002083},
        {from: 30002084, to: 30002085},
        // Vimeini -> Isbrata
        {from: 30002088, to: 30002087},
        // Avenod -> Eytjangard, Audaerne
        {from: 30002089, to: 30002085},
        {from: 30002089, to: 30002684},
        // Eytjangard -> Uisper, Isbrabata
        {from: 30002085, to: 30002083},
        {from: 30002085, to: 30002087},
        // Isbrabata -> Turnur
        {from: 30002087, to: 30002086},
        // Turnur -> Uisper
        {from: 30002086, to: 30002083},
        // Hofjaldgund -> Dal
        {from: 30002096, to: 30002541},
        // Dal -> Siseide, Amamake, Lantor, Auga, Vard
        {from: 30002541, to: 30002539},
        {from: 30002541, to: 30002537},
        {from: 30002541, to: 30002540},
        {from: 30002541, to: 30002542},
        {from: 30002541, to: 30002538},
        // Amamake -> Siseide, Auga, Vard
        {from: 30002537, to: 30002539},
        {from: 30002537, to: 30002542},
        {from: 30002537, to: 30002538},
        // Vard -> Siseide, Lantorn
        {from: 30002538, to: 30002539},
        {from: 30002538, to: 30002540},
        // Auga -> Siseide
        {from: 30002542, to: 30002539},
        // Lantorn -> Siseida
        {from: 30002540, to: 30002539},
        // Siseide -> Egghelende
        {from: 30002539, to: 30002693},
        // Arnher -> Evati, Lasleinur
        {from: 30002066, to: 30002060},
        {from: 30002066, to: 30002065},
        // Lasleinur -> Evati, Ofstold
        {from: 30002065, to: 30002060},
        {from: 30002065, to: 30002061},
        // Ofstold -> Evati
        {from: 30002061, to: 30002060},
        // Evati -> Anher, Todifrauan
        {from: 30002060, to: 30002051},
        {from: 30002060, to: 30002062},
        // Todifrauan -> Akkio, Arnstur, Helgatild
        {from: 30002062, to: 30000200},
        {from: 30002062, to: 30002064},
        {from: 30002062, to: 30002063},
        // Artnstur -> Gultratren, Brin, Helgatild
        {from: 30002064, to: 30002560},
        {from: 30002064, to: 30002067},
        {from: 30002064, to: 30002063},
        // Brin -> Helgatild
        {from: 30002067, to: 30002063},
        // Amamake -> Gulmorogod, Osoggur
        {from: 30002537, to: 30002517},
        {from: 30002537, to: 30002506},
        // Gulmorogod -> Egmar, Lulm, Bosboger
        {from: 30002517, to: 30002099},
        {from: 30002517, to: 30002516},
        {from: 30002517, to: 30002514},
        // Bosboger -> Lulm, Dammalin
        {from: 30002514, to: 30002516},
        {from: 30002514, to: 30002513},
        // Dammalin -> Olfeim, Alkagur
        {from: 30002513, to: 30002515},
        {from: 30002513, to: 30002512},
        // Alkagur -> Abudban
        {from: 30002512, to: 30002507},
        // Abudban -> Osoggur, Rens
        {from: 30002507, to: 30002506},
        {from: 30002507, to: 30002510},
        
        
    ]);
    
    var groups = {
        
    };
    

    var systems = [
        30002061,
        30002053,
        30002054,
        30002055,
        30002056,
        30002059,
        30002057,
        30002058,
        30002082,
        30002084,
        30002088,
        30002089,
        30002684,
        30002085,
        30002087,
        30002086,
        30002083,
        30002090,
        30002091,
        30002092,
        30002093,
        30002094,
        30002095,
        30002096,
        30002693,
        30002539,
        30002541,
        30002540,
        30002542,
        30002538,
        30002537,
        30002517,
        30002516,
        30002514,
        30002513,
        30002515,
        30002512,
        30002507,
        30002506,
        30002510,
        30002097,
        30002098,
        30002099,
        30002100,
        30002101,
        30002102,
        30002066,
        30002065,
        30002060,
        30002051,
        30000200,
        30002062,
        30002063,
        30002064,
        30002067,
        30002560,
        30002653,
        30003090,
        30003089,
        30003087,
        30003086,
        30003088,
        30003079,
        30003091,
        30003071,
        30003072,
        30003077,
        30003078,
        30003070,
        30003076,
        30003073,
        30003075,
        30003074,
        30003067,
        30003065,
        30003066,
        30003064,
        30003069,
        30002965,
        30003068,
        30002975,
        30002976,
        30002978,
        30002980,
        30002977,
        30002981,
        30002979,
        30003001,
        30002962,
        30002960,
        30002959,
        30002961,
        30002957,
        30003063,
        30002958,
        30002970,
        30002971,
        30002972,
        30002974,
        30002969,
        30002973
    ];
    
