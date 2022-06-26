
const createList = (value)=>{
    return createNode(value)
}

const appendList = (node,value)=>{
    const newNode = createNode(value)
    let nodes = node
    while(nodes.next){
        nodes = nodes.next
    }
    nodes.next = newNode
    return newNode
}

const createNode = (value)=>{
    return {
        data : value ,
        next : null
    }
}

const removeNode = (list,node)=>{
    //如果list是第一个节点呢？
    let lastNodes =  null
    let nodes = list
    while(nodes !== node){
        lastNodes = nodes
        nodes = nodes.next
        
    }
    if(lastNodes){
        lastNodes.next = node.next
    }else{
        list = node.next
    
    }
    return list
}   

const travelList = (list,fn)=>{
    let node = list
    while(node){
        fn(node)
        node = node.next
    }
}


let list = createList(10)
const node2 = appendList(list,20)
const node3 = appendList(list,30)

// list = removeNode(list,node2)
console.log(`list:`,list)
travelList(list,(node)=>{
    console.log(node.data)
})
