const calculate = document.querySelector('#calculate')

function imc() {
  const name = document.querySelector('#name').value
  const height = document.querySelector('#height').value
  const weight = document.querySelector('#weight').value
  const result = document.querySelector('#result')

  if (name !== '' && height !== '' && weight !== '') {
    const IMC = (weight / (height * height)).toFixed(1)

    let classification = ''

    if (IMC < 18.5) {
      classification = 'Under the weight.'
    } else if (IMC < 25) {
      classification = 'Ideal weight .'
    } else if (IMC < 30) {
      classification = 'Slightly overweight'
    } else if (IMC < 35) {
      classification = 'Obesity level I'
    } else if (IMC < 40) {
      classification = 'Obesity level II'
    } else {
      classification = 'Obesity level III'
    }

    result.textContent = `${name} your IMC is ${IMC} and you are classificated as: ${classification}`
  } else {
    result.textContent = 'All the fields must be filled in!'
  }
}

calculate.addEventListener('click', imc)
