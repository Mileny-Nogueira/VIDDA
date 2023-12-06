//Expandir menu
btnMenu.addEventListener('click', function(){
    const btnMenu = document.querySelector('#btnMenu');
    const menuLateral = document.querySelector('#menu-lateral');

    menuLateral.classList.toggle('expandir');
    if(menuLateral.classList.contains('expandir')==true){
        btnMenu.style.left = "310px"
        btnMenu.style.transform = "rotate(-180deg)"
    }else{
        btnMenu.style.left = "70px"
        btnMenu.style.transform = "rotate(0deg)"
    }
})

//Realizar a busca de especialidades de acordo com o h2 do card
document.addEventListener('DOMContentLoaded', function () {
    const inputBusca = document.getElementById('inputBusca');
    const resultadosPesquisa = document.getElementById('resultados');
    const cards = document.querySelectorAll('.card')

    inputBusca.addEventListener('input', function () {
        resultadosPesquisa.innerHTML = '';

        let valorBuscado = inputBusca.value.toUpperCase();

        let resultados = Array.from(cards).filter(function (card) {
            let h2Text = card.querySelector('h2').textContent.toUpperCase();
            return h2Text.includes(valorBuscado);
        });

        resultados.forEach(function (resultado) {
            let resultadoItem = resultado.cloneNode(true);
            resultadosPesquisa.appendChild(resultadoItem);
        });
        //limpa os resultados após o usuário voltar ao estado inicial de ''
        if(inputBusca.value == ''){
            resultadosPesquisa.innerHTML = '';
        }
    })
})

function queryString(parameter) {  

    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}

var email = queryString("email");
console.log(email);



