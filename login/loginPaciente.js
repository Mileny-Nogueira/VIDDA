function buscar(event, form){    
    event.preventDefault();

    const email  = document.login.txtEmail.value;
    const senha  = document.login.txtSenha.value;
              
    const dados = { 
        email_login_paciente: email,
        senha_login_paciente: senha
    };
        
    const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',            
        },
        body: JSON.stringify(dados),
    };

    if (email != "" && senha != "") {           
        const URL = 'http://localhost/vidda_api/api/Loginpacientes';                      
            fetch(URL , options)//comunicar com BD e realizar a operação de acordo com método definido
                .then(resp => resp.json())                                    
                .then(data => mostrarResposta(data))
                .catch(erro => console.log(erro))           
    }else{
        document.getElementById("mensagem").textContent = "Complete todos os campos!";
    }
}
function mostrarResposta(data){
    console.log(data) ;       
    if(data.status == "error"){ 
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent =  data.data;     
    } else {
        location.href = "../index.html"; //mudar de index para a página que o paulo criou                   
    }
}
      