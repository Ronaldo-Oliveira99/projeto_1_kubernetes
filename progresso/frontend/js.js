$("#button-blue").on("click", function() {
    
    var txt_nome = $("#name").val();
    var txt_email = $("#email").val();
    var txt_comentario = $("#comment").val();

    $.ajax({
        url: "http://192.168.68.122:30975",
        type: "post",
        data: {nome: txt_nome, email: txt_email, comentario: txt_comentario},

        beforeSend: function() {
            console.log("Tentando enviar os dados....");
        }
    }).done(function(e) {
        alert("Dados Salvos");
        console.log('Retorno',e);
        console.log('txt_nome',txt_nome);
        console.log('txt_email',txt_email);
        console.log('txt_comentario',txt_email);
    })

});