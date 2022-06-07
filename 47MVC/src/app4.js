import './app4.css'
import $ from 'jquery'

$circle = $('#app4 .circle')
$circle.on('mouseenter',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})