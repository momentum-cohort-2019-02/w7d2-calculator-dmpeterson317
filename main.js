'use strict'

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
    // let x = document.getElementById('display').innerText;
    // console.log(x);
    let display = eval(document.getElementById('display').innerText);
    document.getElementById('display').innerText = display
})
