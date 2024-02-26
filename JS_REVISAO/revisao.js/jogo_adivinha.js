/*function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}


function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPensado = Math.round( Math.random (1) * 10);
console.log(numeroPensado);


var chute = parseInt(prompt("Digite seu chute!"));

if (chute == numeroPensado) {
    document.write("Você acertou!");

} else {
    document.write("Você errou, o número pensado foi " + numeroPensado);
}
*/




    /*function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    var quantidadeCarbono1 = parseInt(prompt("Quantidade de carbono substância 1"));
    var quantidadeCarbono2 = parseInt(prompt("Quantidade de carbono substância 2"));

    quantidadeCarbono2 = quantidadeCarbono2 + 2;

    if(quantidadeCarbono1 = quantidadeCarbono2 ) {

        mostra("Acho que são substâncias parecidas");
    } else {

        mostra("São substâncias bem diferentes");
    }
*/


    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }
    var idade = parseInt(prompt("Qual é sua idade"));
    var temCarteira = prompt("Tem carteira? Responda S ou N");

    if( idade >= 18 && temCarteira == "S") {
        mostra("Pode dirigir");
    } else {
        mostra("Não pode dirigir");
    }
