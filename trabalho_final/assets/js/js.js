var procurar = document.getElementById("procurar");
//console.log(procurar);

var sug = document.getElementById("sug");
var sug2 = document.getElementById("sug2");

sug.style.display = "none";
sug2.style.display = "none";


var vetor = [
    { "nome": "placa de video Geforce", "preco": 300.00, "img": "https://29028l.ha.azioncdn.net/img/2015/09/produto/20363/19/large/placa-video-evga-geforce-gtx-980ti-6gb.jpg" },
    { "nome": "Processador Core I7", "preco": 800.00, "img": "https://lh5.googleusercontent.com/proxy/OF7hzUM5zImtXcIWcndb7PAJ7YhRwQbItAkhuE6rMJeTbkNZsgSdydAGQaUsXf1XpZRBCyNJUfjk8CJgKqMT341Oo0IaUrJdJmlVk6glApa0pyikvAM1UPQ3KDnT6B626bFfzQb-Vs32T3KE6KyNwnq_DjvVnww5Ahc8ihrg6Pf3z6efjNXrMYR5F8rwy_LkKNerkHn2k3b7ep1Paq-bxtX869NJz04=w384-h384-nc" },
    { "nome": "placa Mae Asus", "preco": 400.00, "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LwR_quqTzCqHAjROg_ON47FhZL_dtcTkuWMNr5W6hi0oOv0A7wqaJMB1" },
    { "nome": "Memoria 4GB DDR3", "preco": 230.00, "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5Dluf2lzdhQ0S2vz53oxYdwr_tlEVCi5TIEVkIf1Bmvs3ssFLcrDKlW2v" },
    { "nome": "Fonte 500W", "preco": 380.00, "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQb4tdOc1gekIK_bZiqD9L32eUEvBtLFbnp0H3xZLhptvEGWy8Rms1FPbL5" }
]

var vetor2 = [
    "Informatica",
    "Perifericos",
    "Acessorios"
]

procurar.onkeyup = function() {




    if (procurar.value.length === 0) {
        sug.style.display = "none";

    } else {
        sug2.style.display = "none";
        sug.style.display = "block";
    }



};

procurar.onfocus = function() {
    sug2.style.display = "block";
}


procurar.onblur = function() {
    if (procurar.value.length === 0) {
        sug.style.display = "none";
        sug2.style.display = "none";
    } else {
        sug.style.display = "block";
        sug2.style.display = "none";
    }

}

function suge() {
    var retorno2 = "<ul>";

    for (var i in vetor2) {
        console.log(i);
        retorno2 += "<li>" + "<h1>" + vetor2[i] + "</h1>" + "</li>";

    }
    sug2.innerHTML = retorno2 + "</ul>";


}


function proc() {
    var retorno = "<ul>";

    for (var i in vetor) {
        retorno += "<li>" +
            "<h1>" + vetor[i].nome + "</h1>" +
            "<p>" + vetor[i].preco + "</p>" +
            "<a href='" + vetor[i].link + "'>Veja mais</a><br>" +
            "<img src='" + vetor[i].img + "'>" + "</li>";

    }
    sug.innerHTML = retorno + "</ul>";


}

proc();
suge();

$(function() {

    $('.single-item-rtl').slick({
        rtl: true
    });


    var ass = $("#ass");
    var div = $("<div>");
    div.hide();

    ass.css("clear", "both");


    ass.bind("keydown", function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }


        if (ass.val().length <= 3) {
            div.text("tem que ser inserido mais que 3 caracteres").show();
            ass.after(div);
            return;

        }

        if (ass.val() !== "@" && ass.val().length === 3) {
            div.text("tem que ser atribuido um @").show();
            ass.after(div);
            return;
        } else {
            div.text("assinatura realizado com sucesso!").show();
            ass.after(div);
        }



    });
});