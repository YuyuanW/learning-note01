console.log('我是main.js')
let n=1;
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            let array = JSON.parse(request.response) 
            array.forEach(element => {
                const li = document.createElement('li')
                li.textContent = element.id
                xxx.appendChild(li)
            });
            n=n+1
        }

    }
    request.send()
}

getJs.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','./2.js')
    request.onload = ()=>{

        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('js请求发送失败')
    }
    request.send()
}
getCss.onclick = ()=>{
    const request = new XMLHttpRequest() //创建对象
    request.open('GET','./style.css')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('下载完成了！')
            if((request.status <300) && (request.status>=200)){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
        }   
    }
    request.send();
}

getHtml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','./3.html')
    request.onload =()=>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror=()=>{
        console.log('html请求发送失败~')
    }
    request.send()
}

getChange.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('get','./2.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('下载完成了！')
        }
        
    }
    request.send()

}

getXml.onclick = ()=>{
    const request = new XMLHttpRequest() //创建对象
    request.open('GET','./4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if((request.status <300) && (request.status>=200)){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent.trim()
                console.log(text)
                // const style = document.createElement('style')
                // style.innerHTML = request.response
                // document.head.appendChild(style)
            }
        }   
    }
    request.send(); 
}

getJson.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('get','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const object = JSON.parse(request.response)
            userName.textContent = object.name
        }
    }
    request.send()
}
