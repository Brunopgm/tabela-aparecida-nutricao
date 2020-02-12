var botaoBuscar = document.querySelector("#filtrar-tabela")
botaoBuscar.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente")
   
    for (i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdPacientes = document.querySelector("#tabela-pacientes")
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expression = new RegExp(this.value, "i")

       if(this.value.length > 0){

            if(expression.test(nome)){
                paciente.classList.remove("invisivel");
                
            }else{
                paciente.classList.add("invisivel");
                
            }

       }else{
           paciente.classList.remove("invisivel")
       }
        

        
    }
     
});