(function(){

	var container;
	var space;
	var context;

	var _data;
    
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
//        console.log(sol.toString());
        
        sol.init();
        
        var success = initScene();
        
        if (success)
            setInterval(renderScene, 1000);
         
	}
    
    
    //init the canvas for future drawing
    function initScene(){
        context = space.getContext('2d');
        return (context!=null);
    }
    
    function renderScene() {
//        sol.render();
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