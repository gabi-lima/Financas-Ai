function adicionarGastos(){
    var nomeGastos = document.getElementById('nomeGastos').value
    var valorGastos = document.getElementById('valorGastos').value
    
    addLista = document.createElement('li');
    addLista.innerHTML = nomeGastos + '   :   ' + valorGastos;

    document.getElementById('listaGastos').appendChild(addLista);
    console.log(nomeGastos)
    
    console.log(valorGastos)
}