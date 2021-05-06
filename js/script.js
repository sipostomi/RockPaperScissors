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

let playerCounting = 0; /* Lettel működik csak, consttal nem */
let machineCounting = 0;

//Választások

function stoneSelect(){
	image.setAttribute("src", "img/kő.png");
	const valami = machineSelect();
	image2.setAttribute("src", "img/"+valami+".png");
	gameText.innerText = "Te: kő, ellenfeled: " + valami;
	koEllenorzes(valami);
}

function paperSelect(){
	image.setAttribute("src", "img/papír.png");
	const valami = machineSelect();
	image2.setAttribute("src", "img/"+valami+".png");
	gameText.innerText = "Te: papír, ellenfeled: " + valami;
	papirEllenorzes(valami);
}

function scissorsSelect(){
	image.setAttribute("src", "img/olló.png");
	const valami = machineSelect();
	image2.setAttribute("src", "img/"+valami+".png");
	gameText.innerText = "Te: olló, ellenfeled: " + valami;
	olloEllenorzes(valami);
}

function machineSelect(){
	const lehetosegek = ["kő", "papír", "olló"];
	return lehetosegek[Math.floor(Math.random()*lehetosegek.length)];
}

// Ellenőrzések

function koEllenorzes(valami){ 
	if(valami==="kő"){
		resultText.innerText = "Döntetlen";
	} else if (valami ==="papír"){
		resultText.innerText = "Vesztettél!";
		machineCounting++;
		mcounter.innerText = machineCounting + " pont"; 
	} else {
		resultText.innerText ="Győztél!";
		playerCounting++;
		pcounter.innerText= playerCounting + " pont";
	}
}

function papirEllenorzes(valami){ 
	if(valami==="papír"){
		resultText.innerText = "Döntetlen";
	} else if (valami ==="olló"){
		resultText.innerText = "Vesztettél!";
		machineCounting++;
		mcounter.innerText = machineCounting + " pont"; 
	} else {
		resultText.innerText ="Győztél!";
		playerCounting++;
		pcounter.innerText= playerCounting + " pont";
	}
}

function olloEllenorzes(valami){
	if(valami==="olló"){
		resultText.innerText = "Döntetlen";
	} else if (valami ==="kő"){
		resultText.innerText = "Vesztettél!";
		machineCounting++;
		mcounter.innerText = machineCounting + " pont"; 
	} else {
		resultText.innerText ="Győztél!";
		playerCounting++;
		pcounter.innerText= playerCounting + " pont";
	}
}