function pulaLinha() {

    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var vitoria =  parseInt (prompt ("Entree com o numéro de vitórias: "));
var empates = parseInt (prompt ("Entre com o numéro de empates:  "));

var pontos = vitoria *3 + empates;

mostra ("Os pontos do seu time são: " + pontos)

if (pontos > 28){
    mostra ("Seu time está mlehor do que ano passado.");
}

if (pontos <28){
    mostra ("Seu time está pior que ano passado!");
}

if (pontos == 28){
    mostra ("Seu time está igual ano passado! ");
}