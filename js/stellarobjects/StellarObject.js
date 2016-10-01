// StellarObject class
// initialize with a characteristics object and a parent
// characteristics define orbital and physical properties
// parent refer to the object that the StellarObject is orbiting
var StellarObject = function(characteristics, parent) {
    
    //referential
    this.parent 	=	parent;		// Parent Object
    
    // nominative values
	this.n		=	characteristics.n; 		// Name

    // orbital characteristics
	this.p		=	characteristics.p;			// Periapsis
	this.a		=	characteristics.a;			// Apoapsis
	this.sma	=	characteristics.sma;		// Semi Major Axis
	this.op		=	characteristics.op;			// Orbital Period
	this.oe		=	characteristics.oe;			// Orbital Eccentricity
	this.aos	=	characteristics.aos;		// Average Orbital Speed
	this.ma		=	characteristics.ma;			// Mean Anomaly
	this.oi		=	characteristics.oi;			// Orbital Inclination
	this.lan	=	characteristics.lan;		// Longitude of the Ascending Node
	this.ap		=	characteristics.ap;			// Argument of Periapsis
    
    // physical characteristics
    this.er     =   characteristics.er;         // Equatorial radius
    
    // spacial characteristics
    this.sat    =   characteristics.sat;        // Array of satellites

    console.log('StellarObject "' + this.n +  '" instantiated');

}

StellarObject.createCharacteristic = function(stellarNode) {
    
    var characteristic = {};
    
    var shorthand, value;
    
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
            characteristic[shorthand] = value;
//            console.log(shorthand, value);
        }
        
    }
 
    return characteristic;
    
}



//console.log(objson.system.star.satellites.stellarobject.name["#text"]);
//console.log(objson.system.star.satellites.stellarobject.name["@attributes"].shorthand);
//console.log(objson.system.star.satellites.stellarobject.name["@attributes"].unit);
