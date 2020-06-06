//#region objetos com os linkes das imagen agrupados por artistas 
/**
amanda tales    0
Ana leticia     1
Athus           2
Davi            3
Fernanda        4 
guilherme       5
Joao            6
lucas           7 
maria eduarda   8 
migue           9
pedro           10
[projeto do quadro , link] 
*/
// [ nome do artista ,[se tem nome de artistas , o nome de artistas ] , [[projeto da obra,link da obra] ]]
// artista[numero do artista]
//                           [0] nome do artista
//                           [1][0] se tem apelido (nome artistico)
//                           [1][1] o nome artistico se tiver
//                           [2]vetor do link dos quadros 
//                           [2][numero do quadro][0]numero do projeto que o quadro foi desenvouvido
//                           [2][numero do quadro][1]link para a imagen do quadro 
let artista  = [
    [`amanda tales`, [false],
        [[1, `img/quadros/seriema.jpeg`]]//procurar imagem da largata 
    ], 
    [`ana Leticia`, [true, "Bob"],
        [[1,"img/quadros/pererecaDocerrado.jpeg"]]//procurar a imagem da  borboleta
    ],
    [`Athus`, [false],
        [[1,"img/quadros/capivara.jpeg"]]//procura a imagem do lobo guara
    ],
    [`Davi`, [false],
        [[0]]
    ],
    [`Fernada`, [false],
        [
            [1,"img/quadros/jabuti.jpeg"],
            [1,"img/quadros/tucunare.jpeg"]
        ]
    ],
    [`Guilherme`, [false, ],
        [
            [1, "img/quadros/soldadinho.jpeg"],
            [1, "img/quadros/anta.jpeg"]
        ]
    ],
    [`Joao`, [true, "apelido"],//proucurar a imagem do quadro 
        [[0]]
    ],
    [`lucas`, [true, "aragoto"],
        [[1,"img/quadros/pirarucu.jpeg"]] //proucuar a imagem do tatu 
    ],
    [`Maria Eduarda`, [true, "Maryel"],
        [[1,"img/quadros/arara1.jpeg"]] //procuara a segunda arara 
    ],
    [`Miguel`, [true, "lobilho"],// procurar o passaro 
        [
            [1,"img/quadros/ariranha.jpeg"],
            [1,"img/quadros/macacoPrego.jpeg"]
        ]
    ],
    [`Pedro`, [false],//procurar imagem do viado
        [[0]]
    ],
];
//#endregion
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
