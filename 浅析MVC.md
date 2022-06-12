### 目录
1.  MVC 三个对象分别做什么，给出伪代码示例
2.  EventBus 有哪些 API，是做什么用的，给出伪代码示例
3.  表驱动编程是做什么的（可以自己查查资料）
4.  我是如何理解模块化的

### 前言
MVC是一种架构设计模式，它通过关注点分离鼓励改进应用程序组织。\
在过去，MVC被大量用于构建桌面和服务器端应用程序，如今Web应用程序的开发已经越来越向传统应用软件开发靠拢，Web和应用之间的界限也进一步模糊。传统编程语言中的设计模式也在慢慢地融入Web前端开发。由于前端开发的环境特性，在经典MVC模式上也引申出了诸多MVx模式，被实现到各个Javascript框架中都有多少的衍变。

### 正文
##### 一、MVC 三个对象分别做什么
-   M（Model:数据模型）: 负责操作所有的数据
-   V（View:视图）: 负责所有的UI界面
-   C（Controller:控制器）: 负责其他

现在给定一个需求，我们需要实现对一个数字进行+ - * / 的操作，并且页面刷新不会刷新数字。

**M对象操作所有的数据**\
数据相关都放到m,（采用伪代码，理解思路即可）
```js
const m = {
    //创建数据属性和数据的使用方法
    data:{
        n : 数据data-A
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data)  //用新属性新数据替换旧的
        eventBus.trigger('事件A') // updata被调用则触发事件A       
    },
    get(){}    
}
```

**V对象负责所有的UI界面**\
视图相关都放到v，代码如下：

```js
const v ={
    container : undefined ,   // 需要刷新的dom元素
    html : `刷新的内容`,               
    init(container){          
        v.el = $(container)
    },
    render(n){      //渲染页面
        if(v.el.children.length !== 0) v.el.empty()
        $(v.html.replace('{{n}}',n)).appendTo(v.el)
    },
}
```

**C对象负责其他**\
其他都放到c对象中，代码如下：
```js
const c = {
    init(container){
        v.init(container), //初始化view
        v.render(m.data.n),  //第一次渲染界面
        c.autoBindEvents(), //绑定事件
        eventBus.on('事件A',()=>{ v.render(m.data.n)}) 
        //监听事件A，并触发重新渲染页面的函数
    },

    events : { //页面需要监听的元素
        'click #add1' : 'add',
        'click #subtract1' :'subtract',
        'click #multiply2' : 'multiply',
        'click #divide2' :'divide'
    },
        
    add(){  //具体对应的方法
        m.update({n:m.data.n+1})
    },

    subtract(){
        m.update({n:m.data.n-1})
    },
    multiply(){
        m.update({n:m.data.n*2})
    },
    divide(){
        m.update({n:m.data.n/2})
    },

    autoBindEvents(){
        for(let key in c.events){  //哈希表存储后遍历
            const part0 = (key.split(' ')[0])
            const part1 = (key.split(' ')[1])
            const value = c[c.events[key]]
            v.el.on(part0,part1,value)
        }
    }

    
}

```

##### 二、EventBus 有哪些 API，是做什么用的

1、什么是EventBus?

简单的说，就是一个以事件为驱动的消息服务总线

2、Web平台运行期为什么要用EventBus？

-   便于业务逻辑解耦
-   提供丰富的扩展点，包括前扩展、后扩展和覆盖
-   使用事件驱动，让事件触发更加清晰
-   让代码更加简洁清楚

3、Web平台运行期在那些地方使用了EventBus？

-   业务逻辑调度中心，包括前端、Web服务端任何地方
-   通过EventBus集成各种超类、模板、页面
-   通过EventBus集成各种系统服务与业务组件

4、EventBus 有哪些 API?

可以通过console.dir进行查看
-   on : 监听事件
-   trigger(emit) : 触发事件
-   off : 取消监听

```js
class EventBus {
    constructor() {
        this._eventBus = $(window)
    }
    on(eventName, fn) {
        return this._eventBus.on(eventName, fn)
    }
    trigger(eventName, data) {
        return this._trigger.trigger(eventName, data)
    }
    off(eventName, fn) {
        return this._eventBus.off(eventName, fn)
    }
}
export default EventBus
//new.js
import EventBus from 'EventBus.js'
const e = new EventBus()
e.on()
e.trigger()
e.off()
```



##### 三、表驱动编程是做什么的
表驱动方法是一种使你可以在表中查找信息，而不必用逻辑语句（if 或 case）来把他们找出来的方法。事实上，任何信息都可以通过表来挑选。在简单的情况下，逻辑语句往往更简单而且更直接。但随着逻辑链的复杂，表就变得越来越富于吸引力了。表驱动编程的意义在于逻辑与数据的分离。

可以简单的理解的就是用同样的方式处理不同的数据，表驱动方法具有以下特点：

- 可读性强，数据处理流程一目了然。

- 便于维护，只需要增、删数据索引和方法就可以实现功能。

- 精简代码，降低圈复杂度。减少 if-else、switch-case 使用。

- 在一定程度上可以提升程序运行速度


```js
//不使用表驱动编程
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

```


```js
//使用表驱动编程
events : {
        'click #add1' : 'add',
        'click #subtract1' :'subtract',
        'click #multiply2' : 'multiply',
        'click #divide2' :'divide'
    },
        
    add(){
        m.update({n:m.data.n+1})
    },

    subtract(){
        m.update({n:m.data.n-1})
    },
    multiply(){
        m.update({n:m.data.n*2})
    },
    divide(){
        m.update({n:m.data.n/2})
    },

    autoBindEvents(){
        for(let key in c.events){
            const part0 = (key.split(' ')[0])
            const part1 = (key.split(' ')[1])
            const value = c[c.events[key]]
            v.el.on(part0,part1,value)
        }
    }

```

很明显，使用表驱动编程的代码，简洁、美观、清晰了很多。

##### 四、我是如何理解模块化的

模块化是将重复的代码和独立的功能抽离出来，封装起来。在重构代码的过程中，模块化是一种非常好用的方法。这样可以使得各个功能板块更加独立，使得每个模块的维护成本也降低，同时，代码也更加简洁。
-   代码模块化之后无论是代码的整体性还是后期进行代码维护都变的清晰简单了起来。例如与逻辑相关的代码统一放到JS文件中，与视图相关的统一放到html文件中，与样式相关的统一放到css文件中。
-   业务模块化之后可以使业务流程更为清晰，便于开展工作，各个业务模块之间负责自己模块的业务，也避免了一些不必要的麻烦，使得工作的效率也会更高。
-   模块化我觉得是一种高效的思想，这在编程过程中提供了一种优化代码以及重构代码的方向。
































