(function(){

	var container;
	var space;

	var _sol;

	window.onload = init;


	function init(){
		console.log('init');

		container = document.getElementById('container');
		space = document.getElementById('space');

		_sol = new StellarObject('Sol');
		_sol.init();

		setCanvas100Percent();
	}


	function setCanvas100Percent(){
		space.width = container.offsetWidth;
		space.height = container.offsetHeight;		
	}

})(this, window);