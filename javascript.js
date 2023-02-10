'use strict';

let somaMussarela = 0;
let somaNapolitana = 0;
let somaCalabresa = 0;
let somaAlhoOleo = 0;
let somaMarguerita = 0;
let somaEscarola = 0;
let somaRoma = 0;
let somaDoisQueijos = 0;
let somaBacon = 0;
let somaFrangoCatupiry = 0;
let somaVegetariana = 0;
let somaGostosona = 0;
let somaCocaCola = 0;
let somaFantaLaranja = 0;
let somaFantaUva = 0;
let somaTaxaEntrega = 0;


let vendaMussarela = 0.00;
let vendaNapolitana = 0.00;
let vendaCalabresa = 0.00;
let vendaAlhoOleo = 0.00;
let vendaMarguerita = 0.00;
let vendaEscarola = 0.00;
let vendaRoma = 0.00;
let vendaDoisQueijos = 0.00;
let vendaBacon = 0.00;
let vendaFrangoCatupiry = 0.00;
let vendaVegetariana = 0.00;
let vendaGostosona = 0.00;
let vendaCocaCola = 0.00;
let vendaFantaLaranja = 0.00;
let vendaFantaUva = 0.00;
let vendaTaxaEntrega = 0.00;


let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

function venda(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 50.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = vendaMussarela.toFixed(2);

    }else if(document.getElementById('napolitana').checked){
        somaNapolitana = somaNapolitana + 1;
        vendaNapolitana = vendaNapolitana + 50.00;
        document.getElementById('resultadoNapolitana').innerHTML = somaNapolitana;
        document.getElementById('vendasNapolitana').innerHTML = vendaNapolitana.toFixed(2); 

    }else if(document.getElementById('calabresa').checked){
        somaCalabresa = somaCalabresa + 1;
        vendaCalabresa = vendaCalabresa + 50.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendasCalabresa').innerHTML = vendaCalabresa.toFixed(2);

    }else if(document.getElementById('alhoOleo').checked){
        somaAlhoOleo = somaAlhoOleo + 1;
        vendaAlhoOleo = vendaAlhoOleo + 50.00;
        document.getElementById('resultadoAlhoEoleo').innerHTML = somaAlhoOleo;
        document.getElementById('vendasAlhoEoleo').innerHTML = vendaAlhoOleo.toFixed(2);

    }else if(document.getElementById('marguerita').checked){
        somaMarguerita = somaMarguerita + 1;
        vendaMarguerita = vendaMarguerita + 50.00;
        document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
        document.getElementById('vendasMarguerita').innerHTML = vendaMarguerita.toFixed(2);

    }else if(document.getElementById('escarola').checked){
        somaEscarola = somaEscarola + 1;
        vendaEscarola = vendaEscarola + 50.00;
        document.getElementById('resultadoEscarola').innerHTML = somaEscarola;
        document.getElementById('vendasEscarola').innerHTML = vendaEscarola.toFixed(2);

    }else if(document.getElementById('roma').checked){
        somaRoma = somaRoma + 1;
        vendaRoma = vendaRoma + 50.00;
        document.getElementById('resultadoRoma').innerHTML = somaRoma;
        document.getElementById('vendasRoma').innerHTML = vendaRoma.toFixed(2);

    }else if(document.getElementById('doisQueijos').checked){
        somaDoisQueijos = somaDoisQueijos + 1;
        vendaDoisQueijos = vendaDoisQueijos + 50.00;
        document.getElementById('resultadoDoisQueijos').innerHTML = somaDoisQueijos;
        document.getElementById('vendasDoisQueijos').innerHTML = vendaDoisQueijos.toFixed(2);
    
    }else if(document.getElementById('bacon').checked){
        somaBacon = somaBacon + 1;
        vendaBacon = vendaBacon + 50.00;
        document.getElementById('resultadoBacon').innerHTML = somaBacon;
        document.getElementById('vendasBacon').innerHTML = vendaBacon.toFixed(2);

    }else if(document.getElementById('frangoCatupiry').checked){
        somaFrangoCatupiry = somaFrangoCatupiry + 1;
        vendaFrangoCatupiry = vendaFrangoCatupiry + 50.00;
        document.getElementById('resultadoFrangoComCatupiry').innerHTML = somaFrangoCatupiry;
        document.getElementById('vendasFrangoComCatupiry').innerHTML = vendaFrangoCatupiry.toFixed(2);
    
    }else if(document.getElementById('vegetariana').checked){
        somaVegetariana = somaVegetariana + 1;
        vendaVegetariana = vendaVegetariana + 50.00;
        document.getElementById('resultadoVegetariana').innerHTML = somaVegetariana;
        document.getElementById('vendasVegetariana').innerHTML = vendaVegetariana.toFixed(2);

    }else if(document.getElementById('gostosona').checked){
        somaGostosona = somaGostosona + 1;
        vendaGostosona = vendaGostosona + 50.00;
        document.getElementById('resultadoGostosona').innerHTML = somaGostosona;
        document.getElementById('vendasGostosona').innerHTML = vendaGostosona.toFixed(2);

    }else if(document.getElementById('cocaCola').checked){
        somaCocaCola = somaCocaCola + 1;
        vendaCocaCola = vendaCocaCola + 50.00;
        document.getElementById('resultadoCocaCola').innerHTML = somaCocaCola;
        document.getElementById('vendasCocaCola').innerHTML = vendaCocaCola.toFixed(2);
    
    }else if(document.getElementById('fantaLaranja').checked){
        somaFantaLaranja = somaFantaLaranja + 1;
        vendaFantaLaranja = vendaFantaLaranja + 50.00;
        document.getElementById('resultadoFantaLaranja').innerHTML = somaFantaLaranja;
        document.getElementById('vendasFantaLaranja').innerHTML = vendaFantaLaranja.toFixed(2);

    }else if(document.getElementById('fantaUva').checked){
        somaFantaUva = somaFantaUva + 1;
        vendaFantaUva = vendaFantaUva + 50.00;
        document.getElementById('resultadoFantaUva').innerHTML = somaFantaUva;
        document.getElementById('vendasFantaUva').innerHTML = vendaFantaUva.toFixed(2);

    }else if(document.getElementById('taxaEntrega').checked){
        somaTaxaEntrega = somaTaxaEntrega + 1;
        vendaTaxaEntrega = vendaTaxaEntrega + 50.00;
        document.getElementById('resultadoTaxaEntrega').innerHTML = somaTaxaEntrega;
        document.getElementById('vendasTaxaEntrega').innerHTML = vendaTaxaEntrega.toFixed(2);

    }
}

function estorno(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 50.00;
        if(somaMussarela < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = vendaMussarela.toFixed(2);

    }else if(document.getElementById('napolitana').checked){
        somaNapolitana = somaNapolitana - 1;
        vendaNapolitana = vendaNapolitana - 50.00;
        if(somaNapolitana < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaNapolitana = 0;
            vendaNapolitana = 0.00;
        }
        document.getElementById('resultadoNapolitana').innerHTML = somaNapolitana;
        document.getElementById('vendasNapolitana').innerHTML = vendaNapolitana.toFixed(2); 

    }else if(document.getElementById('calabresa').checked){
        somaCalabresa = somaCalabresa - 1;
        vendaCalabresa = vendaCalabresa - 50.00;
        if(somaCalabresa < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaCalabresa = 0;
            vendaCalabresa = 0.00;
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendasCalabresa').innerHTML = vendaCalabresa.toFixed(2);

    }else if(document.getElementById('alhoOleo').checked){
        somaAlhoOleo = somaAlhoOleo - 1;
        vendaAlhoOleo = vendaAlhoOleo - 50.00;
        if(somaAlhoOleo < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaAlhoOleo = 0;
            vendaAlhoOleo = 0.00;
        }
        document.getElementById('resultadoAlhoEoleo').innerHTML = somaAlhoOleo;
        document.getElementById('vendasAlhoEoleo').innerHTML = vendaAlhoOleo.toFixed(2);

    }else if(document.getElementById('marguerita').checked){
        somaMarguerita = somaMarguerita - 1;
        vendaMarguerita = vendaMarguerita - 50.00;
        if(somaMarguerita < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaMarguerita = 0;
            vendaMarguerita = 0.00;
        }
        document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
        document.getElementById('vendasMarguerita').innerHTML = vendaMarguerita.toFixed(2);

    }else if(document.getElementById('escarola').checked){
        somaEscarola = somaEscarola - 1;
        vendaEscarola = vendaEscarola - 50.00;
        if(somaEscarola < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaEscarola = 0;
            vendaEscarola = 0.00;
        }
        document.getElementById('resultadoEscarola').innerHTML = somaEscarola;
        document.getElementById('vendasEscarola').innerHTML = vendaEscarola.toFixed(2);

    }else if(document.getElementById('roma').checked){
        somaRoma = somaRoma - 1;
        vendaRoma = vendaRoma - 50.00;
        if(somaRoma < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaRoma = 0;
            vendaRoma = 0.00;
        }
        document.getElementById('resultadoRoma').innerHTML = somaRoma;
        document.getElementById('vendasRoma').innerHTML = vendaRoma.toFixed(2);

    }else if(document.getElementById('doisQueijos').checked){
        somaDoisQueijos = somaDoisQueijos - 1;
        vendaDoisQueijos = vendaDoisQueijos - 50.00;
        if(somaDoisQueijos < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaDoisQueijos = 0;
            vendaDoisQueijos = 0.00;
        }
        document.getElementById('resultadoDoisQueijos').innerHTML = somaDoisQueijos;
        document.getElementById('vendasDoisQueijos').innerHTML = vendaDoisQueijos.toFixed(2);
    
    }else if(document.getElementById('bacon').checked){
        somaBacon = somaBacon - 1;
        vendaBacon = vendaBacon - 50.00;
        if(somaBacon < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaBacon = 0;
            vendaBacon = 0.00;
        }
        document.getElementById('resultadoBacon').innerHTML = somaBacon;
        document.getElementById('vendasBacon').innerHTML = vendaBacon.toFixed(2);

    }else if(document.getElementById('frangoCatupiry').checked){
        somaFrangoCatupiry = somaFrangoCatupiry - 1;
        vendaFrangoCatupiry = vendaFrangoCatupiry - 50.00;
        if(somaFrangoCatupiry < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaFrangoCatupiry = 0;
            vendaFrangoCatupiry = 0.00;
        }
        document.getElementById('resultadoFrangoComCatupiry').innerHTML = somaFrangoCatupiry;
        document.getElementById('vendasFrangoComCatupiry').innerHTML = vendaFrangoCatupiry.toFixed(2);
    
    }else if(document.getElementById('vegetariana').checked){
        somaVegetariana = somaVegetariana - 1;
        vendaVegetariana = vendaVegetariana - 50.00;
        if(somaVegetariana < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaVegetariana = 0;
            vendaVegetariana = 0.00;
        }
        document.getElementById('resultadoVegetariana').innerHTML = somaVegetariana;
        document.getElementById('vendasVegetariana').innerHTML = vendaVegetariana.toFixed(2);

    }else if(document.getElementById('gostosona').checked){
        somaGostosona = somaGostosona - 1;
        vendaGostosona = vendaGostosona - 50.00;
        if(somaGostosona < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaGostosona = 0;
            vendaGostosona = 0.00;
        }
        document.getElementById('resultadoGostosona').innerHTML = somaGostosona;
        document.getElementById('vendasGostosona').innerHTML = vendaGostosona.toFixed(2);

    }else if(document.getElementById('cocaCola').checked){
        somaCocaCola = somaCocaCola - 1;
        vendaCocaCola = vendaCocaCola - 50.00;
        if(somaCocaCola < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaCocaCola = 0;
            vendaCocaCola = 0.00;
        }
        document.getElementById('resultadoCocaCola').innerHTML = somaCocaCola;
        document.getElementById('vendasCocaCola').innerHTML = vendaCocaCola.toFixed(2);
    
    }else if(document.getElementById('fantaLaranja').checked){
        somaFantaLaranja = somaFantaLaranja - 1;
        vendaFantaLaranja = vendaFantaLaranja - 50.00;
        if(somaFantaLaranja < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaFantaLaranja = 0;
            vendaFantaLaranja = 0.00;
        }
        document.getElementById('resultadoFantaLaranja').innerHTML = somaFantaLaranja;
        document.getElementById('vendasFantaLaranja').innerHTML = vendaFantaLaranja.toFixed(2);

    }else if(document.getElementById('fantaUva').checked){
        somaFantaUva = somaFantaUva - 1;
        vendaFantaUva = vendaFantaUva - 50.00;
        if(somaFantaUva < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaFantaUva = 0;
            vendaFantaUva = 0.00;
        }
        document.getElementById('resultadoFantaUva').innerHTML = somaFantaUva;
        document.getElementById('vendasFantaUva').innerHTML = vendaFantaUva.toFixed(2);

    }else if(document.getElementById('taxaEntrega').checked){
        somaTaxaEntrega = somaTaxaEntrega - 1;
        vendaTaxaEntrega = vendaTaxaEntrega - 50.00;
        if(somaTaxaEntrega < 0)/*Aqui e para quando o usuario diminuir o número de pizzas, a contagem não fica negativa */
        {
            somaTaxaEntrega = 0;
            vendaTaxaEntrega = 0.00;
        }
        document.getElementById('resultadoTaxaEntrega').innerHTML = somaTaxaEntrega;
        document.getElementById('vendasTaxaEntrega').innerHTML = vendaTaxaEntrega.toFixed(2);

    }

}

/*Gerando a planilha */
function planilha(e){
    TableToExcel.convert(document.getElementById('table'));
}