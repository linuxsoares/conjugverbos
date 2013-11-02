

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
		document.location.href = 'conjugado.html?palavra='+verbo;
	}else {
		alert("Digite Verbo para Buscar!");
	}
}