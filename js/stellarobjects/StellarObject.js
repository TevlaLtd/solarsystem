// StellarObject class
// initialize with a name and a characteristics object
var StellarObject = function(characteristics, parent){
	
    //referential
    this.ps 	=	parent;		// Parent Object
    
    // nominative values
	this.n		=	name; 		// Name

    // orbital characteristics
	this.p		=	0;			// Periapsis
	this.a		=	0;			// Apoapsis
	this.sma	=	0;			// Semi Major Axis
	this.op		=	0;			// Orbital Period
	this.oe		=	0;			// Orbital Eccentricity
	this.aos	=	0;			// Average Orbital Speed
	this.ma		=	0;			// Mean Anomaly
	this.oi		=	0;			// Orbital Inclination
	this.lan	=	0;			// Longitude of the Ascending Node
	this.ap		=	0;			// Argument of Periapsis
    
    // physical characteristics
    this.er     =   0;          // Equatorial radius

    
    
	this.init = function(){
		console.log(':: init :: ' + this.name);	
	}

}