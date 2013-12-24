

function getVerbos(letra){
	document.location.href = 'lista_verbos.html?letra='+letra;
}

function home(){
	document.location.href = 'index.html';	
}

function getConjugacoes(verbo){
	document.location.href = 'conjugado.html?palavra='+verbo;
}

function getValorBusca(){
	var verbo = $('#nome_busca').val();
	if(verbo != ""){
		var url = 'http://itinerariosp.com.br:8080/verbosws/rest/verbos/mobile/palavra/' + verbo;
		url = decodeURI(url);
        $.ajax({
            type: "GET",
            encoding:"ISO-8859-1",
            url: url,
            dataType: 'json',
            success: function(data){
            	if(data != ''){
            		document.location.href = 'conjugado.html?palavra='+verbo;
            	}else {
            		alert(verbo.toUpperCase() + ' não encontrado na Base de Dados.');
            	}	
            },
            error: function(data){
              	console.log(data);
            }
		});
	}else {
		alert("Digite Verbo para Buscar!");
	}
}