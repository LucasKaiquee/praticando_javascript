const iniciarBancoDeDados = (senha) => {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando o banco de dados ... (senha inserida: ${senha})`);
        if(senha === '12345') {
            resolve("O banco de dados foi iniciado com sucesso!");
        } else {
            reject("senha incorreta");
        }
    });
};

const prepararBancoDeDados = () =>  {
    return new Promise((resolve, reject) => {
        console.log("Preparando banco de dados ...");
        resolve("Banco de dados preparado com sucesso!");
    });
};

//Iniciando com .then 
/*iniciarBancoDeDados("12345")
    .then((value) => {
        console.log(value);
        return prepararBancoDeDados();
    })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
*/

// iniciando com Async e Await
const iniciarEPrepararBancoDeDados = async() => {
    const mensagemDeInicio = await iniciarBancoDeDados("12345");
    console.log(mensagemDeInicio);
    const mensagemBancoDeDadosPreparado = await prepararBancoDeDados();
    console.log(mensagemBancoDeDadosPreparado);
}

iniciarEPrepararBancoDeDados();