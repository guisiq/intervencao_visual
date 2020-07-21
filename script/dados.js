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
    
    {
        link: 'img/quadros/anta.jpeg',
        artista: 5,
        nome: 'anta',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/arara1.jpeg`,
        artista: 8,
        nome: 'arara Azul',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/capivara.jpeg`,
        artista: 2,
        nome: 'capivara ',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/ariranha.jpeg`,
        artista: 9,
        nome: 'ariranha',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/jabuti.jpeg`,
        artista: 4,
        nome: 'jabuti',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/macacoPrego.jpeg`,
        artista: 9,
        nome: 'macaco prego',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/pererecaDocerrado.jpeg`,
        artista: 1,
        nome: 'perereca do cerrado ',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/pirarucu.jpeg`,
        artista: 7,
        nome: 'pirarucu',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/seriema.jpeg`,
        artista: 0,
        nome: 'seriema',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/soldadinho.jpeg`,
        artista: 5,
        nome: 'soldadinho',
        exepoxicao: 0,
        exibir : true
    },
    {
        link: `img/quadros/tucunare.jpeg`,
        artista: 4,
        nome: 'tucunare',
        exepoxicao: 0,
        exibir : true
    }
    /*,
    {
        link: ``,
        artista: 0,
        nome: '',
        exepoxicao: 0,
        exibir : true
    },*/
];

let artistas = [
    {
        nome: `amanda tales`,
        apelido:[false],
        aultoRetrato:"",
        // quadros: [[1, `img/quadros/seriema.jpeg`]]//procurar imagem da largata 
    }, 
    {
        nome: `ana Leticia`,
        apelido: [true, "Bob"],
        aultoRetrato:"",
        // quadros: [[1, "img/quadros/pererecaDocerrado.jpeg"]]//procurar a imagem da  borboleta
    },
    {
        nome: `Athus`,
        apelido: [false],
        aultoRetrato:"",
        // quadros: [[1, "img/quadros/capivara.jpeg"]]//procura a imagem do lobo guara
    },
    {
        nome:`Davi`,
        apelido: [false],
        aultoRetrato:"",
        // quadros:[[0]]
    },
    {
        nome: `Fernada`,
        apelido: [false],
        aultoRetrato:"",
        // quadros:[
        //             [1,"img/quadros/jabuti.jpeg"],
        //             [1,"img/quadros/tucunare.jpeg"]
        //         ]
    },
    {
        nome: `Guilherme`,
        apelido: [false],
        aultoRetrato:"",
        // quadros:[
        //     [1, "img/quadros/soldadinho.jpeg"],
        //     [1, "img/quadros/anta.jpeg"]
        // ]
    },
    {
        nome: `Joao`,
        apelido: [true, "apelido"],//proucurar a imagem do quadro
        aultoRetrato:"",
        // quadros: [[0]]
    },
    {
        nome:`lucas`,
        apelido: [true, "aragoto"],
        aultoRetrato:"",
        // quadros:[[1,"img/quadros/pirarucu.jpeg"]] //proucuar a imagem do tatu 
    },
    {
        nome: `Maria Eduarda`,
        apelido: [true, "Maryel"],
        aultoRetrato:"",
        // quadros:[[1,"img/quadros/arara1.jpeg"]] //procuara a segunda arara 
    },
    {
        nome: `Miguel`,
        apelidos: [true, "lobilho"],// procurar o passaro 
        aultoRetrato:"",
        // quadros: [
        //     [1, "img/quadros/ariranha.jpeg"],
        //     [1, "img/quadros/macacoPrego.jpeg"]
        // ]
    },
    {
        nome:`Pedro`,
        apelidos: [false],//procurar imagem do viado
        aultoRetrato:"",
        //quadros:[[0]]
    },
];
//#endregion
