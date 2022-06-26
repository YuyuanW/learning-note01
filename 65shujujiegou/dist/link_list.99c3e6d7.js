const createList = (value)=>{
    return createNode(value);
};
const appendList = (node, value)=>{
    const newNode = createNode(value);
    let nodes = node;
    while(nodes.next)nodes = nodes.next;
    nodes.next = newNode;
    return newNode;
};
const createNode = (value)=>{
    return {
        data: value,
        next: null
    };
};
const removeNode = (list1, node)=>{
    //如果list是第一个节点呢？
    let lastNodes = null;
    let nodes = list1;
    while(nodes !== node){
        lastNodes = nodes;
        nodes = nodes.next;
    }
    if (lastNodes) lastNodes.next = node.next;
    else list1 = node.next;
    return list1;
};
const travelList = (list2, fn)=>{
    let node = list2;
    while(node){
        fn(node);
        node = node.next;
    }
};
let list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
// list = removeNode(list,node2)
console.log(`list:`, list);
travelList(list, (node)=>{
    console.log(node.data);
});

//# sourceMappingURL=link_list.99c3e6d7.js.map
