ganhos = []
gastos = []

function adicionarGastos(){
    /* Acessa o valor do input no campo "gastos", pega o valor armazena em uma matriz, transforma a matriz em inteiros e depois soma seus valores. */
    var nomeGastos = document.getElementById('nomeGastos').value
    var valorGastos = document.getElementById('valorGastos').value
    gastos.push(valorGastos)
    var matrizDeNumeros = gastos.map(Number);
    totalgastos = matrizDeNumeros.reduce((totalgastos, currentElement) => totalgastos + currentElement)
    
    /* Adiciona a linha com o valor do input */
    addLista = document.createElement('li');
    addLista.innerHTML = nomeGastos + ':   ' + valorGastos;
    document.getElementById('listaGastos').appendChild(addLista);
    var contGastos = document.getElementById('totalGastos')
    contGastos.innerHTML = "Total de gastos:  R$" + totalgastos

    return totalgastos
}

function adicionarRecebidos(){
    /* Acessa o valor do input no campo "ganhos", pega o valor armazena em uma matriz, transforma a matriz em inteiros e depois soma seus valores. */
    var nomeGanho = document.getElementById('nomeGanho').value
    var valorGanho = document.getElementById('valorGanho').value
    ganhos.push(valorGanho)
    var matrizGanhos = ganhos.map(Number);
    totalGanhos = matrizGanhos.reduce((totalGanhos, currentElement) => totalGanhos + currentElement)
    
    /* Adiciona a linha com o valor do input */
    addLista = document.createElement('li');
    addLista.innerHTML = nomeGanho + ':   ' + valorGanho;
    document.getElementById('listaGanhos').appendChild(addLista);
    var contGanhos = document.getElementById('totalGanhos')
    contGanhos.innerHTML = "Total de gastos:  R$" + totalGanhos

    return totalGanhos
}

function totalLiquido(){
    console.log(totalGanhos - totalgastos)
    total = totalGanhos - totalgastos
    var addLiquido = document.getElementById('totalLiq')
    addLiquido.innerHTML = "Total Líquido: R$" + total 
    console.log(total) 
}



