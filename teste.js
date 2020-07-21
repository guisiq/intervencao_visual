function calcularjuros(messes,salario,dilheiro,jurosmes,e) {
    // let salario = 100;
    // let jurosmes = 0.043;
    let dinheiro = dilheiro;
    let rendimentoMes = [];
    let rendimentoTotal = [0,0]
    let i = messes;
    while (i > 0) {
        rendimentoMes[rendimentoMes.length] = [0,0];
        i--;
    }
    rendimentoTotal[1] += dinheiro;
    for (let index = 0; index < rendimentoMes.length; index++) {
        rendimentoMes[index][0] -= (dinheiro + salario);
        dinheiro = (dinheiro + salario) * (1 + jurosmes);
        rendimentoMes[index][0] += (dinheiro);
        rendimentoTotal[0] += rendimentoMes[index][0];
        rendimentoMes[index][1] += dinheiro;
        rendimentoTotal[1] += salario;
        if((index +1 == rendimentoMes.length) && rendimentoMes[index][0] < e){
                rendimentoMes[rendimentoMes.length] = [0,0];
        }
    }
    console.log("      juros em cada mes : dilheiro em cada mes : ");
    console.log(rendimentoMes)
    console.log(" ganlhos en juros : dilheiro total investido ")
    console.log(rendimentoTotal)
    console.log("dilheiro total ")
    console.log(dinheiro);
    console.log("anos:" + (rendimentoMes.length - (rendimentoMes.length % 12)) / 12)
    console.log("e "+rendimentoMes.length % 12+" messes")

    
}
calcularjuros(6,25,180,0.0043,00);