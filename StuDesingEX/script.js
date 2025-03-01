function funcionNavBar() {
    var x = document.getElementById("mytopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

function funcionBoton(idImagen) {
    var imagen = document.getElementById(idImagen);
    if (imagen.classList.contains("oculto")) {
        imagen.classList.remove("oculto");
    } else {
        imagen.classList.add("oculto");
    }
}

function limpiarFormulario() {
    document.getElementById("formularioPromocion").reset();
}