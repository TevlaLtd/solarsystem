(function(){

	var container;
	var space;

	var _data;

	window.onload = init;


	function init(){
		console.log('init');

		container = document.getElementById('container');
		space = document.getElementById('space');

		setCanvas100Percent();
        
        //load data xml file and convert to json
        var objson = xml2json.fromFile('js/stellarobjects/data/SolarSystem.xml');
        console.log(objson.system.star.satellites.stellarobject.name["#text"]);
        console.log(objson.system.star.satellites.stellarobject.name["@attributes"].shorthand);
        console.log(objson.system.star.satellites.stellarobject.name["@attributes"].unit);
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