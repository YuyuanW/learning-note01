console.log('hi')
const div = dom.create('<div><span>hi</span></div>');
console.log(div)
dom.after(test,div)
const parent = dom.create(`<div id='parent'>parent</div>`)
dom.wrap(test,parent)
dom.attr(test,title,'达拉崩吧')
dom.text(test,'你好，这是新的内容')
dom.style(test,{border:'1px solid red',color:'blue'})
dom.style(test,'border')
dom.style(test,'border','1px solid black')
dom.class.add(test,'red')
dom.class.add(test,'blue')
dom.class.remove(test,'red')
console.log(dom.class.has(test,'blue'))
console.log(dom.class.has(test,'red'))

const fn = ()=>{console.log('点击了！！！！')}
dom.on(test,'click',fn)
dom.off(test,'click',fn)

const divTest = dom.find('#test')[0]
console.log(divTest)
const div2 = dom.find('test2')[0]
console.log(dom.find('.red',test2)[0])

const s2 = dom.find('#s2')[0]
console.log(s2)
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))

console.log(dom.index(s2))