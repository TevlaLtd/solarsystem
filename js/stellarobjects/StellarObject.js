// StellarObject class
// initialize with a name and a characteristics object
var StellarObject = function(name, parent, characteristics){
	
	this.n		=	name; 		// Name

	this.ps 	=	parent;		// Parent Object

	this.p		=	0;			// Perihelion
	this.a		=	0;			// Aphelion
	this.sma	=	0;			// Semi Major Axis
	this.op		=	0;			// Orbital Period
	this.oe		=	0;			// Orbital Eccentricity
	this.aos	=	0;			// Average Orbital Speed
	this.ma		=	0;			// Mean Anomaly
	this.oi		=	0;			// Orbital Inclination
	this.lan	=	0;			// Longitude of the Ascending Node
	this.ap		=	0;			// Argument of Periapsis

	this.init = function(){
		console.log(':: init :: ' + this.name);	
	}

}