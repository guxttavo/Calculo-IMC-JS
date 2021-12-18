const calculate = document.querySelector('#calculate')

function imc() {
  const name = document.querySelector('#name').value
  const altura = document.querySelector('#altura').value
  const peso = document.querySelector('#peso').value
  const resultado = document.querySelector('#resultado')

  if (name !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1)

    let classificacao = ''

    if (valorIMC < 18.5) {
      classificacao = 'Abaixo do peso.'
    } else if (valorIMC < 25) {
      classificacao = 'Peso ideal.'
    } else if (valorIMC < 30) {
      classificacao = 'Levemente acima do peso.'
    } else if (valorIMC < 35) {
      classificacao = 'Obesidade grau I.'
    } else if (valorIMC < 40) {
      classificacao = 'Obesidade grau II'
    } else {
      classificacao = 'Obesidade grau III.'
    }

    resultado.textContent = `${name} seu IMC é ${valorIMC} e você está ${classificacao}`
  } else {
    resultado.textContent = 'Preencha todos os campos!'
  }
}

calculate.addEventListener('click', imc)
