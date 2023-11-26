
//Endereço do api que construimos
 
const URL = 'http://localhost/API_VIDDA/api/Consultas';
 fetch( URL, {method: 'GET'})
     .then(resp => resp.json())
     .then(data => mostrarResposta(data))
     .catch(erro => console.log(erro));
 
 //Criamos a função mostrarResposta(data)
 function mostrarResposta(data) {
     console.log(data);
     if (data.status != "sucess")
        alert("Sem registro de paciente!!!");
     else
        criarTabela(data.information);
 }        

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
         
         //Registro Nome:
         var tdData = document.createElement("td");
         var textoData = document.createTextNode(item.data_consulta);
         tdData.appendChild(textoData);
         tr.appendChild(tdData);
     
         //Registro Email:
         var tdHora = document.createElement("td");
         var textoHora = document.createTextNode(item.data_consulta);
         tdHora.appendChild(textoHora);
         tr.appendChild(tdHora);

         //Registro Telefone:
         var tdEspecialidade = document.createElement("td");
         var textoEspecialidade = document.createTextNode(item.id_especialista);
         tdEspecialidade.appendChild(textoEspecialidade);
         tr.appendChild(tdEspecialidade);

         var tdNome = document.createElement("td");
         var textoNome = document.createTextNode(item.id_especialista);
         tdNome.appendChild(textoNome);
         tr.appendChild(tdNome);

         var tdRegistro = document.createElement("td");
         var textoRegistro = document.createTextNode(item.id_especialista);
         tdNome.appendChild(textoRegistro);
         tr.appendChild(tdRegistro);

         //Anexar os campos nos registros da tabela
         corpo.appendChild(tr);

     });

     //Adicionar corpo na tabela
     tabela.appendChild(corpo);
     
     //Adicional a tabela no conteiner (painel) div
     document.getElementById("HistoricoAgendamentos").appendChild(tabela);            
 } 
