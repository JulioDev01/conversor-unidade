const quantidade = document.querySelector('.quantidade');
const de = document.querySelector('.de');
const para = document.querySelector('.para');
const btnConverter = document.getElementById('btnConverter');
const result = document.querySelector('.result');
const msg = document.getElementById('msg');


//Ao clicar no btn, ira limpar os campos e depois realizar a coversão.

btnConverter.addEventListener('click', () =>{
    limpaCampos();
    conversao();
})



function conversao(){

    const unid1 = de.value;
    const unid2 = para.value;

    if (unid1 == unid2) {
        unid2.value = quantidade.value;
        //msg.style.color = 'red';
        msg.textContent = "Indentifique unidades de medida diferentes!";
        return;
    } else {
        // Na conversão, a primeira unidade de medida escolhida pelo usuario sempre vai ser passada para metros, para no final ser passada para a que ele realmente quer;
        //Convertando para metros
        let metros;
        switch(unid1){
            case 'm':
                metros = quantidade.value
                break;
            case 'km':
                metros = quantidade.value * 1000
                break;
            case 'cm':
                metros = quantidade.value / 100
                break;
            case 'mm':
                metros = quantidade.value / 1000  
                break;
        }

        //Convertendo para unidade de saida
        let resultado;
        switch(unid2){
            case 'm':
                resultado = metros
                break;
            case 'km':
                resultado = metros / 1000
                break;
            case 'cm':
                resultado = metros * 100
                break;
            case 'mm':
                resultado = metros * 1000  
                break;
        }
        
        //Exibindo conversão no input
        result.value = resultado; 
    }
}


function limpaCampos(){
    result.value = '';
}