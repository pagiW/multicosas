var header = document.getElementById("head");
var presi = document.getElementById("pressiona");
var state = 0;
var pantalla = window.matchMedia("screen and (max-width: 425px)");
var ione = document.getElementById("n1");
var itwo = document.getElementById("n2");
var boton = document.getElementById("botpres");

pantalla.addEventListener('change', cambio);
boton.addEventListener("click", presionasteP);
function presionasteP() {
    alert(Number(ione.value) + Number(itwo.value));
}
function cambio(evento) {
    if (evento.matches == true) {
        presi.addEventListener('click', presionar);
        header.innerHTML += "<p id='par'></p>";
    }
    else {
        presi.removeEventListener('click', presionar);
        header.innerHTML = '<form class="formulario" id="formulario"><input list="opciones" name="opciones" id="op"><datalist id="opciones"><option value="si"></option><option value="no"></option></datalist><button type="submit" id="boton">seleccionar</button></form>';
        header.style.backgroundColor = "green";
        state = 0;
    }
}
cambio(pantalla);

function presionar() {
    var p = document.getElementById("par");
    if (state == 0) {
        header.style.backgroundColor = "blue";
        p.innerHTML = "BLUE";
        state = 1;
    }
    else {
        header.style.backgroundColor = "green";
        p.innerHTML = "GREEN";
        state = 0;
    }
}
