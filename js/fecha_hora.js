(function(){
    var actualizarHora = function(){
        var dia = moment().format('dddd');
        var fecha=moment().format('LL');
        var hora=moment().format('LTS');
        $("#fecha").text(fecha);
        $("#hora").text(hora);
    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);
}());

//
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});