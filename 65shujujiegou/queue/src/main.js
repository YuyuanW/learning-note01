const screen = document.querySelector('#screen') 
const createNum = document.querySelector('#createNum')
const callNum = document.querySelector('#callNum')
const num = document.querySelector('#newNum')
const queue = document.querySelector('#queue')

let n = 0
let arr = []

createNum.onclick = ()=>{
    n += 1
    arr.push.call(arr,n)
    queue.innerText = `${JSON.stringify(arr)}`
}

callNum.onclick = ()=>{
    if(arr.length == 0){
        return  alert('叫你妈逼的号')
    }else{
        const n = arr.shift.call(queue)
        num.innerText = `${n}`
        screen.innerText = `请号码为${n}的用户就餐`
        queue.innerText = `${JSON.stringify(arr)}`
    }
}
