let numberOne = prompt (`Olá, digite o primeiro número`)
let numberTwo = prompt (`Agora, digite o segundo número`)

numberOne = Number(numberOne);
numberTwo = Number(numberTwo)

let sum = alert (`A soma de ${numberOne} + ${numberTwo} é: ${numberOne + numberTwo}`)
let subtraction = alert (`A subtração de ${numberOne} - ${numberTwo} é: ${numberOne - numberTwo}`)
let multiplication = alert (`A multiplicação de ${numberOne} x ${numberTwo} é: ${numberOne * numberTwo}`)
let division = alert (`A divisão de ${numberOne} / ${numberTwo} é: ${numberOne / numberTwo}`)
let restOfDivision = alert (`O resto da divisão de ${numberOne} % ${numberTwo} é: ${numberOne % numberTwo}`)

sum = numberOne + numberTwo;

everOrOdd(sum);
sameOrDifferent(numberOne, numberTwo);

function everOrOdd(sum) {
    if (sum % 2 == 0){
        alert (`A soma dos dois números é PAR`)
    } else {
        alert (`A soma dos dois números é ÍMPAR`)
    }
}

function sameOrDifferent(numberOne, numberTwo) {
    if (numberOne == numberTwo) {
        alert (`Os números são IGUAIS`)
    } else {
        alert (`Os números são DIFERENTES`)
    }
}

