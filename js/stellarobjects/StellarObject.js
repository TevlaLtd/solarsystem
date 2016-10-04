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
    
    //unique ID for each stellarObject
    this.id = "SO_" + this.n + "_" + Math.floor(Math.random()*9999999); 

    this.sat = [];
    
    // if the stellar object has got satellites
    if (stellarNode.satellites.stellarobject){
        // if the node is an array we instantiate it to this.sat else we have a unique object that we add to the sat array
        if (stellarNode.satellites.stellarobject.constructor === Array)
            this.sat = stellarNode.satellites.stellarobject;
        else this.sat.push(stellarNode.satellites.stellarobject);
    }
    
    console.log('StellarObject ' + this.n +  ' instantiated');
}

StellarObject.prototype.init = function () {
    //graphical representation, pass name(n), colour(c) and equatorial radius(er)
    this.graphic = new StellarGraphic(this.n, this.c, this.er, this.parent);
    
    if (this.parent==null){
        this.graphic.x = space.width / 2 - relativeDimensions(this.er);
        this.graphic.y = space.height / 2 - relativeDimensions(this.er);
    }
}

StellarObject.prototype.toString = function () {
    var log = "";
    log += "::: " + this.n + " :::\n";
    
    if (this.parent)
        log += "Orbit around " + this.parent + "\n";
    
    log += "- Has " + this.sat.length + " satellites.\n"
    
    return log;
    
}