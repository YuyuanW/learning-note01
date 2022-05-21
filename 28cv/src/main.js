let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `
/*你好，我叫Yuyuan 
*接下来我演示一下我的前端功底
*首先要演示的是一个div*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要把div变成一个八卦图
*注意看好了
*首先，我把div变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border:none;
}
/*八卦是由阴阳形成的
*一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘小球*/
#div1::before{
    top:0;
    left:50%;
    display: block;
    
    border-radius: 50%;
    width:100px;
    height:100px;
    transform: translateX(-50%);
    position: absolute;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#div1::after{
    bottom:0;
    right:50%;
    display: block;
    
    border-radius: 50%;
    width:100px;
    height:100px;
    transform: translateX(50%);
    position: absolute;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let string2 = ``  //用一个sting2装着屏幕要显示的结果，然后innerHTML出来
let n = 0;
let step = () => {
    setTimeout(() =>{ 
        // string2+= (string[n] === '\n' ? '<br>' : string[n]) //string2搬string1的时候，处理换行的问题
        if(string[n] === '\n'){string2+='<br>'}else if(string[n] === ' '){string2+='&nbsp;'}else{string2+=string[n]}
        html.innerHTML = string2; 
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n+1<string.length){step();n+=1;}
        // if(string[n] === '}'){style.innerHTML = `
        // body{color:red;}`}
    },0)
}


step()



