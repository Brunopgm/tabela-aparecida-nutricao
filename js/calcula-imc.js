var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");



for(i = 0; i < pacientes.length; i++){
    paciente = pacientes[i];
  
    tdPeso = paciente.querySelector(".info-peso");
    peso = tdPeso.textContent;

    tdAltura = paciente.querySelector(".info-altura");
    altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    imc = paciente.querySelector(".info-imc")
    imc.textContent = calculaImc(peso, altura).toFixed(2);


    if (!pesoValido){

        imc.textContent = "Peso inválido"
        imc.classList.add("paciente-invalido")
        
    }

    if (!alturaValida) {
        imc.textContent = "Altura inválida"
        imc.classList.add("paciente-invalido")
    }


}



function calculaImc(peso, altura) {
    return peso/(altura*altura).toFixed(2)
}


function validaPeso(peso){
    if(peso >= 0 && peso < 800){
       return pesoValido = true
    } else{
        return pesoValido = false
    }
} 

function validaAltura(altura) {
    if(altura >= 0 && altura <3.00){
        return alturaValida = true
    } else{
        return alturaValida = false
    }
}