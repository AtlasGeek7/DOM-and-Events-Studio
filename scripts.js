window.addEventListener("load", function() {
	let takeOffBtn = document.getElementById("takeoff");
	let status = document.getElementById("flightStatus");
	let shuttleBg = document.getElementById("shuttleBackground");
	let shuttleH = document.getElementById("spaceShuttleHeight");
	let height = parseInt(shuttleH.innerHTML);
	let response = false;
	// Initializing rocket coordinates...
	let xPos = -60;
	let yPos = 240;
	let val;
	takeOffBtn.addEventListener("click", function() {
		response = window.confirm("Confirm that the shuttle is ready for takeoff.");
		if (response) {
			rocket.style.top = "240px"; 
			rocket.style.left = "-60px";
			status.innerHTML = "Shuttle in flight.";
			shuttleH.innerHTML = height;
			val = setInterval(moveUp, 1000);
    	}
    });
	let landBtn = document.getElementById("landing");
	landBtn.addEventListener("click", function() {
	clearInterval(val);
		window.alert("The shuttle is landing. Landing gear engaged.");
		status.innerHTML = "The shuttle has landed.";
		//shuttleBg.style.background = "green";
		shuttleH.innerHTML = "0";
		// Rocket on ground.
		rocket.style.top = "240px"; 
		rocket.style.left = "-60px";
		xPos = -60;
		yPos = 240;
		height = 0;
    });
	let abortBtn = document.getElementById("missionAbort");
	abortBtn.addEventListener("click", function() {
		response = window.confirm("Confirm that you want to abort the mission.");
		if (response) {
		clearInterval(val);
			status.innerHTML = "Mission aborted.";
			//shuttleBg.style.background = "green";
			shuttleH.innerHTML = "0";
		// Rocket on ground.
		rocket.style.top = "240px"; 
		rocket.style.left = "-60px";
		xPos = -60;
		yPos = 240;
		height = 0;
    	}  	
    });
	let upBtn = document.getElementById("upButton");
	let dwnBtn = document.getElementById("downButton");
	let rtBtn = document.getElementById("rightButton");
	let lftBtn = document.getElementById("leftButton");
	let rocket = document.getElementById("rocket");
	upBtn.addEventListener("click", function() {
		moveUp() 
    });
	dwnBtn.addEventListener("click", function() {
	clearInterval(val);
		if (yPos <= 238) { // Keeping the rocket from flying off of the background.
			yPos += 10;
			rocket.style.top =  yPos + "px";
			height -= 10000;
			shuttleH.innerHTML = height;
		}
    });    
	lftBtn.addEventListener("click", function() {
		let style = getComputedStyle(shuttleBg);
		let width = parseInt(style.getPropertyValue("width"));
		if (xPos > 20 - width / 2 ) { // Keeping the rocket from flying off of the background.
			xPos -= 10;
			rocket.style.left =  xPos + "px";
		}
    });
	rtBtn.addEventListener("click", function() {
		let style = getComputedStyle(shuttleBg);
		let width = parseInt(style.getPropertyValue("width"));
		if (xPos < width / 2 - 10) { // Keeping the rocket from flying off of the background.
			xPos += 10;
			rocket.style.left =  xPos + "px";
		}	
    }); 
	function moveUp() {
		if (yPos >= 3) { // Keeping the rocket from flying off of the background.		
			yPos -= 10;
			rocket.style.top =  yPos + "px";
			height += 10000;
			shuttleH.innerHTML = height;
		} 
	}	
});

