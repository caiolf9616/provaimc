const pesoInput = document.getElementById('peso')
const alturaInput = document.getElementById('altura') 
const resultado = document.getElementById('resultado')


function calculoImc(){
    const peso = Number(pesoInput.value)
    const altura = Number(alturaInput.value) / 100

    if(isNaN(peso) || isNaN(altura)){
        resultado.textContent = 'Por Favor, Insira os Valores Validos!'
        return
    }

    const imc = peso / (altura * altura)
    resultado.textContent = `Seu imc e de ${imc.toFixed(2)}!`
}

document.getElementById('calcularBtn').addEventListener('click', function(event) {
    event.preventDefault();
    calculoImc();
})