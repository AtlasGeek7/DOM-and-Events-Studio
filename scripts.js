// Write your JavaScript code here.
// 1.
window.addEventListener("load", function() {
	// 2.
	let takeOffBtn = document.getElementById("takeoff");
	let status = document.getElementById("flightStatus");
	let shuttleBg = document.getElementById("shuttleBackground");
	let shuttleH = document.getElementById("spaceShuttleHeight");
	let height = parseInt(shuttleH.innerHTML);
	let response = false;
	// Initializing rocket coordinates...
	let xPos = 0;
	let yPos = 252;
	takeOffBtn.addEventListener("click", function() {
	// 2.1
		response = window.confirm("Confirm that the shuttle is ready for takeoff.");
		if (response) {
	// 2.2
			status.innerHTML = "Shuttle in flight.";
	// 2.3
			shuttleBg.style.background = "blue";
	// 2.4
			height += 10000;
			shuttleH.innerHTML = height;
			rocket.style.top =  yPos - 10 + "px";
    	}
    });
    // 3.
	let landBtn = document.getElementById("landing");
	landBtn.addEventListener("click", function() {
	// 3.1
		window.alert("The shuttle is landing. Landing gear engaged.");
	// 3.2
		status.innerHTML = "The shuttle has landed.";
	// 3.3
		shuttleBg.style.background = "green";
	// 3.4
		shuttleH.innerHTML = "0";
		// Rocket on ground.
		rocket.style.top = "252px"; 
		rocket.style.left = "0px";
		xPos = 0;
		yPos = 252;
		height = 0;
    });
    // 4.
	let abortBtn = document.getElementById("missionAbort");
	abortBtn.addEventListener("click", function() {
	// 4.1
		response = window.confirm("Confirm that you want to abort the mission.");
		if (response) {
	// 4.2
			status.innerHTML = "Mission aborted.";
	// 4.3
			shuttleBg.style.background = "green";
	// 4.4
			shuttleH.innerHTML = "0";
	// Bonus:
		// Rocket on ground.
		rocket.style.top = "252px"; 
		rocket.style.left = "0px";
		xPos = 0;
		yPos = 252;
		height = 0;
    	}  	
    });
    // 5.
    // 5.1 & 5.2 & Bonus Mission
	let upBtn = document.getElementById("upButton");
	let dwnBtn = document.getElementById("downButton");
	let rtBtn = document.getElementById("rightButton");
	let lftBtn = document.getElementById("leftButton");
	let rocket = document.getElementById("rocket");
	upBtn.addEventListener("click", function() {
		if (yPos >= 0) { // Keeping the rocket from flying off of the background.
			yPos -= 10;
			rocket.style.top =  yPos + "px";
			height += 10000;
			shuttleH.innerHTML = height;
		}
    });
	dwnBtn.addEventListener("click", function() {
		if (yPos <= 248) { // Keeping the rocket from flying off of the background.
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
		if (xPos < width / 2 - 20) { // Keeping the rocket from flying off of the background.
			xPos += 10;
			rocket.style.left =  xPos + "px";
		}	
    }); 
});
// Remember to pay attention to page loading!