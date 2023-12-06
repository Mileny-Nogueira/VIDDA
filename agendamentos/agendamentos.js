//Expandir menu
const btnMenu = document.querySelector('#btnMenu'); 
function click(){
    
    const menuLateral = document.querySelector('#menu-lateral');

    menuLateral.classList.toggle('expandir');
    if(menuLateral.classList.contains('expandir')==true){
        btnMenu.style.left = "310px"
        btnMenu.style.transform = "rotate(-180deg)"
    }else{
        btnMenu.style.left = "70px"
        btnMenu.style.transform = "rotate(0deg)"
    }
}

//Endereço do api que construimos
 
const URL = 'http://localhost/API_VIDDA/api/Consultas';
 fetch( URL, {method: 'GET' })
     .then(resp => resp.json())
     .then(data => mostrarResposta(data))
     .catch(erro => console.log(erro));

  
 //Criamos a função mostrarResposta(data)
 function mostrarResposta(data) {
     
     if (data.status != "sucess")
        alert("Sem registro de paciente!!!");
     else
        criarTabela(data.information);
 }    
 
 document.addEventListener('DOMContentLoaded',function buscar(){
    //Este comando é para prevenir o cancelamento de evento: evento de click->buscar os dados
    event.preventDefault();
    //variável ra é um número inteiro. parseInt(...) transformar texto para inteiro
    const email =  'paulo@teste.com'

    if ( email != "" ) { //RA não pode ser null, pois através dele para buscar dados
            //Endereço do api que construimos
            const URL2 = 'http://localhost/API_VIDDA/api/Pacientes/'+email;
            //fetch(URL , options)
            fetch( URL2 , {method: 'GET'} )
                 
                //para transformar a resposta de texto puro para JSON
                .then(resp => resp.json())
                .then(data => mostrarResposta2(data))
                //Além disso podemos utilizar o método catch() para tratar erros.
                //e a mensagem de erros estará console
                .catch(erro => console.log(erro))
    }

//Uma função para mostar uma mensagem e os dados buscados
function mostrarResposta2(data){
    
    //colocando os dados buscados nos campos do formulário
        
        document.getElementById('txtnome').innerHTML = data.information.nome_paciente;
        document.getElementById('txttelefone').innerHTML = data.information.telefone_paciente;
        document.getElementById('txtdn').innerHTML = data.information.data_nascimento_paciente;
        document.getElementById('txtemail').innerHTML = data.information.email_paciente;
        document.getElementById('txtcpf').innerHTML = data.information.cpf_paciente;
}
 })
    
//Entrada de dados do Paciente
 
 //criamos a função criaTabela()
 function criarTabela(conteudo) {
     //Os elementos da tabela
     var tabela = document.createElement("table"); 
     var cabecalho = document.createElement("thead");
     var corpo = document.createElement("tbody");

     /*Monstar cabeçalho da tabela */
     //criamos uma linha para cabeçalho:
     var tr = document.createElement("tr");
     //criamos 4 colunas 
     var thData = document.createElement("th");
     var thHora = document.createElement("th");
     var thEspecialidade = document.createElement("th");
     var thNome = document.createElement("th");
     var thRegistro = document.createElement("th");


     //Adicionar os campos da coluna na linha do cabeçalho
     thData.appendChild(document.createTextNode("DATA"));
     tr.appendChild(thData);

     thHora.appendChild(document.createTextNode("HORA"));
     tr.appendChild(thHora);

     thEspecialidade.appendChild(document.createTextNode("ESPECIALIDADE"));
     tr.appendChild(thEspecialidade);

     thNome.appendChild(document.createTextNode("NOME ESP."));
     tr.appendChild(thNome);

     thRegistro.appendChild(document.createTextNode("REGISTRO"));
     tr.appendChild(thRegistro);

     //Adicionar a linha no cabeçalho
     cabecalho.appendChild(tr);

     //Adicionar o cabeçalho na tabela
     tabela.appendChild(cabecalho);

     /* Registros da tabela: usando .forEach(...) */
     conteudo.forEach(item => {
         var tr = document.createElement("tr");
         
         //Registro Data:
         var tdData = document.createElement("td");
         var textoData = document.createTextNode(item.data_consulta);
         tdData.appendChild(textoData);
         tr.appendChild(tdData);

        //Registro Hora:
        var tdHora = document.createElement("td");
        var textoHora = document.createTextNode(item.hora_consulta);
        tdHora.appendChild(textoHora);
        tr.appendChild(tdHora);
         
         //Registro Especialidade:
         var tdEspecialidade = document.createElement("td");
         var textoEspecialidade = document.createTextNode(item.especialidade_consulta);
         tdEspecialidade.appendChild(textoEspecialidade);
         tr.appendChild(tdEspecialidade);

         var tdNome = document.createElement("td");
         var textoNome = document.createTextNode(item.nome_especialista);
         tdNome.appendChild(textoNome);
         tr.appendChild(tdNome);

         var tdRegistro = document.createElement("td");
         var textoRegistro = document.createTextNode(item.registro_especialista);
         tdRegistro.appendChild(textoRegistro);
         tr.appendChild(tdRegistro);

         //Anexar os campos nos registros da tabela
         corpo.appendChild(tr);

     });

     
     //Adicionar corpo na tabela
     tabela.appendChild(corpo);
     
     //Adicional a tabela no conteiner (painel) div
     document.getElementById("HistoricoAgendamentos").appendChild(tabela);            
 } 

