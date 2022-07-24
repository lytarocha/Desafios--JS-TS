"use strict";
let valorany; // O valor any recebe qualquer tipo de objeto.. usada em codigos extensos
valorany: 1;
valorany: "Thalita";
valorany: true;
let valorString = "Teste";
valorString = valorany;
let valorString2 = "Testes";
valorString2 = valorany;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('Ola', 'Como vai ? ');
