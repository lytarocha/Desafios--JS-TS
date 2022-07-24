"use strict";
const pessoa = {
    nome: "Thalita",
    idade: 30,
    profissão: "Desenvolvedora Front-end",
};
const andre = {
    nome: "Andre",
    idade: 25,
    profissão: "pintor"
};
const paula = {
    nome: "Paula",
    idade: 25,
    profissão: "cantor"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Jiujiteira"] = 3] = "Jiujiteira";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: "Maria",
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: "Jessica",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
    materias: ['Inglês , programação']
};
const monica = {
    nome: "Mônica",
    idade: 30,
    materias: ['Inglês , programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('', item);
    }
}
listar(monica.materias);
