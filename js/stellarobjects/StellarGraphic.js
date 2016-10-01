// StellarGraphic class
// will render the StellarObject that owns it
var StellarGraphic = function(name) {
    this.n = name;
    
    this.x = 0;
    this.y = 0;
    this.z = 0;
    
    this.imagedata		=	null;
    
    console.log('StellarGraphic_' + this.n +  ' instantiated');

}

StellarGraphic.prototype.toString = function () {
    var log = "";
    log += "::: StellarGraphic_" + this.n + " :::\n";
    log += "(" + this.x + "),(" + this.y + "),(" + this.z + ") :::\n";
    
    return log;
    
}

StellarGraphic.prototype.render = function() {
    console.log("render graphic for " + this.n);
}