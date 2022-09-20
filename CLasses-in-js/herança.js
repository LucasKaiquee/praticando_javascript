class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} fez algum barulho!`)
    }
}

class Cachorro extends Animal {
    constructor (nome) {
        super(nome);
    }

    falar() {
        console.log(`${this.nome} latiu!`);
    }

    latir() {
        console.log(`${this.nome} latiu novamente!`);
    }
}

const animal = new Animal('Pato');
animal.falar();

const cachorro = new Cachorro('Jaspiom');
cachorro.falar();
cachorro.latir();

