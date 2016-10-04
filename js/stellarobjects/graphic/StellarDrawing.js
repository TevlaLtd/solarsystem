function drawStellarGraphic(name, colour, radius) {
    
    var c=document.createElement("CANVAS");
    c.width = relativeDimensions(radius)*2;
    c.height = relativeDimensions(radius)*2;
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(relativeDimensions(radius), relativeDimensions(radius), relativeDimensions(radius), 0, 2 * Math.PI, false);
    ctx.fillStyle="rgb(" + colour + ")";
    ctx.fill();
//    ctx.fillStyle="black";
//    ctx.font = "48px serif";
//    ctx.textAlign="center";
//    ctx.fillText (name, relativeDimensions(radius), relativeDimensions(radius));    
    
    var imgdata = ctx.getImageData(0,0,relativeDimensions(radius)*2, relativeDimensions(radius)*2);
    return imgdata;
}