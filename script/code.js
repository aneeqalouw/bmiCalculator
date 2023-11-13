let btnCalculate = document.querySelector('#btnCalc')
let output = document.querySelector('#output')


//function
function calculate (){
    let weight = +document.querySelector('#weight').value
    let height = +document.querySelector('#height').value
    let heightsquared = height ** 2
    let BMI = weight/heightsquared
    output.textContent = 'Your BMI is: ' + Math.round(BMI)
}

btnCalculate.addEventListener('click', calculate)