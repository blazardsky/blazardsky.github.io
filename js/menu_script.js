function toggleMenu(){
	var NAV = document.getElementById("menu");

	NAV.classList.toggle("flex-spcbtwn");
	NAV.classList.toggle("hidden-mobile");
	NAV.classList.toggle("flex-column");
	NAV.classList.toggle("flex-center");
	
	var MENU = document.getElementById("toggle-menu");
	var OPEN = "multimedia/png/open.png";
	var CLOSE = "multimedia/png/close.png";
	
	if(MENU.src = OPEN){ 
		MENU.src = CLOSE;
	} else if (MENU.src = CLOSE){
		MENU.src = OPEN;
	} else { MENU.src = OPEN; };
}