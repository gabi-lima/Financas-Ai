ganhos = []
gastos = []

function adicionarGastos(){
    var nomeGastos = document.getElementById('nomeGastos').value
    var valorGastos = document.getElementById('valorGastos').value
    gastos.push(valorGastos)
    var matrizDeNumeros = gastos.map(Number);
    const totalgastos = matrizDeNumeros.reduce((totalgastos, currentElement) => totalgastos + currentElement)
    console.log(gastos)
    console.log(totalgastos)

    addLista = document.createElement('li');
    addLista.innerHTML = nomeGastos + ':   ' + valorGastos;

    document.getElementById('listaGastos').appendChild(addLista);

    /*console.log(nomeGastos)
    console.log(valorGastos) */
}
function adicionarRecebidos(){
    var nomeGanho = document.getElementById('nomeGanho').value
    var valorGanho = document.getElementById('valorGanho').value
    
    addLista = document.createElement('li');
    addLista.innerHTML = nomeGanho + ':   ' + valorGanho;

    document.getElementById('listaGanhos').appendChild(addLista);

    console.log(valorGanho)
    console.log(nomeGanho)

}

