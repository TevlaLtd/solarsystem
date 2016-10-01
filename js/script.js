var SCALE_SOLAR_SYSTEM = 0.0005;
var container;
var space;
var context;

(function(){

	var _data;
    
    //array that will store all the objects that needs redrawing
    var _renders=[];
    
    var sol;

	window.onload = init;


	function init(){
		console.log('init');

		container = document.getElementById('container');
		space = document.getElementById('space');

		setCanvas100Percent();
        
        //load data xml file and convert to json
        var objson = xml2json.fromFile('js/stellarobjects/data/SolarSystem.xml');
        
        //create the sun object from the xml
        sol = new StellarObject(objson.system.stellarobject, null);
        sol.init();
        
        addToScene(sol);
        
        var success = initScene();
        
        if (success)
            renderScene();
//            setInterval(renderScene, 1000);
	}
    
    
    //init the canvas for future drawing
    function initScene(){
        context = space.getContext('2d');
        return (context!=null);
    }
    
    function renderScene() {
        for (o in _renders){
            console.log(_renders[o].imagedata);
            context.putImageData(_renders[o].imagedata, _renders[o].x, _renders[o].y);
        }
    }
    
    function addToScene(obj){
        _renders[obj.id] = obj.graphic;
    }
    
    function removeFromScene(obj){
        delete _renders[obj.id];
    }    

    
    function handleJSONload(xml) {
        console.log("solar system loaded");
        var xmlDoc = xml.responseXML;
        console.log(xmlDoc)
        
    }    
    

	function setCanvas100Percent(){
		space.width = container.offsetWidth;
		space.height = container.offsetHeight;		
	}

})(this, window);