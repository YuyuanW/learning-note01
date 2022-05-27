// const api = jQuery('.test') //jQuery不返回元素们，返回的是一个api对象
//遍历所有刚才获取的元素，添加.red
// jQuery('.test').addClass('red').addClass('blue').addClass('green') //链式操作

//1.查找
//jQuery('#xxx').find('.red')查找#xxx中的.red元素
const x1 = jQuery('.test1').find('.child')
console.log(x1)
const x2 = jQuery('.test').find('.child')
console.log(x2)
const x3 = x2.addClass('red')
const x4 = x1.addClass('green')


//2.链式操作后回上一个节点进行操作
//x4是对child进行操作，我想返回上面一个节点test1进行操作,在test1上加一个yellow
x4.end().addClass('yellow')

//3.遍历节点each map函数
x4.each(div => console.log(div))

//4.查找父亲
jQuery('.test').parent().print()
//5.查找儿子
jQuery('.test').children().print()


