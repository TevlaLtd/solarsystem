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
        
        //create the centre of the solar system from the xml
        addToScene(objson.system.stellarobject);
        
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
        var o;
        // loop through all the StellarGraphic objects and render them
        for (o in _renders) {
//            context.putImageData(_renders[o].render());
            context.putImageData(_renders[o].imagedata, _renders[o].x, _renders[o].y);
        }
    }
    
    function addToScene(obj, parent) {
        
        if (parent === undefined){
            parent = null;
        }
        
        //we need to test that the object passed is a stellar object
        var so = new StellarObject(obj, parent);
        so.init();

        console.log(so.toString())
        
        _renders[so.id] = so.graphic;
        //once the object has been added to the scene, we add its satellites
        for (var sat in so.sat) {
            addToScene(so.sat[sat], so);
        }
        
    }
    
    function removeFromScene(obj){
        delete _renders[obj.id];
    }
    

	function setCanvas100Percent(){
		space.width = container.offsetWidth;
		space.height = container.offsetHeight;		
	}

})(this, window);