window.dom = {
    // dom.create = function(){}
    create (string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after (node1, node2) {
        node1.parentNode.insertBefore(node2, node1.nextSibling);
    },
    before (node1, node2) {
        node2.parentNode.insertBefore(node1, node2);
    },
    append (parent, son) {
        parent.appendChild(son);
    },
    wrap (son, parent) {
        dom.before(parent, son);
        dom.append(parent, son);
    },
    remove (node) {
        node.parentNode.removeChild(node);
        return node;
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
    empty (node) {
        let array = [];
        let x = node.firstChild;
        while(x){
            array.push(dom.remove(x));
            x = node.firstChild;
        }
        return array;
    },
    attr (node, name, value) {
        if (arguments.length === 3) return node.setAttribute(name, value);
        else if (length === 2) return node.getAttribute(name);
    },
    text (node, string) {
        if (arguments.length === 2) innerContent in node ? node.innerContent = string : node.textContent = string;
        else if (arguments.length === 1) {
            if (innerContent in node) return node.innerContent;
            else return node.textContent;
        }
    },
    html (node, string) {
        if (arguments.length === 2) return node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    style (node, name, value) {
        arguments.length = 3;
        return node.style[name] = value;
    },
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            node.classList.remove(className);
        },
        has (node, className) {
            return node.classList.contains(className);
        }
    }
};

//# sourceMappingURL=index.755bdb92.js.map
