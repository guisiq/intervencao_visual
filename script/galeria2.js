function revesar(_variavel,limiteMin, limiteMax) {
     variavel = _variavel + 1 ;
    //_variavel++;
    if (variavel > limiteMax) {
        variavel = limiteMin
    }
     return variavel
}

let colunaEstado = 1;
let quantColunas = 1;

if (document.getElementById('gradeDeFotos').clientWidth / 400 > 3) {
    quantColunas = 3;
}else if (document.getElementById('gradeDeFotos').clientWidth / 400 > 2) {
    quantColunas = 2;
}else{
    quantColunas = 1;
}

for (let i = quantColunas; i > 0; i--) {
    document.getElementById('gradeDeFotos').innerHTML += `<div id="column_${i}" class="coluna"></div>`
}
function filtrar_quadro (params) {
    
}
function gradedequadros() {
for (let a = 0; a < quadros.length; a++) {

    document.getElementById("column_" + colunaEstado).innerHTML += `<div class="card_obra ${artista[quadros[a].artista]}" ><img src="${quadros[a].link}"><h3>quadro:${quadros[a].nome}</h3><h4>artista:${artistas[a].nome}</h4></div>`;            
    console.log(colunaEstado+"antes ")
    colunaEstado = revesar(colunaEstado, 1, document.querySelectorAll('.coluna').length);
    console.log("chegei aqui")
    console.log(colunaEstado+"depois")
}
    
}
gradedequadros();