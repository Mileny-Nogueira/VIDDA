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

function AGENDAR(event, form){
    //Este comando (ou método) é para prevenir o cancelamento de evanto
    event.preventDefault();
    //variáveis para obter os dados digitados
    const esp = document.agendar.txtesp.value;
    const rp = document.agendar.txtrp.value;
    const dataconsulta = document.agendar.txtdata.value;
    const rm = document.agendar.txtrm.value;
    //uma lista para armazenar conjunto de dados obtidos
    const dados = {   
        id_paciente: rp, 
        especialidade_consulta: esp,
        id_especialista: rm,
        data_consulta: dataconsulta,
    };
    //uma lista para dados de configuração
    const options = {
        method: 'POST', //método 'post': para enviar os dados
        headers: {
        'Content-Type': 'application/json',            
        },
        //De formato JSON para formato texto normal
        body: JSON.stringify(dados),
    };
    if (dataconsulta != "" ) {         
            //Endereço do api que construimos para cadastar os dados no BD
            const URL = 'http://localhost/API_VIDDA/api/Consultas';
            fetch(URL , options) //operação para executar cadastro                      
                /*Uma Arrow function é exatamente como uma função/callback normal */ 
                .then(resp => resp.json())                                        
                .then(data => mostrarResposta(data))
                //Além disso podemos utilizar o método catch() para tratar erros.
                //e a mensagem de erros estará console
                .catch(erro => console.log(erro));            
    
    }
}
//Uma função para mostar uma mensagem de alerta "Dados incluidos com sucesso"
function mostrarResposta(data,form){
    //alert("Dados incluídos com sucesso");            
    // tipo de dados internos */
    console.log(data) ; 
    if(data.status == "sucess"){
        alert("Consulta agendada com sucesso!!!");
    } else {
        alert("Erro!!!");
    }                                  
}