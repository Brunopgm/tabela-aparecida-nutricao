var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
          
    var paciente = obtemPacienteDoFormulario(form); 
    
    var erros = validaPaciente(paciente);



    if (erros.length > 0){
        mostraMensagemDeErro(erros);
        return;
    }


    adicionaPacienteNaTabela(paciente);
    
    form.reset();
    
    var mensagemDeErro = document.querySelector(".lista-erros");
    mensagemDeErro.innerHTML = "";
  
})

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value).toFixed(2)
    }
    return paciente
}


function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td
}

function montaTr(paciente) {
    var trPaciente = document.createElement("tr")
    trPaciente.classList.add("paciente");

    trPaciente.appendChild(montaTd(paciente.nome, "info-nome"))
    trPaciente.appendChild(montaTd(paciente.peso, "info-peso"))
    trPaciente.appendChild(montaTd(paciente.altura, "info-altura"))
    trPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"))
    trPaciente.appendChild(montaTd(paciente.imc, "info-imc"))
    
    return trPaciente
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
        
}



function validaPaciente(paciente){
    var erro = [];

    if (!validaPeso(paciente.peso)){
        erro.push("Peso inválido")   
    }

    if (!validaAltura(paciente.altura)){
        erro.push("Altura inválida")
    }

    if (paciente.nome.length == 0){
        erro.push("O nome não pode ser nulo")
    }

    if(paciente.peso.length == 0){
        erro.push("O peso não pode ser nulo")
    }
    
    if(paciente.altura.length == 0) {
        erro.push("A altura não pode ser nula")
    }

    if(paciente.gordura.length == 0){
        erro.push("A gordura não pode ser nula")
    }

    
    
    return erro
}

function mostraMensagemDeErro(erros){
 
    var ul = document.querySelector(".lista-erros")
    ul.innerHTML = "";
    
    erros.forEach(erros => {
        var li = document.createElement("li");
        li.textContent = erros;
        ul.appendChild(li).classList.add("paciente-invalido");
    });
}






