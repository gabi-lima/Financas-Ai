ganhos = []
gastos = []

function adicionarGastos(){
    var nomeGastos = document.getElementById('nomeGastos').value
    var valorGastos = document.getElementById('valorGastos').value
    gastos.push(valorGastos)
    var matrizDeNumeros = gastos.map(Number);
    totalgastos = matrizDeNumeros.reduce((totalgastos, currentElement) => totalgastos + currentElement)
    gastosCalc = totalgastos
    /*console.log(gastos)
    console.log(totalgastos)*/

    addLista = document.createElement('li');
    addLista.innerHTML = nomeGastos + ':   ' + valorGastos;

    document.getElementById('listaGastos').appendChild(addLista);

    var contGastos = document.getElementById('totalGastos')
    contGastos.innerHTML = "Total de gastos:  R$" + totalgastos
    /*console.log(nomeGastos)
    console.log(valorGastos) */
    return gastosCalc
}

function adicionarRecebidos(){
    var nomeGanho = document.getElementById('nomeGanho').value
    var valorGanho = document.getElementById('valorGanho').value
    ganhos.push(valorGanho)
    var matrizGanhos = ganhos.map(Number);
    totalGanhos = matrizGanhos.reduce((totalGanhos, currentElement) => totalGanhos + currentElement)
    ganhosCalc = totalGanhos
    
    addLista = document.createElement('li');
    addLista.innerHTML = nomeGanho + ':   ' + valorGanho;

    document.getElementById('listaGanhos').appendChild(addLista);
    var contGanhos = document.getElementById('totalGanhos')
    contGanhos.innerHTML = "Total de gastos:  R$" + totalGanhos

    /*console.log(ganhos)
    console.log(totalGanhos) */

    return ganhosCalc
    /*console.log(valorGanho)
    console.log(nomeGanho) */

}

function totalLiquido(){
    console.log(ganhosCalc - gastosCalc)
    total = ganhosCalc - gastosCalc
    var addLiquido = document.getElementById('totalLiq')
    addLiquido.innerHTML = "Total Líquido: R$" + total 
    console.log(total) 
}



