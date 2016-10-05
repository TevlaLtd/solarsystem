// StellarObject class
// initialize with a characteristics object and a parent
// characteristics define orbital and physical properties
// parent refer to the object that the StellarObject is orbiting
var StellarObject = function(stellarNode, parent) {
    
    var n, shorthand, value;
    
    //referential
    this.parent 	=	parent;		// Parent Object of StellarObject type    
    
    this.x = 0;
    this.y = 0;
    this.z = 0; 
    
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
    
    if (this.op!=0){
        this.startingAngle = (currentDay*360/this.op)*Math.PI/180;
//        this.startingAngle = 0*Math.PI/180;

//        console.log("name: ", this.n);
//        console.log("this.op: ", this.op);
//        console.log("this.startingAngle: ", this.startingAngle);
        
    //  speed is calculated as a ratio of the number of degree needed to make a full orbit and the orbital period of the object
        this.speed = (360 / this.op)*DAY;      
    }    
    

    
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
    
    if (this.parent==null) {
        this.x = space.width / 2 - relativeDimensions(this.er);
        this.y = space.height / 2 - relativeDimensions(this.er);
    } else {        
        this.x = (this.parent.x + this.parent.graphic.width/2) - relativeDimensions(this.er) + Math.cos(this.startingAngle)*relativeDistance(this.sma)*2;
        this.y = (this.parent.y + this.parent.graphic.height/2) - relativeDimensions(this.er) + Math.sin(this.startingAngle)*relativeDistance(this.sma)*2;    
    }      
    

}

StellarObject.prototype.increaseRevolution = function () {
    if (this.parent==null) return;
    
    this.startingAngle-=this.speed;
//    this.startingAngle-=0.001;

    this.x = (this.parent.x + this.parent.graphic.width/2) - relativeDimensions(this.er) + Math.cos(this.startingAngle)*relativeDistance(this.sma)*2;
    this.y = (this.parent.y + this.parent.graphic.height/2) - relativeDimensions(this.er) + Math.sin(this.startingAngle)*relativeDistance(this.sma)*2;    
}

StellarObject.prototype.toString = function () {
    var log = "";
    log += "::: " + this.n + " :::\n";
    
    if (this.parent)
        log += "Orbit around " + this.parent.n + "\n";
    
    if (this.sat.length)
        log += "- Has " + this.sat.length + " satellites.\n"
    
    return log;
    
}