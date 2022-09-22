// 1. Utilizando o .map, crie uma lista que contenha todos os valores da lista "numeros" multiplicados por dois, e logue-a no console.

const numeros = [10, 20, 30, 40, 50];

const novaLista = numeros.map((item) => {
    return item * 2;
})

console.log(novaLista)
// 2. Crie uma lista, usando o .map, baseando-se na lista "usuarios", que contenha a "idade" de cada usuário multiplicada por 2.

const usuarios = [
  { nome: 'John', idade: 20 },
  { nome: 'Jane', idade: 27 }, 
  { nome: 'Doe', idade: 18} 
]

const dobroIdade = usuarios.map((usuario) => ({
    ...usuario, idade: usuario.idade * 2
})
);
console.log(dobroIdade);

// 3. Crie uma lista de strings, baseando-se na lista "pessoas", que diga se a pessoa pode ir ou não para a Matrix. Para ir, ela precisa ter uma idade maior que 18.

// Exemplo: 
// ["Angelina Jolie pode ir para Matrix!", 
// "Eric Jones não tem a idade mínima!", 
// "Paris Hilton não tem a idade mínima!", 
// "Kayne West não tem a idade mínima!", 
// "Bob Ziroll pode ir para Matrix!"]

const pessoas = [
    {
        nome: "Angelina Jolie",
        idade: 59
    },
    {
        nome: "Eric Jones",
        idade: 12
    },
    {
        nome: "Paris Hilton",
        idade: 15
    },
    {
        nome: "Kayne West",
        idade: 16
    },
    {
        nome: "Bob Ziroll",
        idade: 19
    }
]

const matrix = pessoas.map((item) => {
    if (item.idade >= 18) {
        return item.nome += ' pode ir para a Matrix'

    } else {
        return item.nome += ' não tem idade suficiente'
    }
})

console.log(matrix);

