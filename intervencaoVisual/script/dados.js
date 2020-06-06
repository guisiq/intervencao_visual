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
let quadros = [

]
let artistas = [
    {
        nome: `amanda tales`,
        apelido:[false],
        quadros: [[1, `img/quadros/seriema.jpeg`]]//procurar imagem da largata 
    }, 
    {
        nome: `ana Leticia`,
        apelido: [true, "Bob"],
        quadros: [[1, "img/quadros/pererecaDocerrado.jpeg"]]//procurar a imagem da  borboleta
    },
    {
        nome: `Athus`,
        apelido: [false],
        quadros: [[1, "img/quadros/capivara.jpeg"]]//procura a imagem do lobo guara
    },
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
