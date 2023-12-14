function actualizarContador() {
    var fechaLimite = new Date("December 24, 2023 23:00:00").getTime();
    var ahora = new Date().getTime();
    var diferencia = fechaLimite - ahora;

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
        dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    if (diferencia <= 0) {
        document.getElementById("carta").style.display = "block";
    }
}

setInterval(actualizarContador, 1000);

window.onload = function () {
    actualizarContador();
};