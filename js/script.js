const resultText = document.getElementById("result-text");
const gameText = document.getElementById("game-text");
const ko = document.getElementById("stone");
const papir = document.getElementById("paper");
const ollo = document.getElementById("scissors");
const image = document.getElementById("player-select-image");
const image2 = document.getElementById("machine-select-image");
const pcounter = document.getElementById("player-counter");
const mcounter = document.getElementById("machine-counter");

ko.addEventListener("click", stoneSelect);
papir.addEventListener("click", paperSelect);
ollo.addEventListener("click", scissorsSelect);

let playerCounting = 0; /* It works only let */
let machineCounting = 0;

/* Choice */

function stoneSelect(){
	image.setAttribute("src", "img/kő.png");
	const machSel = machineSelect();
	image2.setAttribute("src", "img/"+machSel+".png");
	gameText.innerText = "Te: kő, ellenfeled: " + machSel;
	koEllenorzes(machSel);
}

function paperSelect(){
	image.setAttribute("src", "img/papír.png");
	const machSel = machineSelect();
	image2.setAttribute("src", "img/"+machSel+".png");
	gameText.innerText = "Te: papír, ellenfeled: " + machSel;
	papirEllenorzes(machSel);
}

function scissorsSelect(){
	image.setAttribute("src", "img/olló.png");
	const machSel = machineSelect();
	image2.setAttribute("src", "img/"+machSel+".png");
	gameText.innerText = "Te: olló, ellenfeled: " + machSel;
	olloEllenorzes(machSel);
}

function machineSelect(){
	const lehetosegek = ["kő", "papír", "olló"];
	return lehetosegek[Math.floor(Math.random()*lehetosegek.length)];
}

/* Check */

function koEllenorzes(machSel){ 
	if(machSel==="kő"){
		resultText.innerText = "Döntetlen";
	} else if (machSel ==="papír"){
		resultText.innerText = "Vesztettél!";
		machineCounting++;
		mcounter.innerText = machineCounting + " pont"; 
	} else {
		resultText.innerText ="Győztél!";
		playerCounting++;
		pcounter.innerText= playerCounting + " pont";
	}
}

function papirEllenorzes(machSel){ 
	if(machSel==="papír"){
		resultText.innerText = "Döntetlen";
	} else if (machSel ==="olló"){
		resultText.innerText = "Vesztettél!";
		machineCounting++;
		mcounter.innerText = machineCounting + " pont"; 
	} else {
		resultText.innerText ="Győztél!";
		playerCounting++;
		pcounter.innerText= playerCounting + " pont";
	}
}

function olloEllenorzes(machSel){
	if(machSel==="olló"){
		resultText.innerText = "Döntetlen";
	} else if (machSel ==="kő"){
		resultText.innerText = "Vesztettél!";
		machineCounting++;
		mcounter.innerText = machineCounting + " pont"; 
	} else {
		resultText.innerText ="Győztél!";
		playerCounting++;
		pcounter.innerText= playerCounting + " pont";
	}
}