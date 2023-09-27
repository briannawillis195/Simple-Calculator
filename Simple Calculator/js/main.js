let total = 0

document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#subtract').addEventListener('click', subtract)
document.querySelector('#addition').addEventListener('click', addition)

function multiply(){
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    total = num1 * num2
    document.querySelector('#result').innerText = total
}

function divide (){
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    total = num1 / num2
    document.querySelector('#result').innerText = total
}

function subtract(){
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    total = num1 - num2
    document.querySelector('#result').innerText = total
}

function addition (){
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    total = num1 + num2
    document.querySelector('#result').innerText = total
}