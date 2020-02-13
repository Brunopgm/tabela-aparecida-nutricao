var pacientes = document.querySelector("#tabela-pacientes")

pacientes.addEventListener("dblclick", function(event){
    
    var paciente = pacientes.querySelectorAll(".paciente")
    
    paciente.forEach(pacienteAtual => {
        if(pacienteAtual == event.target.parentNode){
            pacienteAtual.classList.add("fadeOut")
            
            setTimeout(() => {pacienteAtual.remove()}, 500);    
        }    
    });
})








