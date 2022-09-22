function somar (a, b) {
    return a + b;
}

//const somarArrow = (a, b) => {
//      return a + b;
//}
// Pode=se simplificar dessa forma 
const somarArrow = (a, b) => a + b;

console.log(somar(2, 2));
console.log(somarArrow(2, 2));

function verificarPositivo(num) {
    return num >= 0;
}

const verificarPositivoArrow = num => num >= 0; 

console.log(verificarPositivo(-12));
console.log(verificarPositivoArrow(34));

function retornaObjeto () {
    return {
        nome: 'Lucas',
        sobreNome: 'Valério',
    }
}

const retornaObjetoArrow = () => ({
        nome: 'Lucas',
        sobreNome: 'Valério',
})

console.log(retornaObjeto());
console.log(retornaObjetoArrow());
