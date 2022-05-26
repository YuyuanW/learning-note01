# jQuery相关功能
## Question
* jQuery 如何获取元素
* jQuery 的链式操作是怎样的
* jQuery 如何创建元素
* jQuery 如何移动元素
* jQuery 如何修改元素的属性

### jQuery 如何获取元素
jQuery的基本设计思想和主要用法，就是"选择某个网页元素，然后对其进行某种操作"。这是它区别于其他Javascript库的根本特点。其余大部分的都是，分离的，要么使用api选择元素，要么是对已经选中的节点进行操作，选择后可以直接操作是jQuery的一大特色。

使用jQuery的第一步，往往就是将一个选择表达式，放进构造函数jQuery()（简写为$），然后得到被选中的元素。
```js
$(document) //选择整个文档对象
$('#myId') //选择ID为myId的网页元素
$('div.myClass') // 选择class为myClass的div元素
$('input[name=first]') // 选择name属性等于first的input元素
```

### jQuery 的链式操作是怎样的
jQuery链式操作，就是最终选中网页元素以后，可以对它进行一系列操作，并且所有操作可以连接在一起，以链条的形式写出来。它基于的原理是闭包和返回api。比如：
```js
$('div').find('h3').eq(2).html('Hello');
```

分解开就是
```js
$('div') //找到div元素
.find('h3') //选择其中的h3元素
.eq(2) //选择第3个h3元素
.html('Hello'); //将它的内容改为Hello
```

### jQuery 如何创建元素
创建新元素的方法非常简单，只要把新元素直接传入jQuery的构造函数就行了
```js
$('<p>Hello</p>');
$('<li class="new">new list item</li>');
$('ul').append('<li>list item</li>');
```

### jQuery 如何移动元素
jQuery中移动元素，就是提供两组方法，来操作元素在网页中的位置移动。一组方法是直接移动该元素，另一组方法是移动其他元素，使得目标元素达到我们想要的位置。

假定我们选中了一个div元素，需要把它移动到p元素后面。

第一种方法是使用.insertAfter()，把div元素移动p元素后面：
```js
$('div').insertAfter($('p'));
```

第二种方法是使用.after()，把p元素加到div元素前面：
```js
$('p').after($('div'));
```

### jQuery 如何修改元素的属性
操作网页元素，最常见的需求是取得它们的值，或者对它们进行赋值。

jQuery中的取值和赋值，就是使用同一个函数，来完成取值（getter）和赋值（setter），即"取值器"与"赋值器"合一。到底是取值还是赋值，由函数的参数决定。
```js
　　$('h1').html(); //html()没有参数，表示取出h1的值

　　$('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值
```

常见的取值和赋值函数如下：
```js
　　.html() 取出或设置html内容

　　.text() 取出或设置text内容

　　.attr() 取出或设置某个属性的值

　　.width() 取出或设置某个元素的宽度

　　.height() 取出或设置某个元素的高度

　　.val() 取出某个表单元素的值
```

需要注意的是，如果结果集包含多个元素，那么赋值的时候，将对其中所有的元素赋值；取值的时候，则是只取出第一个元素的值（.text()例外，它取出所有元素的text内容）。



