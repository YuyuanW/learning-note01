# css知识总结作业

## Question
1. 浏览器渲染原理
2. CSS 动画的两种做法（transition 和 animation）
3. 其他任何你想写的

## Answer
### 浏览器渲染原理
浏览器会解析三个东西：. Javascript脚本，主要是DOM API来操作DOM Tree(html树)和CSSOM API来操作CSS Rule Tree(CSSOM)。

1. 先根据HTML构建HTML树(DOM)，根据CSS构建CSS树(CSSOM)
2. 将DOM Tree和CSS Tree合并成一颗渲染树，构建Render Tree。
3. 然后进行布局layout，例如文档流、盒模型、大小位置的安置，
4. 然后进行paint绘制，例如边框颜色，文字颜色，阴影的绘制
5. 最后compose合成，根据层叠关系展示画面。

### CSS 动画的transition
`transition：过渡，即为补充中间帧。`
* `Transition：.A--transfrom-- >.B`

过渡用口水话来说就是，在原始状态.A写上transition属性，浏览器就知道，接下来会有个动作了，并且可以通过transition的属性来控制动作的形式，但是动作的过程和过渡到的状态.B还需要语句，因此transition结合transfrom来写动作的过程，用hover来写过渡后的状态，结合js可以有更多好玩的事情。(但是目前只是使用js完成过渡和延时)

使用可以参考：[transition与hover](https://github.com/YuyuanW/learning-note01/blob/2fb851bcf1db314fafad34429083706aa8e02305/13%E5%8A%A8%E7%94%BB%E2%99%A5/transition01.html)
和[transition与js](https://github.com/YuyuanW/learning-note01/blob/2fb851bcf1db314fafad34429083706aa8e02305/13%E5%8A%A8%E7%94%BB%E2%99%A5/transition02.html)

* 如果是多状态过渡？
`Transition：.A--transfrom-- >.B--transfrom-- >.C`
原始状态写transition，然后写两次transfrom，就能实现过渡。更多的状态以此类推。
```
Transition：.A--transfrom-- >.B 
			 .B--transfrom-- >.C
```
使用可以参考：[transition多状态](https://github.com/YuyuanW/learning-note01/blob/2fb851bcf1db314fafad34429083706aa8e02305/13%E5%8A%A8%E7%94%BB%E2%99%A5/transition03.html)

### CSS 动画的animation
`animation：动画，可以添加动画和声明关键帧。`

写口水话了，动画写出来就是说接下来这个属性会有动作，然后通过关键帧实现这些动作。关键帧的添加是通过@keyframes来添加的，0%原始状态是什么样，33.33%时属性是什么样子，100%时又是什么样子。这个看一眼就会用了，具体咋用可以参考我的博客还有mdn。

使用可以参考：[animation的基本使用](https://github.com/YuyuanW/learning-note01/blob/2fb851bcf1db314fafad34429083706aa8e02305/13%E5%8A%A8%E7%94%BB%E2%99%A5/animation.html)

### 两颗跳动的♥ 
[transition的♥](https://github.com/YuyuanW/learning-note01/blob/2fb851bcf1db314fafad34429083706aa8e02305/13%E5%8A%A8%E7%94%BB%E2%99%A5/heart.html)、 
[animation的♥](https://github.com/YuyuanW/learning-note01/blob/2fb851bcf1db314fafad34429083706aa8e02305/13%E5%8A%A8%E7%94%BB%E2%99%A5/heart-animation.html)

### css的学习
学数学习惯了就喜欢啥都先说地清清楚楚再做题，学css理清楚是先实践再整理。
