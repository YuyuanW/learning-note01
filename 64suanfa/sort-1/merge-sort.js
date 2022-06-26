// 思路：先分为两部分，假设两部分也是已经排好序的，然后再合并，合并的方法是，比较两半中哪一个更小，取出来，剩下的继续比较取出。
// 思想：递归——重复的部分直接循环
// 时间复杂度：nlog2 n

let mergeSort = (arr)=>{
    if(arr.length == 1){
        return arr
    }else{
        // 分为两部分
        let length = arr.length/2
        let left = arr.slice(0,Math.floor(length)) 
        let right = arr.slice(Math.floor(length))
        // 合并已经排好序的
        return merge(mergeSort(left),mergeSort(right))
    }
}

let merge = (left,right) =>{
    if(left.length == 0) return right
    if(right.length == 0) return left
    return left[0] < right[0] ? [left[0]].concat(merge(left.slice(1),right)) : [right[0]].concat(merge(right.slice(1),left)) 
}

mergeSort([1,2,4,2,1,4,7,4,3,5,2])