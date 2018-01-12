/* globals images */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var data = getUrlParameter('i');

if(data != null){
    
    if(data == 'r'){
        var min = 0;
        var max = images.length - 1;
        var selected = Math.floor(Math.random() * (max-min + 1)) + min;
        document.getElementById('img').innerHTML = '<img class="img-responsive" src="' + images[selected].img + '">';
        document.getElementById('link').innerHTML = '<a class="btn btn-lg btn-primary" href="' + images[selected].img + '">Direct Image Link</a>';
    } else {
        document.getElementById('img').innerHTML = '<img src="' + images[data].img + '">';
        document.getElementById('link').innerHTML = '<a class="btn btn-lg btn-primary" href="' + images[data].img + '">Direct Image Link</a>';
    }
}