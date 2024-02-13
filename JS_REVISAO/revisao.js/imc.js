function pulaLinha ()  {  
        
    document.write ("<br>");
}  

function mostra  (frase) {
document.write(frase);
pulaLinha ();

}

/*
function calculaImc(peso1, altura1, peso2, altura2) {
var imc1 = peso1 / (altura1 * altura1);
var imc2 = peso2 / (altura2 * altura2);
mostra ("A soma dos icm's é"  + (imc1 + imc2));
}
calculaImc(61, 1.58, 71 , 1.59);*/



function calculaImc(altura, peso) {

    return peso / (altura * altura);
}

var nome= prompt (" Informe seu nome: ")
var alturaInformada = prompt (nome + " Informe suja altura: ");
var pesoinformado = prompt (nome + " Informe seu peso : ");

var imc =calculaImc (alturaInformada, pesoinformado)

document.write (nome + ", o IMC é " + imc);












