// 1. Crie uma classe chamada "Guerreiro", que receba, em seu constructor, um "nome" e uma "idade", e que contenha um método chamado "lutar" que logue uma mensagem dizendo "O guerreiro {nome}, de {idade} anos está lutando!"

class Guerreiro {
    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }

    lutar() {
        console.log(`O guerreiro ${this.nome}, de ${this.idade} anos está lutando`);
    }
}

const guerreiro = new Guerreiro('Osvaldo', 37);
guerreiro.lutar();

// 2. Crie uma classe chamada "Viking", derivada da classe "Guerreiro" criada acima. Sobrescreva o método "lutar", que agora logará uma mensagem dizendo "O viking {nome}, de {idade} anos está lutando em nome de Odin!"
// 3 Crie também, na classe "Viking" um método chamado "lutarComMartelo", que logue uma mensagem dizendo "O viking {nome}, de {idade} anos está lutando com seu martelo no nome de Thor!"


class Viking extends Guerreiro {
    constructor (nome, idade) {
        super(nome, idade)  
    }
  
    lutar() {
        console.log(`O viking ${this.nome}, de ${this.idade} anos está lutando em nome de Odin!`);
    }

    lutarComMartelo() {
        console.log(`O viking ${this.nome}, de ${this.idade} anos está lutando com seu martelo em nome de Thor!`);
    }
}

const viking = new Viking('Geraldo', 28);
const vikingComMartelo = new Viking('Cleiton', 25);

viking.lutar();
vikingComMartelo.lutarComMartelo();

