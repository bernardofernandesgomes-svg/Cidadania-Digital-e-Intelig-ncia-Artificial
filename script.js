function resposta(opcao){

let texto=document.getElementById("resultado");

if(opcao=="certo"){

texto.innerHTML="✅ Parabéns! Essa é a atitude correta.";

texto.style.color="green";

}else{

texto.innerHTML="❌ Resposta incorreta. Sempre confira as informações e utilize a internet com responsabilidade.";

texto.style.color="red";

}

}

function topo(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
