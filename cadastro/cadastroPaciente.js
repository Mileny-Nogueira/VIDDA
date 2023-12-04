function salvar(event, form){
    event.preventDefault();

    const nome = document.cadastro.txtNome.value;
    const celular = document.cadastro.txtCelular.value;
    const cpf = document.cadastro.txtCpf.value;
    const email = document.cadastro.txtEmail.value;
    const senha = document.cadastro.txtSenha.value;
    const data = document.cadastro.txtData.value;
    const genero = document.cadastro.txtGenero.value;

    const dados = {
        nome_paciente: nome,
        sexo_paciente: genero,
        email_paciente: email,
        telefone_paciente: celular,
        data_nascimento_paciente: data,
        senha_paciente: senha,
        cpf_paciente: cpf
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify(dados),
    };

    if (nome != "" && genero != "" && email != "" && celular != "" && data != "" && senha != "" && cpf != ""){
        const URL = 'http://localhost/vidda_api/api/Pacientes';
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
        
    }else{
        alert("Erro ao realizar o cadastro! \n\nInconsistências:\n" + data.data);
        nome.value = "";
        celular.value = "";
        cpf.value = "";
        email.value = "";
        senha.value = "";
        genero.value = "";
        
    }
}
