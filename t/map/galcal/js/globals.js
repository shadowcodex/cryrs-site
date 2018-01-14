// These variables will be globally available to all functions...

    // Setup Node Colors
    var colorEnemy = "#5bc0de",
        //colorEnemy = "#a3f0f7", 
        colorFriendly = "#62c462",
        //colorFriendly = "#75b775",
        //colorFriendly="#8eff9d", 
        colorHS="#FFFFFF", 
        colorLSNULL="#c07fe0";
    
    //var regPlacid = '#162d16', regVerge = '#151b2b', regEssence = '#132827', regCitadel = '#231328', regRise = '#281313', regLone = '#282713';
    var regPlacid = '#3e513e', regVerge = '#3d3c2d', regEssence = '#2f3f3e', regCitadel = '#3b2f3f', regRise = '#333844', regLone = '#3d2a2a';
    var mapScale = 2.4;

	// ENUM for common ID lookup
	var idEnum = Object.freeze(
	{
		CalMil: 500001,
		GalMil: 500004,
		FEDUP: 99007289,
		
	});
	
	/*
	Required states:
		- Pirates only (White)
		- Galmil kills CalMil (Green)
		- CalMil kills GalMil (Blue)
		- Pirate kills CalMil (Grey)
		- Pirate kills GalMil (Red)
		- CalMil kills Pirate (Lblue)
		- GalMil kills Pirate (Yellow)
	*/
	var killColor = Object.freeze(
	{
		RED: 'class="text-danger"',
		GREEN: 'class="text-success"',
		YELLOW: 'class="text-warning"',
		BLUE: 'class="text-primary"',
		LBLUE: 'class="text-info"',
		GREY: 'class="text-secondary"',
		MUTED: 'class="text-muted"',
		WHITE: 'class="text-white"',
		
	});
	
    // Hash Map for Colors
    var colors = {};
    
    // Kill record for knowing if a kill has been registered or not...
    var kills = [];

    var killStats = {
        'gal': 0,
        'cal': 0,
        'pir': 0,
        'npc': 0
    };
    
    var deathStats = {
        'gal': 0,
        'cal': 0,
        'pir': 0
    }
    