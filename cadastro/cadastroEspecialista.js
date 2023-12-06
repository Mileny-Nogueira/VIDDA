function salvar(event, form){
    event.preventDefault();

    const nome = document.cadastro.txtNome.value;
    const especialidade = document.cadastro.txtEspecialidade.value;
    const registro = document.cadastro.txtRegistro.value;
    const email = document.cadastro.txtEmail.value;
    const senha = document.cadastro.txtSenha.value;
    const cpf = document.cadastro.txtCpf.value;
    const genero = document.cadastro.txtGenero.value;

    const dados = {
        nome_especialista: nome,
        especialidade_especialista: especialidade,
        registro_especialista: registro,
        email_especialista: email,
        senha_especialista: senha,
        cpf_especialista: cpf,
        sexo_especialista: genero   
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify(dados),
    };

    if (nome != "" && especialidade != "" && registro != "" && email != "" && senha != "" && cpf != "" && genero != ""){
        const URL = 'http://localhost/vidda_api/api/Especialistas';
        fetch(URL, options)
            .then(resp => resp.json())
            .then(data => mostrarResposta(data))
            .catch(erro => console.log(erro))
    }
    else{
        alert("Erro ao cadastrar, complete todos os campos!");
    }
}

function mostrarResposta(data, form){
    console.log(data);

    if(data.status == "sucess"){
        alert("Cadastro realizado com sucesso, agora você pode fazer o login!");
        nome.value = "";
        especialidade.value = "";
        registro.value = "";
        email.value = "";
        senha.value = "";
        cpf.value = "";
        genero.value = "";
        
    }else{
        alert("Erro ao realizar o cadastro! \n\nInconsistências:\n" + data.data);
    }
}

function validarSomenteNumeros(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function mascaraCpf(cpfInput) {
    cpfInput.value = cpfInput.value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4'); 
}