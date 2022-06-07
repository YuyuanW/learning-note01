import $ from 'jquery'
import './app1.css'
const $add = $('#add1')
const $subtract = $('#subtract1')
const $multiply = $('#multiply2')
const $divide = $('#divide2')
let $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n || 100)

$add.on('click',()=>{
    number = parseInt($number.text()) 
    number += 1
    localStorage.setItem('n',number)
    $number.text(number)
})

$subtract.on('click',()=>{
    number = parseInt($number.text()) 
    number -= 1
    localStorage.setItem('n',number)   
    $number.text(number)
})

$multiply.on('click',()=>{
    number = parseInt($number.text()) 
    number *= 2
    localStorage.setItem('n',number)
    $number.text(number)
})

$divide.on('click',()=>{
    number = parseInt($number.text()) 
    number /= 2
    localStorage.setItem('n',number)
    $number.text(number)
})
