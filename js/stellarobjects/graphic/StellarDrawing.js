function drawStellarGraphic(name, colour, radius) {
    
    var c=document.createElement("CANVAS");
    c.width = radius*2*SCALE_SOLAR_SYSTEM;
    c.height = radius*2*SCALE_SOLAR_SYSTEM;
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(radius*SCALE_SOLAR_SYSTEM, radius*SCALE_SOLAR_SYSTEM, radius*SCALE_SOLAR_SYSTEM, 0, 2 * Math.PI, false);
    ctx.fillStyle="rgb(" + colour + ")";
//    ctx.strokeStyle = "green";
//    ctx.strokeRect(0,0,radius*2*SCALE_SOLAR_SYSTEM, radius*2*SCALE_SOLAR_SYSTEM);
//    ctx.stroke();
    ctx.fill();
    ctx.fillStyle="black";
    ctx.font = "48px serif";
    ctx.textAlign="center";
    ctx.fillText (name, radius*SCALE_SOLAR_SYSTEM, radius*SCALE_SOLAR_SYSTEM);    
    
    var imgdata = ctx.getImageData(0,0,radius*2*SCALE_SOLAR_SYSTEM, radius*2*SCALE_SOLAR_SYSTEM);
    return imgdata;
    
}