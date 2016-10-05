// StellarGraphic class
// will render the StellarObject that owns it
var StellarGraphic = function(name, colour, radius) {
    this.n = name;
    
    this.c = colour;
    
    this.er = radius;

    this.drawStellarGraphic(name, this.c, this.er);
    
    this.width = this.height = relativeDimensions(this.er)*2;
    
//    console.log('StellarGraphic_' + this.n +  ' instantiated');

}

StellarGraphic.prototype.drawStellarGraphic = function (name, colour, radius) {
    
    var c=document.createElement("CANVAS");
    c.width = relativeDimensions(radius)*2;
    c.height = relativeDimensions(radius)*2;
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(relativeDimensions(radius), relativeDimensions(radius), relativeDimensions(radius), 0, 2 * Math.PI, false);
    ctx.fillStyle="rgb(" + colour + ")";
    ctx.fill();
//    ctx.fillStyle="black";
//    ctx.strokeStyle="white";
//    ctx.fillStyle="white";
//    ctx.strokeStyle="black";    
//    ctx.font = "40px serif";
//    ctx.textAlign="center";
//    ctx.fillText(name, relativeDimensions(radius), relativeDimensions(radius));    
//    ctx.strokeText(name, relativeDimensions(radius), relativeDimensions(radius));
    
    this.imagedata = ctx.getImageData(0,0,relativeDimensions(radius)*2, relativeDimensions(radius)*2);
}    