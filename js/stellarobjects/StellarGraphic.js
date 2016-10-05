// StellarGraphic class
// will render the StellarObject that owns it
var StellarGraphic = function(name, colour, radius) {
    this.n = name;
    
    this.c = colour;
    
    this.er = radius;
    
    this.x = 0;
    this.y = 0;
    this.z = 0;

    this.imagedata		=	drawStellarGraphic(name, this.c, this.er);
    
    this.width = this.height = relativeDimensions(this.er)*2;
    
//    console.log('StellarGraphic_' + this.n +  ' instantiated');

}

StellarGraphic.prototype.toString = function () {
    var log = "";
    log += "::: StellarGraphic_" + this.n + " :::\n";
    log += "(" + this.x + "),(" + this.y + "),(" + this.z + ") :::\n";
    
    return log;
    
}