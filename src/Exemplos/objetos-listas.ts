const pessoa = {
    nome: "Thalita",
    idade: 30,
    profissão: "Desenvolvedora Front-end",
}

const andre : {nome: string , idade: number, profissão: string} = {
    nome: "Andre",
    idade: 25,
    profissão: "pintor"
    
}


const paula : {nome: string , idade: number, profissão: string} = {
    nome: "Paula",
    idade: 25,
    profissão: "cantor"
    
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Jiujiteira
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}


const vanessa : Pessoa = {
    nome : "Vanessa",
    idade: 30,
    profissao: Profissao.Desenvolvedora
}

const maria : Pessoa = {
    nome : "Maria",
    idade: 30,
    profissao: Profissao.Desenvolvedora
}

const jessica:Estudante = {
    nome: "Jessica",
    idade: 23,
    profissao: Profissao.Desenvolvedora ,
    materias: ['Inglês , programação']

}

const monica : Estudante = {
    nome : "Mônica",
    idade: 30,
    materias: ['Inglês , programação']
    
}

function listar(lista : string[]){
    for (const item of lista){
        console.log('',item);
    }
}

listar(monica.materias);
