console.log('hi');
const div = dom.create('<div><span>hi</span></div>');
console.log(div);
dom.after(test, div);
const parent = dom.create(`<div id='parent'>parent</div>`);
dom.wrap(test, parent);
dom.attr(test, title, '达拉崩吧');
dom.text(test, '你好，这是新的内容');
dom.style(test, {
    border: '1px solid red',
    color: 'blue'
});
dom.style(test, 'border');
dom.style(test, 'border', '1px solid black');
dom.class.add(test, 'red');
dom.class.add(test, 'blue');
dom.class.remove(test, 'red');
console.log(dom.class.has(test, 'blue'));
console.log(dom.class.has(test, 'red'));

//# sourceMappingURL=index.de158e3a.js.map
