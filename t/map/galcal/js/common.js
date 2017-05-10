var moneyFormat = function(num) 
{
    var pnum = num;
    num = num.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    // start large and work down
    if(pnum > 999999999) { // billions
        num = num.substring(0,num.length - 11).replace(',', '.') + 'b';
    } else if(pnum > 999999) { // millions
        num = num.substring(0,num.length - 8).replace(',','.') + 'm';
    } else if(pnum > 999) { // thousands
        num = num.substring(0,num.length - 4).replace(',','.') + 'k';
    } else { // hundreds
        num = num;
    }
    return num;
};

var changeArrow = function(change){
    if(change > 0){
        return '\u25B2'
    } else if(change < 0) {
        return '\u25BC'
    } else {
        return '='
    }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function generateUUID () { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

var queueID = "evemap" + generateUUID();