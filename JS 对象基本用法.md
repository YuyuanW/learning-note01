# JS 对象基本用法
## Questions
1. 声明对象的两种语法
2. 如何删除对象的属性
3. 如何查看对象的属性
4. 如何修改或增加对象的属性
5. 'name' in obj和obj.hasOwnProperty('name') 的区别

## Answers
### 声明对象的两种语法
let 和 const

一般let用于变量声明，const用于常量

变量常量的区别，就是const申明后，后续中此常量无法修改。

两者的共同点很多：
* 无法重复申明，申明后才能使用
* 有作用域，遵循block作用域
* 全局申明，不会变成Window的属性(var申明会让变量挂在window上)

### 如何删除对象的属性
删除属性的语法是：
```
delete obj.key 或者是 delete obj[‘key’]
```
确认是否删掉：
```
‘key’ in obj === True
```

### 如何查看对象的属性
查看自身属性：
```
Object.keys(obj)
Object.entries(obj)
```
查看共有属性(原型)：
```
console.log(obj.__proto__)
console.dir(obj)
```
判断一个属性是否为自身属性：
```
obj hasOwnProperty(‘key’) === True
```

### 如何修改或增加对象的属性
单个属性值：
```
obj.key = ‘aa’
obj[‘key’] = ‘aa’
```
多个属性值：
```
Object.assign(obj.{‘k1’:’v1’,’k2’:’v2’,……})
```
修改原型：
```
obj.__proto__.key = ‘aa’
Object.prototype.key = ‘aa’
```
修改隐藏属性：
```
obj.__proto__ = common
let obj = Object.create(common)
```
属性/对象 存在时的操作为修改，不存在时的操作为增加

### 'name' in obj和obj.hasOwnProperty('name') 的区别
* 'name' in obj是判断’name’是否是obj的一个属性，这个属性可以是自身属性也可以是共有属性
* obj.hasOwnProperty('name') 是用来判断’name’是否是obj的自身属性。
