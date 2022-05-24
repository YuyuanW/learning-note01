window.dom = {
    // dom.create = function(){}
    create(string){ //创建一个节点
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild},
    after(node1,node2){// 在原有节点node1的后面新增一个弟弟节点
        node1.parentNode.insertBefore(node2,node1.nextSibling)
    },
    before(node1,node2){ //在原有节点node2的前面新增一个哥哥节点
        node2.parentNode.insertBefore(node1,node2)
    },
    append(parent,son){ //在原有节点parent后代中增加一个儿子
        parent.appendChild(son)
    },
    wrap(son,parent){//在原有节点son的祖辈增加一个父节点
        dom.before(parent,son)
        dom.append(parent,son)
    },
    remove(node){ //删除一个节点本身
        node.parentNode.removeChild(node)
        return node
    },
    // empty(node){ // 遍历去删除节点后代
    //     // let childNodes = node.childNodes 得到node的所有儿子
    //     //升级为高级的语法如同下一行
    //     let {childNodes} = node
    //     let array = []
    //     for(let i=0 ; i< childNodes.length ;i++){
    //         demo.remove(childNodes[i])
    //         array.push(childNodes[i])
    //     }
    //     return array
    // }, 这个样子，删除节点后，length的长度会实时发生变化
    empty(node){
        let array = []
        let x = node.firstChild
        while(x){
            array.push(dom.remove(x))
            x = node.firstChild
        }
        return array
    },
    attr(node,name,value){ //设置属性值和属性名
        if(arguments.length === 3){
            return node.setAttribute(name,value)
        }else if(arguments,length === 2){
            return node.getAttribute(name)
        }
    },
    text(node,string){
        if(arguments.length === 2){(innerContent in node) ? node.innerContent = string : node.textContent = string}
        else if(arguments.length === 1){if(innerContent in node){return node.innerContent}else{return node.textContent}}
    },
    html(node,string){
        if(arguments.length === 2){return node.innerHTML = string }
        else if(arguments.length === 1){return node.innerHTML}
    },
    style(node,name,value){
        if(arguments.length = 3){return node.style[name] = value} //dom.style(div,'color','red')
        else if(arguments.length = 2){
            if(typeof name === 'string'){return node.style[name]}//dom.style(div,'color')
            else if(name instanceof Object){
                for(let key in name){node.style[key] = name[key]}}
                //dom.style(div.{border:'1px solid red',color:blue})
        }
    },
    class :{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },
    on(node,event,fn){
        node.addEventListener(event,fn)
    },
    off(node,event,fn){
        node.removeEventListener(event,fn)
    },
    find(selector,scop){
        return (scop || document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){
        return Array.from(node.parent.children).filter(x => x !== node)
    },
    next(node){
        let x = node.nextSibling
        while(x && x.nodeType === 3){
            x = x.nextSibling
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parent)
        let i
        for(i=0;i<list.length;i++){
            if(list[i] === node){break}
        }
        return i+1
    }
};

