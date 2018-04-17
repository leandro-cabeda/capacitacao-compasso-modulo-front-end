var cep = $("#cep");
var loca = $("#localidade");
var log = $("#logradouro");
var bairro = $("#bairro");
var uf = $("#uf");
var pes = $("#pesquisando");



cep.mask("00000-000");

pes.addClass("hide");

cep.bind("keydown", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
    if (cep.val().length === 0) {
        pes.addClass("hide");
    } else {
        pes.removeClass("hide");
    }

    //if (cep.val().length != 9) {
    //alert("preciso maximo 9 caractere");
    //cep.val("");
    //return false;
    //}

    var option = {
        //url: "https://viacep.com.br/ws/" + cep.val().replace("-","") + "/json/"
        url: "https://viacep.com.br/ws/99010170/json/"

    }

    $.ajax(option).done(function(data) {
        console.log(data);

        if (data.cep == cep.val()) {
            console.log("acertou");

            loca.val(data.localidade).prop("disabled", false);
            loca.css({ "background": "red", "color": "white" });
            log.val(data.logradouro).prop("disabled", false);
            bairro.val(data.bairro).prop("disabled", false);
            uf.val(data.uf).prop("disabled", false);

        } else {
            //console.log("errado");
        }
    }).always(function() {

        setTimeout(function() {
            pes.addClass("hide");
        }, 2000);

    });

});