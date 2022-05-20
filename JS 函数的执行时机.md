# JS 函数的执行时机 笔记
### 解释为什么如下代码会打印 6 个 6
```js
let i = 0
for(i = 0; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}

```

#### answer
首先let i = 0 是声明了一个变量i,然后for中，首先对i变量进行初始化为0，然后判断 i === 0 < 6 条件通过，进入setTimeout函数的环境中，发现setTimeout函数嫌弃i太穷了，于是让js待会再过来执行，js头也不回地走了，说了句再见，js忙完后是i富有到i===6的时候，js忙完了一切，蓦然回首想起了还有个setTimeout，于是驾着肥硕的i===6找到函数打算执行，setTimeout发现来了个富老头，马上就开动了console.log函数，一次一次地对js说，我爱你，不是因为你有劳斯莱斯。Js之前让它干了多少次它没干，现在看着劳斯莱斯都补回来了。


### 写出让上面代码打印 0、1、2、3、4、5 

#### answer
```js
for(let i = 0 ; i<6; i++){
  setTimeout(()=>{
    console.log(i)
  },0)
}

```

setTimeout嫌弃i穷，但是let一直盯着

### 除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5

#### answer
把setTimeout踹了，换个白月光不就行了？？……
```js
for(var i=0 ; i<6 ; i++){
    console.log(i)
}
```
