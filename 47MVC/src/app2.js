import $ from 'jquery'
import './app2.css'
const $bar = $('#app2 .tab-bar')
const $content = $('#app2 .tab-content')

$bar.on('click','li',(e)=>{
    const $li =  $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    const index = $li.index()
    $content.children().eq(index).addClass('active').siblings().removeClass('active')
})

$bar.children().eq(0).trigger('click')