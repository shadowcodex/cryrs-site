// These variables will be globally available to all functions...

// Setup Node Colors
var colorEnemy = "#5bc0de",
	//colorEnemy = "#a3f0f7",
	colorFriendly = "#62c462",
	//colorFriendly = "#75b775",
	//colorFriendly="#8eff9d",
	colorHS = "#FFFFFF",
	colorLSNULL = "#c07fe0";

//var regPlacid = '#162d16', regVerge = '#151b2b', regEssence = '#132827', regCitadel = '#231328', regRise = '#281313', regLone = '#282713';
var regPlacid = '#3e513e',
	regVerge = '#3d3c2d',
	regEssence = '#2f3f3e',
	regCitadel = '#3b2f3f',
	regRise = '#333844',
	regLone = '#3d2a2a';
var mapScale = 2.7;

// ENUM for common ID lookup
var idEnum = Object.freeze({
	CalMil: 500001,
	MinMil: 500002,
	MarMil: 500003,
	GalMil: 500004
});

var killColor = Object.freeze({
	RED: 'class="kill-red"',
	GREEN: 'class="kill-green"',
	LGREEN: 'class="kill-light-green"',
	BLUE: 'class="kill-blue"',
	LBLUE: 'class="kill-light-blue"',
	GREY: 'class="kill-grey"',
	LGREY: 'class="kill-light-grey"',
	WHITE: 'class="kill-white"',
	GALMIL: 'class="kill-green"',
	CALMIL: 'class="kill-light-blue"',
	MINMIL: 'class="kill-orange"',
	MARMIL: 'class="kill-gold"'
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