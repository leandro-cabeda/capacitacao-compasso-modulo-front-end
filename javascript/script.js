$(function() { //// é o mesmo que o document.ready  e window.onload, carregado ao temrinar página

    //console.log("teste");
    //var txt=document.getElementById("txt_nome");
    //var txt = $("#txt_nome");
    //txt.val("Novo valor do campo");
    var body = $('body');
    var div_produtos = $("#produtos");
    var frm_cadastro = $("#frm_cadastros");
    var txt_nome_produto = frm_cadastro.find("#txt_nome");
    var txt_preco_produto = frm_cadastro.find("#txt_preco");
    var sucesso = $(".msg-sucesso");

    var array_produtos = [
        { "nome": "produto1", "valor": 10.50 },
        { "nome": "produto2", "valor": 47.50 },
        { "nome": "produto3", "valor": 70.50 }
    ];

    function renderizaProdutos() {

        div_produtos.empty(); // limpo os objetos dentro da div para depois adicionar os objetos
        var soma = 0;
        $.each(array_produtos, function(key, obj) {
            // crio nova div
            var div = $("<div>");
            var h1 = $("<h1>");
            var p = $("<p>");

            p.html(obj.valor);
            soma += parseFloat(obj.valor);
            console.log(soma);

            // adiciono o nome no h1
            h1.html(obj.nome);
            // adiciono h1  dentro da div
            div.append(h1);
            div.append(p);
            // adiciono n o html div nessa div
            //div.html(obj.nome);

            //adiciono o objeto div no container #produtos
            div_produtos.append(div);
        });
        div_produtos.append("<br><b> Valor total: " + soma + "</b><br><br>");

    }

    renderizaProdutos();
    frm_cadastro.find(".js-frm-cadastro").submit(function(e) {
        e.preventDefault();

        console.log(txt_nome_produto.val());
        console.log(txt_preco_produto.val());

        array_produtos.push({ "nome": txt_nome_produto.val(), "valor": txt_preco_produto.val() });

        renderizaProdutos();
        $(this)[0].reset(); // reseta o formulario
        sucesso.removeClass("hide");
        location.href = '#ancora';

        setTimeout(function() {
            sucesso.addClass("hide");
        }, 5000);

        //window.scrollTo(500, 0);

        /*$("html,body").animate({
            scrollTop: $(document).height()
        }, 1500);*/

    });


    /*setInterval(function() {  executa uma função de tempo em tempo

        if (txt.is(":visible")) {
            txt.hide("slow");
        } else {
            txt.show("slow");
        }

        txt.toggle();
    }, 1000);*/




});

//window.onload=function(){} é o mesmo que o document.ready , carregado ao temrinar página
/*$(document).ready(function() {});*/