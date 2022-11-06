//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX
// alert("test");//COMMENT OUT AS SOON AS YOU KNOW YOU ARE CONNECTED!!!!

//LISTEN FOR load EVENT
window.onload = pageReady;
function pageReady() {
//'WRAPPER' FUNCTION FOR DOM LOGIC

	//GET DOM ELEMENTS WE'LL NEED
		var mysteryBox = document.getElementById("mysteryBox");
		var buttonBox = document.getElementById("buttonBox");

	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function askUser() {
		var userResponse = confirm("Do you want to see something?");
		if (userResponse === true) {
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}	

	//FUNCTION TO CHANGE buttonBox
	function changeButton() {
		buttonBox.style.width = "600px";
		buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
		buttonBox.style.backgroundColor = "orange";
	}

	//SETUP LISTENERS
	mysteryBox.onmouseover = askUser;
	buttonBox.onclick = changeButton;

}//END onload FUNCTION