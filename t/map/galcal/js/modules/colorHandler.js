/* global nodes,colors,sleep */

// highlight node based on new kill
var flashNodeColor = function(id, systemname, killID, color){
    lockHighlight(id, systemname+killID,color);
    setTimeout(function(){
        lockEndHighlight(id, systemname+killID);
    },500);
};


var updateBaseColor = function(id, color){
    if(colors[id].stack == null || colors[id].stack.length < 1){
        // go ahead and change the node and set base color
        colors[id].base = color;
        nodes.update([{id:id, color:{background:color}}]);
    } else {
        // someone has highlighted so lets just set the base color so they can return
        // it correctly when the finish.
        colors[id].base = color;
    }
};

var startHighlight = function(id, caller, color){
    // caller should be unique
        // killmail flash = systemname+killID
        // Killmail highlight = systemname+systemid
        // system index highlight = systemid
    
    var returnColor = '';
    var length = 0;
    
    // if stack doesn't exist create it
    if(colors[id].stack == null){
        colors[id].stack = [];    
    }
    
    length = colors[id].stack.length;
    
    //check stack length. If Someone is there then grab their color, otherwise use base color.
    if(length > 0){
        returnColor = colors[id].stack[length - 1].color;
    } else {
        // 0 signifies to use the base color, since the base color could technically change while we are highlighting, we want to reference the 
        // possibly changed color. Not what it used to be. So use 0 flag to represent going and grabbing the base color.
        returnColor = 0;
    }
    
    // set myself up as a color identifier
    var myself = {};
    myself.id = id;
    myself.caller = caller;
    myself.color = color;
    myself.returnColor = returnColor;
    
    // push myself onto the stack. 
    colors[id].stack.push(myself); 
    
    // update the map
    nodes.update([{id:id, color:{background:myself.color}}]);
};


var endHighlight = function(id, caller){
    var length = colors[id].stack.length;
    
    // grab the color I am returning too
    var returnColor = colors[id].stack[length - 1].returnColor;
    
    if(returnColor != 0){
        // not last dude so just update my return color
        //console.log('return');
        nodes.update([{id:id, color:{background:returnColor}}]);    
    } else {
        // last dude so get base color and use it.
        //console.log('base');
        returnColor = colors[id].base;
        nodes.update([{id:id, color:{background:returnColor}}]);
    }
    colors[id].stack.pop();
    // hey I worked so let's get out of here
    return true;
};

var checkSystemHash = function(id){
    if(colors[id] == null){
        colors[id] = {};
		colors[id].lock = false;
    }
};

var checkCanIEnd = function(id, caller){
    var length = colors[id].stack.length;
    if(colors[id].stack[length - 1].caller == caller) {
        //console.log('yes I can end', caller, colors[id].stack[length - 1].caller);
        return true;
    } else {
        //console.log("no I can't end", caller, colors[id].stack[length - 1].caller);
        return false;
    }
};

var lockEndHighlight = function(id,caller){
    var intervalId = setInterval(function(){
       if(colors[id].lock == false && checkCanIEnd(id,caller)) {
            colors[id].lock == true;
            endHighlight(id,caller)
            colors[id].lock = false;
            clearInterval(intervalId);
       }
    },100);
};


var lockHighlight = function(id, caller, color){
    // check if someone is currently calculating themselves... if not move forward, if so wait...
    checkSystemHash(id); //
    var intervalId = window.setInterval(function(){
       if(colors[id].lock == false) {
            colors[id].lock = true;
            startHighlight(id, caller, color);
            colors[id].lock = false;
            window.clearInterval(intervalId);
       }
    },100);
};

var lockUpdateBaseColor = function(id,color){
    checkSystemHash(id); //
    var intervalId = window.setInterval(function(){
       if(colors[id].lock == false) {
            colors[id].lock = true;
            updateBaseColor(id,color);
            colors[id].lock = false;
            window.clearInterval(intervalId);
       }
    },100);
};