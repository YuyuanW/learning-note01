div1.addEventListener('click',(e)=>{
    const t = e.target
    if(t.tagName.toLowerCase() === 'button' ){
        console.log('button被点击了')
        console.log('被点击的button的内容是'+t.textContent)
    }
})

setTimeout(()=>{
    const button = document.createElement('button')
    button.textContent = '我是延时button'
    div2.appendChild(button)
},4000)

div2.addEventListener('click',(e)=>{
    const t = e.target
    if(t.tagName.toLowerCase() === 'button'){
        console.log('延时出现的button被点击了')
    }
})


// 封装事件函数  
// 调用函数实现目标
on('click','#div1','button',()=>{console.log('button被点击了from封装函数on')})
function on(eventType,element,selector,fn){
    if(!(element instanceof Element)){element = document.querySelector(element)}
    element.addEventListener(eventType,(e)=>{
        const t = e.target
        if(t.matches(selector)){
            fn(e)
        }
    })

}

