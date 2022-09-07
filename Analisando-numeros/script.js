const input = document.getElementById("fnum");
const slista = document.getElementById("slista");
const resultado = document.getElementById("result");
const lista = [];


function inLista(n, l) {

    if(l.indexOf(Number(n)) != -1){
        console.log("true");
        return true;
    } else {
        console.log("false");
       return false; 
    } 
}

function adicionar () {

    if(input.value >= 1 && input.value <= 1000 && !inLista(input.value, lista)){

        lista.push(Number(input.value));
        let item = document.createElement("option");
        item.text = `Valor ${input.value} adicionado`
        slista.appendChild(item)
        resultado.innerHTML = ""
        
    } else alert("O número não é válido ou já foi adicionado!");

    input.value = ""
    input.focus();
}

function finalizado() {
    if (lista.length === 0){
        alert("Insira valores para serem analizados")
    } else {
        let total = lista.length
        let maior = lista[lista.length - 1]
        let menor = lista[0];
        let soma = 0;
        for(let pos in lista){
            soma += Number(lista[pos]);
            if(lista[pos] > maior){
                maior = lista[pos]
            }  
            if(lista[pos] < menor){
                menor = lista[pos]
            }
        }
        let media = soma / total;

        resultado.innerHTML = ""
        resultado.innerHTML += `<p>Ao todo ${total} números foram adicionados</p>`
        resultado.innerHTML += `<p>O maior número foi: ${maior}</p>`
        resultado.innerHTML += `<p>O menor número foi: ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos os números é: ${soma}</p>`
        resultado.innerHTML += `<p>A média dos números é: ${media.toFixed(2)}</p>`
        console.log(lista);
    }
}




