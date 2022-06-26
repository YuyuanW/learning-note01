//程序员崇尚简洁，如果你觉得某个编程概念很难，那一定是你理解错了，重新理解一下

const createTree = (value)=>{
    return {
        data : value , 
        children : null,
        parent : null
    }
}

const appendChild = (node,value)=>{
    const newNode = createTree(value)
    newNode.parent = node
    node.children = node.children || []
    node.children.push(newNode)
    return newNode
}

const travelTree = (tree,fn)=>{
    fn(tree)
    if(tree.children){
        for(let i=0 ; i < tree.children.length ; i++){
            travelTree(tree.children[i],fn)
        }
    }
}


const find = (tree,node)=>{
    if(tree == node){
        return tree
    }else if(tree.children){
        for(let i=0 ; i<tree.children.length ; i++){
            const result = find(tree.children[i],node)
            if(result){
                return result
            }
        }
        return undefined
    }
    return undefined
}

const removeNode = (tree,node)=>{
    const siblings =  node.parent.children || tree.children
    let index = -1
    for(let i=0 ; i< siblings.length ; i++){
        if(siblings[i] == node){
            index = i 
            break
        }
    }
    siblings.splice(index,1)
    return tree


}

let tree = createTree(10)
let node2 = appendChild(tree,20)
let node3 = appendChild(tree,30)
let node21 = appendChild(node2,201)
let node22 = appendChild(node2,202)
let node31 = appendChild(node3,301)
// travelTree(tree,(node)=>{console.log(node.data)})
// console.log(tree)
// console.log(find(tree,node21))
travelTree(tree,(node)=>{console.log(node.data)})
console.log(`=============================s`)
let re = removeNode(tree,node22)
travelTree(re,(node)=>{console.log(node.data)})

