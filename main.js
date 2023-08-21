//Listar os números primos de 1 a 50

let primo = true

for(let i = 2; i < 51; i++) {
    primo = true
    for(let j = 2; j < i; j++) {
        if(i%j === 0) primo = false
    }
    if(primo) console.log(i, 'é primo')
}