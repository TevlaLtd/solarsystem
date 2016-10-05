var REAL        = "real";
var RELATIVE    = "relative";
var FALSESCALE    = "falseScale";

var RELATIVE_SCALE = 0.0005;

var size=FALSESCALE;


/****************************************************************/
/*******************   DIMENSIONS   *****************************/
/****************************************************************/
// util function to calculate perspective in order to display within the same screen with non to scale values or relative size or real size (almost unusable)
function relativeDimensions (value) {
    return this[size + "Size"](value);
}

function realSize(value) {
    return value;
}

function relativeSize(value){
    return value*RELATIVE_SCALE;
}

function falseScaleSize(value){
    var FALSE_SCALE = [1, 3, 6,12,25,50,100];
    
    //earth is set to 30 pixels, everything else is a ratio based on the equatorial radius
    
    var ratio = value / 6378;
    
    //anything smaller than half of earth will be a moon
    
    if (ratio<0.3)
        return FALSE_SCALE[0];
    
    if (ratio>=0.1 && ratio<0.3)
        return FALSE_SCALE[1];
    
    if (ratio>=0.3 && ratio<0.5)
        return FALSE_SCALE[2];
    
    if (ratio>=0.5 && ratio<1)
        return FALSE_SCALE[3];
    
    if (ratio>=1 && ratio<3)
        return FALSE_SCALE[4];

    if (ratio>=3 && ratio<10)
        return FALSE_SCALE[5];    

    if (ratio>=10)
        return FALSE_SCALE[6];

}




/****************************************************************/
/*******************    DISTANCES    ****************************/
/****************************************************************/

function relativeDistance (value) {
    return this[size + "Distance"](value);
}

function realDistance(value) {
    return value;
}

function falseScaleDistance(value){
    var FALSE_DIMENSION = [50, 100, 150, 200, 250, 300, 350];
    
    var ratio = value / 149598023;
    
    //anything smaller than half of earth will be a moon
    
    if (ratio<0.3)
        return FALSE_DIMENSION[0];
    
    if (ratio>=0.1 && ratio<0.3)
        return FALSE_DIMENSION[1];
    
    if (ratio>=0.3 && ratio<0.5)
        return FALSE_DIMENSION[2];
    
    if (ratio>=0.5 && ratio<1)
        return FALSE_DIMENSION[3];
    
    if (ratio>=1 && ratio<3)
        return FALSE_DIMENSION[4];

    if (ratio>=3 && ratio<10)
        return FALSE_DIMENSION[5];    

    if (ratio>=10)
        return FALSE_DIMENSION[6];
}