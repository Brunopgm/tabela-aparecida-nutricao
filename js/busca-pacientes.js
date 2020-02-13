var botaoDeBusca = document.querySelector(".busca-api-pacientes")
botaoDeBusca.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes11");

    xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax")    

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
                
            });

        } else{
            
            erroAjax.classList.remove("invisivel")
        }
        
        
        
    })

    xhr.send();
    
    
})