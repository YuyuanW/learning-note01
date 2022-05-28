const link = (url)=>{
    let link =''
    if(url.indexOf('www') !== -1){
        link = url.split('www.')[1]
    }else if(url.indexOf('www') === -1){
        link = url.split('//')[1]
    }
    if(link.indexOf('/') !== -1){
        link = link.split('/')[0]
    }
    return link
}

const x = localStorage.getItem('x')
const xObject = JSON.parse(x)

let hashMap = xObject || [
    {url:'https://www.acfun.cn'},
    {url:'https://www.bilibili.com'},
]




const $siteList = $('.siteList')   //查找元素class不加. 这个错误已经犯了n次
const $lastList = $siteList.find('li.last')

const render = ()=>{
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => { //新手写的代码就是一坨屎，别自己乱用函数
        console.log(1)
        const $li = $(`<li>
          <div class="site">
            <div class="logo">${link(node.url)[0].toUpperCase()}</div>
            <div class="link">${link(node.url)}</div>
            <div class="close">
              <svg class="icon">
                <use xlink:href="#icon-close"></use>
              </svg>
            </div>
          </div>
        </li>`).insertBefore($lastList)

        $li.on('click', () => {
            window.open(node.url)
          })
        $li.on('click', '.close', (e) => {
            e.stopPropagation() // 阻止冒泡
            hashMap.splice(index, 1)
            render()
        })
    })
    
}
render()


$('.addButton').on('click',()=>{
    let urlNew = window.prompt('请输入您要添加的网站的网址：')
    if(urlNew.indexOf('http' !== 0)){
        urlNew='https://'+urlNew
    }
    hashMap.push({url:urlNew})
    render()
})

window.onbeforeunload = ()=>{
    console.log('页面要关闭了')
    const string = JSON.stringify(hashMap) //localStorage只能存字符串
    window.localStorage.setItem('x',string) //将字符串string保存到x中

}
//清空加入的网页：无痕模式，清除cookie，关闭parcel
//注意：关闭浏览器不会消灭localStorage


//简化url
const simplifyUrl = (url)=>{
    return url.replace('https://','')
    .replace('http://')
    .replace('www.','')
}

$(document).on('keypress', (e) => {
    const {key} = e
    for (let i = 0; i < hashMap.length; i++) {
      if (link(hashMap[i].url)[0].toLowerCase()=== key) {
        window.open(hashMap[i].url)
      }
    }
  })