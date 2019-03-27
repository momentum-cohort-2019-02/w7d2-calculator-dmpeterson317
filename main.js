'use strict'

// let buttons = document.getElementsByClassName('keys');
// for (let button of buttons) {
//     button.addEventListern("click", clickHandler);
// }

// let displayChars = "0";
// let display = document.getElementById('display');

// function clickHandler(evt) {

// }

// function main () {
    
// }
  
// document.addEventListener('DOMContentLoaded', main)

// document.getElementById('display').innerText = 0;

document.getElementById('one').addEventListener('click', function () {
    document.getElementById('display').innerText += '1';
})

document.getElementById('two').addEventListener('click', function () {
    document.getElementById('display').innerText += '2'
})

document.getElementById('three').addEventListener('click', function () {
    document.getElementById('display').innerText += '3'
})

document.getElementById('four').addEventListener('click', function () {
    document.getElementById('display').innerText += '4'
})

document.getElementById('five').addEventListener('click', function () {
    document.getElementById('display').innerText += '5'
})

document.getElementById('six').addEventListener('click', function () {
    document.getElementById('display').innerText += '6'
})

document.getElementById('seven').addEventListener('click', function () {
    document.getElementById('display').innerText += '7'
})

document.getElementById('eight').addEventListener('click', function () {
    document.getElementById('display').innerText += '8'
})

document.getElementById('nine').addEventListener('click', function () {
    document.getElementById('display').innerText += '9'
})

document.getElementById('decimal').addEventListener('click', function () {
    document.getElementById('display').innerText += '.'
})

document.getElementById('plus').addEventListener('click', function () {
    document.getElementById('display').innerText += '+'
})

document.getElementById('minus').addEventListener('click', function () {
    document.getElementById('display').innerText += '-'
})

document.getElementById('times').addEventListener('click', function () {
    document.getElementById('display').innerText += '*'
})

document.getElementById('divide').addEventListener('click', function () {
    document.getElementById('display').innerText += '%'
})

document.getElementById('clear').addEventListener('click', function () {
    let display = "";
    document.getElementById('display').innerText = display
})

document.getElementById('equal').addEventListener('click', function() {
    let x = document.getElementById('display').innerText;
    console.log(x);
    let display = eval(document.getElementById('display').innerText);
    document.getElementById('display').innerText = display
})

// function equal() {
//     document.getElementById('display').innerText = eval(document.getElementById('display').innerText)
// }