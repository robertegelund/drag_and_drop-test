const L = document.querySelector("#L");
const E = document.querySelector("#E");
const D = document.querySelector("#D");
const E_to = document.querySelector("#E_to");
const dropZone = document.querySelector("#dropZone");
const poeng = document.querySelector("#poeng");
const dragLetters = document.querySelectorAll(".dragLetters")

// Lager Wordfeud-brett med en for-loop
for (i=0; i<16; i++) {
dropZone.innerHTML += `
    <div class="ruter"></div>`}
const ruter = dropZone.querySelectorAll(".ruter");

// Ta opp brikke og starte dataoverføring
function startDraggingLetter(evt) {
   evt.dataTransfer.setData("text", evt.target.id);
}

// Lov til å droppe bokstaver på brettet, men ikke oppå andre bokstaver
function allowDroppingLetter(evt) {
    const me = evt.target;
    if(me.className === "ruter") {
        evt.preventDefault();
    }   
}

// Bokstavene droppes på brettet (dataoverføring)
function dropLetter (evt) {
    evt.preventDefault();
   
    const idDraggingLetter = evt.dataTransfer.getData("text");
    const draggingLetter = document.getElementById(idDraggingLetter);
    evt.target.appendChild(draggingLetter);

    const inpPoint = dropZone.querySelectorAll(".dragLetters");
    let sum = 0;
    for (let i=0; i<inpPoint.length; i++) {
        const valg = Number(inpPoint[i].dataset.points);
        sum += valg;
        poeng.innerText = `Du har nå ${sum} poeng`;
    }
}

L.addEventListener("dragstart", startDraggingLetter);
E.addEventListener("dragstart", startDraggingLetter);
D.addEventListener("dragstart", startDraggingLetter);
E_to.addEventListener("dragstart", startDraggingLetter);

// Hver rute blir til en dropzone
for (rute of ruter) {
    rute.addEventListener("dragover", allowDroppingLetter);
    rute.addEventListener("drop", dropLetter);
}