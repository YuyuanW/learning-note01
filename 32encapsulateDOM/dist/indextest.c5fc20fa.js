window.dom = {
    find (selector, scop) {
        return (scop || document).querySelectorAll(selector);
    },
    style (node, name, value) {
        arguments.length = 3;
        return node.style[name] = value;
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    }
};
const div = dom.find('#test>.red')[0] // 获取对应的元素
;
console.log(div);
dom.style(div, 'color', 'red') // 设置 div.style.color
;
const divList = dom.find('.red') // 获取多个 div.red 元素
;
console.log(divList);
dom.each(divList, (n)=>console.log(n)
) // 遍历 divList 里的所有元素
;

//# sourceMappingURL=indextest.c5fc20fa.js.map
