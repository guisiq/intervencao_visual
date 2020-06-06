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
function gradedequadros() {
for (let a = 0; a < artista.length; a++) {

    for (let b = 0; b < artista[a][2].length; b++) {
        console.log(a+'_'+b)
        if (artista[a][2][b].length==2) {
        document.getElementById("column_"+colunaEstado ).innerHTML += `<div class="card artista1"><img src="${artista[a][2][b][1]}"><h3>${artista[a][0]}</h3><p>teste</p></div>`;            
            console.log(colunaEstado+"antes ")
            colunaEstado = revesar(colunaEstado, 1, document.querySelectorAll('.coluna').length);
            console.log("chegei aqui")
            console.log(colunaEstado+"depois")
            
        }   
    }

}
    
}
gradedequadros();
