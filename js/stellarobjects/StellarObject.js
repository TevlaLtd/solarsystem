// StellarObject class
// initialize with a characteristics object and a parent
// characteristics define orbital and physical properties
// parent refer to the object that the StellarObject is orbiting
var StellarObject = function(stellarNode, parent) {
    
    var n, shorthand, value;
    
    //referential
    this.parent 	=	parent;		// Parent Object
    
    for (n in stellarNode) {
        if (stellarNode[n]["@attributes"]){
            shorthand   = stellarNode[n]["@attributes"].shorthand;
//            console.log("shorthand: " +shorthand);
        }
        
        if (stellarNode[n]["#text"]){
            value   = stellarNode[n]["#text"];
//            console.log("value: " +value);
        }
        
        if (shorthand && value){
            this[shorthand] = value;
//            console.log(shorthand, value);
        }
        
    }
    
    this.sat = stellarNode.satellites.stellarobject;
    
    console.log('StellarObject ' + this.n +  ' instantiated');
}

StellarObject.prototype.init = function () {
    //graphical representation
    this.graphic = new StellarGraphic(this.n);    
}

StellarObject.prototype.render = function () {
    this.graphic.render();
}


StellarObject.prototype.toString = function () {
    var log = "";
    log += "::: " + this.n + " :::\n";
    
    if (this.parent)
        log += "Orbit around " + this.parent + "\n";
    
    log += "- Has " + this.sat.length + " satellites.\n"
    
    return log;
    
}

StellarObject.createCharacteristic = function(stellarNode) {
    
    var characteristic = {};
    
    
 
    return characteristic;
    
}



//console.log(objson.system.star.satellites.stellarobject.name["#text"]);
//console.log(objson.system.star.satellites.stellarobject.name["@attributes"].shorthand);
//console.log(objson.system.star.satellites.stellarobject.name["@attributes"].unit);
