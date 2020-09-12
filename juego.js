alert("hola, ¿listo para jugar?");
var piedra = document.getElementById("p");
var papel = document.getElementById("pa");
var tijera = document.getElementById("t");
var tu;
var robot;

piedra.addEventListener('click', rock);
papel.addEventListener('click', paper);
tijera.addEventListener('click', cut);
function ganador() {
    robot = Math.floor(Math.random() * (4 - 1)) + 1;
    if (tu == 1 && robot == 3) {
        alert("ganaste");
    }
    else if (tu == 1 && robot == 2) {
        alert("perdiste");
    }
    else if (tu == 1 && robot == 1) {
        alert("empate");
    }
    else if (tu == 2 && robot == 1) {
        alert("ganaste");
    }
    else if (tu == 2 && robot == 3) {
        alert("perdiste");
    }
    else if (tu == 2 && robot == 2) {
        alert("empate");
    }
    else if (tu == 3 && robot == 2) {
        alert("ganaste");
    }
    else if (tu == 3 && robot == 1) {
        alert("perdiste");
    }
    else if (tu == 3 && robot == 3) {
        alert("empate");
    }
}
function rock() {
    tu = 1;
    ganador();
    alert("intentalo otravez");
}
function paper() {
    tu = 2;
    ganador();
    alert("intentalo otravez");
}
function cut() {
    tu = 3;
    ganador();
    alert("intentalo otravez");
}