(function(){

	var container;
	var space;

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
        console.log(sol.toString());
        
return;
        sol.init();
        
        setInterval(renderScene, 1000);
         
	}
    
    
    function renderScene(){
        sol.render();
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