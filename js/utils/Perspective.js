var REAL        = "real";
var RELATIVE    = "relative";
var FALSESCALE    = "falseScale";

var RELATIVE_SCALE = 0.0005;
var FALSE_SCALE = [100,50,25,12];

var size=RELATIVE_SCALE;



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
    return 100;
}