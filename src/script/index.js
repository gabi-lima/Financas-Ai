function adicionarGastos(){
    var nomegastos = document.getElementById('nomeGastos').value
    el = document.createElement('li');
    el.innerHTML = nomegastos;
    document.getElementById('listaGastos').appendChild(el);
    console.log(nomegastos)
}